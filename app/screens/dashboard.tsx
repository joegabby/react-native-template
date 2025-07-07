import React from "react";
import { Text,View,TouchableOpacity,SafeAreaView } from "react-native";
import Header from "../components/header";
import { globalContainer } from "../styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import VitalsTrackingCards from "../components/vitalsTrackingCards";


export default function Dashboard(){
    const getFormattedDate = (): string => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return today.toLocaleDateString("en-GB", options); // Example: 7 Jul, 2025
};
    return(
        <SafeAreaView style={globalContainer.container}>
            <Header title="Dashboard"/>

            <View className="bg-[#BECFFE33] py-[13px] px-[32px] rounded-[12px] mb-[24px]">
                <View className="flex-row items-center mb-[5px]">
                    <View className="rotate-[-15deg] mr-[5px]">
                        <Ionicons name="notifications" size={10} color="#00000099"/>
                    </View>
                    <Text className="text-[#00000099] text-[11px] font-poppins_semiBold">Reminder</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-[#00000066] text-[12px] font-poppins_regular">Next Malaria Dosage</Text>
                    <Text className="text-[#FF000066] text-[12px] font-poppins_regular">7:00PM</Text>
                </View>
            </View>

            <View className="mb-[25px]">
                <Text className="text-[20px] font-poppins_semiBold mb-[15px]">Hey there 👋</Text>
                <Text className="font-poppins_semiBold">Today: {getFormattedDate()}</Text>
            </View>

            <VitalsTrackingCards/>
        </SafeAreaView>
    )
}