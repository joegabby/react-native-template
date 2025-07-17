import React, { useEffect, useState, useCallback } from "react";
import {
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { api } from "../services/service";
import { useVitals, VitalsProvider } from "../context/vitalsContext";

export default function VitalsTrackingCards() {
  // const [refreshing, setRefreshing] = useState(false);
  const { vitals, refreshing, refreshVitals } = useVitals();
  useEffect(() => {
    refreshVitals();
  }, []);
  return (
    <VitalsProvider>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshVitals} />
        }
      >
        <View className="flex-row justify-between flex-wrap mb-[30px]">
          <View className="bg-[#BECFFE] w-[48%] p-[16px] rounded-[32px]">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="heart" size={16} color="#FE0000" />
                <Text className="text-[#000] text-[11px] font-poppins_Medium ml-[5px]">
                  Heart Rate
                </Text>
              </View>
            </View>
            <View className="my-[15px]">
              <Text className="text-[28px] text-[#000] font-poppins_bold leading-[32px]">
                {vitals?.heart_rate ?? "--"}
              </Text>
              <Text className="text-[#000] text-[11px] font-poppins_regular">
                beats/min
              </Text>
            </View>
            <View>
              <Text className="text-[11px] font-poppins_Medium text-[#00000066] w-[80%]">
                Normal: 60 to 100 beats/min
              </Text>
            </View>
          </View>

          <View className="bg-[#9FF5C1] w-[48%] p-[16px] rounded-[32px]">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="water" size={16} color="#FE0000" />
                <Text className="text-[#000] text-[11px] font-poppins_Medium ml-[5px]">
                  Blood Pressure
                </Text>
              </View>
            </View>
            <View className="my-[15px]">
              <Text className="text-[28px] text-[#000] font-poppins_bold leading-[32px]">
                {vitals?.blood_oxygen ?? "--"}
              </Text>
              <Text className="text-[#000] text-[11px] font-poppins_regular">
                mmHg
              </Text>
            </View>
            <View>
              <Text className="text-[11px] font-poppins_Medium text-[#00000066] w-[100%]">
                Normal: 90/60 mmHg to 120/80 mmHg
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row justify-between flex-wrap">
          <View className="bg-[#FDD6BC] w-[48%] p-[16px] rounded-[32px]">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="thermometer" size={16} color="#FE0000" />
                <Text className="text-[#000] text-[11px] font-poppins_Medium ml-[5px]">
                  Temperature
                </Text>
              </View>
            </View>
            <View className="my-[15px]">
              <Text className="text-[28px] text-[#000] font-poppins_bold leading-[32px]">
                {vitals?.temperature ?? "--"}
              </Text>
              <Text className="text-[#000] text-[11px] font-poppins_regular">
                °Celsius
              </Text>
            </View>
            <View>
              <Text className="text-[11px] font-poppins_Medium text-[#00000066]">
                Normal: 36.1°Celsius to 37.2°Celsius
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </VitalsProvider>
  );
}
