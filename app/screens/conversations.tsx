import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import Header from "../components/header";
import { globalContainer } from "../styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList, TabParamList } from "../navigators/navigationTypes";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

type HomeNavProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Dashboard">, // 1️⃣ tab routes
  NativeStackNavigationProp<RootParamList> // 2️⃣ stack routes
>;
type Message = {
  id: string;
  chatId: string;
  text: string;
  fromMe: boolean;
  timestamp: number;
};

type ChatSessions = {
  [chatId: string]: Message[]; // messages grouped by chatId
};
export default function Conversations() {
  const navigation = useNavigation<HomeNavProp>();
  const [refreshing, setRefreshing] = useState(false);

  const [chatSessions, setChatSessions] = useState<
    { chatId: string; firstMessage: Message }[]
  >([]);

  const loadChatSessions = async () => {
    const stored = await AsyncStorage.getItem("chatHistory");
    if (!stored) return;

    const parsed = JSON.parse(stored) as ChatSessions;
    const sessionsArray = Object.entries(parsed).map(([chatId, messages]) => ({
      chatId,
      firstMessage: messages[0],
    }));

    sessionsArray.sort(
      (a, b) => b.firstMessage.timestamp - a.firstMessage.timestamp
    );
    setChatSessions(sessionsArray);
  };
  const handleRefresh = async () => {
    setRefreshing(true);
    await loadChatSessions();
    setRefreshing(false);
  };
  useFocusEffect(
    useCallback(() => {
      loadChatSessions();
    }, [])
  );
  const formatChatDate = (timestamp: string | number | Date) => {
  const date = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const isYesterday =
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear();

  if (isToday) return "Today";
  if (isYesterday) return "Yesterday";

  // Format like "17th Jul, 2025"
  const day = date.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  return `${day}${suffix} ${month}, ${year}`;
};

  return (
    <SafeAreaView style={globalContainer.container}>
      <Header title="History" />
      <FlatList
        data={chatSessions}
        keyExtractor={(item) => item.chatId}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex-row justify-between py-[10px] items-center"
            onPress={() => navigation.navigate("Chat", { chatId: item.chatId })}
          >
            <View className="flex-row items-center">
              <View className="w-[50px] h-[50px] rounded-full overflow-hidden border-[3px] border-[#D9D9D9] mr-[10px]">
                <Image
                  source={require("../assets/images/icon.png")}
                  className="w-[100%] object-cover h-[100%] rounded-full"
                />
              </View>
              <View>
                <Text className="text-[#000000CC] text-[11px] font-poppins_semiBold">
                  {item.firstMessage.fromMe ? "You" : "AI Assistant"}
                </Text>
                <Text
                  className="text-[#000000CC] text-[11px] font-poppins_regular"
                  numberOfLines={1}
                >
                  {item.firstMessage.text}
                </Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="text-[#8E8E8E] text-[11px] font-poppins_regular">
                  {formatChatDate(item.firstMessage.timestamp)}
              </Text>
              <Text className="text-[#8E8E8E] text-[11px] font-poppins_regular">
                {new Date(item.firstMessage.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12:true
                })}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        onPress={() => {
          const newChatId = uuid.v4().toString();
          navigation.navigate("Chat", { chatId: newChatId });
        }}
        className="flex-row absolute bg-[#318f57] justify-center items-center p-[20px] rounded-[8px] bottom-[150px] right-[20px]"
      >
        <View className="flex-row">
          <Ionicons name="chatbox-ellipses-outline" size={18} color="white" />
          <View className="absolute right-[-2px] bg-[#318f57] rounded-full top-[-2px]">
            <Ionicons name="add-outline" size={10} color="white" />
          </View>
        </View>
        <Text className="text-white text-[11px] font-poppins_regular ml-[10px]">
          New Chat
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
