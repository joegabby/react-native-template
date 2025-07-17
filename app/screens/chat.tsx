import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView, ScrollView, Text, View, TextInput } from "react-native";
import { globalContainer } from "../styles/globalStyles";
import Header from "../components/header";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { api } from "../services/service";
import { useVitals } from "../context/vitalsContext";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute } from "@react-navigation/native";
import TypingBubble from "../components/typingBubble";

type MessageType = {
  id: string;
  text: string;
  fromMe: boolean;
};
type Message = {
  id: string;
  text: string;
  fromMe: boolean;
};

type ChatHistory = {
  [chatId: string]: Message[];
};
export default function Chat() {
  const route = useRoute();
  const { chatId } = route.params as { chatId: string };
  const [inputHeight, setInputHeight] = useState(50);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [messageText, setMessageText] = useState(""); // ✅ added this
  const scrollViewRef = useRef<ScrollView>(null); // ✅ added this
  const { vitals } = useVitals();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadChatHistory = async () => {
      const existing = await AsyncStorage.getItem("chatHistory");
      const parsed = existing ? JSON.parse(existing) : {};
      setMessages(parsed[chatId] || []);
    };
    loadChatHistory();
  }, [chatId]);

  const handleSendMessage = async () => {
    if (!messageText.trim()) return;

    const newMessage = {
      id: uuid.v4().toString(),
      text: messageText,
      fromMe: true,
      timestamp: new Date().toISOString(), // <-- Add this line
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessageText("");
    setLoading(true); // Start loading animation

    await saveMessageToHistory(chatId, newMessage);

    try {
      const response = await api.sendMessage(vitals, messageText, chatId);
      const botReply = {
        id: uuid.v4().toString(),
        text: response.response || "Bot response...",
        fromMe: false,
        timestamp: new Date().toISOString(), // <-- Add this line
      };
      setMessages((prev) => [...prev, botReply]);
      await saveMessageToHistory(chatId, botReply);
    } catch (error) {
      console.error("Sending message failed:", error);
    } finally {
      setLoading(false);
    }
  };
  const saveMessageToHistory = async (chatId: string, newMessage: any) => {
    try {
      const existing = await AsyncStorage.getItem("chatHistory");
      const parsed = existing ? JSON.parse(existing) : {};

      if (!parsed[chatId]) parsed[chatId] = [];
      parsed[chatId].push(newMessage);

      await AsyncStorage.setItem("chatHistory", JSON.stringify(parsed));
    } catch (err) {
      console.error("Failed to save message:", err);
    }
  };
  // ✅ Auto-scroll when new messages are added
  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <SafeAreaView style={globalContainer.container}>
      <Header title="Chat" />
      <ScrollView
        ref={scrollViewRef}
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {messages.map((msg) => (
          <View
            key={msg.id}
            className={`max-w-[80%] px-4 py-2 rounded-xl mb-2 ${
              msg.fromMe
                ? "bg-blue-500 self-end rounded-tr-none"
                : "bg-gray-300 self-start rounded-tl-none"
            }`}
          >
            <Text
              className={`text-[14px] leading-[20px] ${
                msg.fromMe ? "text-white" : "text-black"
              }`}
            >
              {msg.text}
            </Text>
          </View>
        ))}

        {/* Typing animation below the messages */}
        {loading && (
          <View className="self-start px-4 py-2 mb-2">
            <TypingBubble />
          </View>
        )}
      </ScrollView>

      <View
        className="flex-row justify-between border border-[#999] mt-[10px] rounded-[30px] overflow-hidden p-[5px] items-end"
        style={{ minHeight: 50 }}
      >
        <TextInput
          placeholder="Type a message..."
          placeholderTextColor="#999"
          multiline
          value={messageText}
          onChangeText={setMessageText}
          onContentSizeChange={(e) =>
            setInputHeight(e.nativeEvent.contentSize.height)
          }
          style={{ height: Math.max(50, inputHeight) }}
          className="flex-1 px-[12px] py-[8px] rounded-[12px] text-[14px] max-h-[100px]"
        />
        <TouchableOpacity
          onPress={handleSendMessage} // ✅ added handler
          className="flex-row items-center bg-slate-600 rounded-full h-[50px] w-[50px] justify-center ml-2"
        >
          <Ionicons name="arrow-up" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
