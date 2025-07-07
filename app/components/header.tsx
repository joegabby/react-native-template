import React from "react";
import { Text,View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
};
export default function Header({title}:Props){
    return(
        <View className="flex-row justify-center items-center bg-white py-[24px]">
            <Text className="font-poppins_bold">{title}</Text>
            <TouchableOpacity className="absolute right-[20]">
                <Ionicons name="notifications" size={24} color="#000" />
                <View className="absolute right-0">
                    <Ionicons name="ellipse" size={10} color="red" />
                </View>
            </TouchableOpacity>
        </View>
    )
}