import React from "react";
import { Text,View,FlatList,TouchableOpacity } from "react-native";
import FaqsList from "./enums/faqs";
import { Ionicons } from "@expo/vector-icons";
export default function FrequentlyAskedQuestions(){
    return(
        <FlatList
            data={FaqsList}
            keyExtractor={(_,index) => index.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity className="flex-row justify-between py-[25px] px-[30px] bg-white rounded-[10px] my-[10px] items-center">
                    <View className="w-[200px]">
                        <Text className="font-Niramit_Medium text-[#141C24] leading-[21px] text-[14px]">{item.title}</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={16} color="#344051" />                  
                </TouchableOpacity>
            )}
        />
        
    )
}