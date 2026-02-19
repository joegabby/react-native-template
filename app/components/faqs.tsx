import React, { useState } from "react";
import { Text,View,FlatList,TouchableOpacity } from "react-native";
import FaqsList from "./enums/faqs";
import { Ionicons } from "@expo/vector-icons";
export default function FrequentlyAskedQuestions(){
    const [currentIndex, setCurrentIndex] = useState(-1);

    return(
        <FlatList
            data={FaqsList}
            keyExtractor={(_,index) => index.toString()}
            renderItem={({ item, index }) => {
            return(
                <TouchableOpacity onPress={() => {currentIndex === index ? setCurrentIndex (-1) : setCurrentIndex(index)}} className="flex-row justify-between items-center py-[25px] px-[30px] bg-white rounded-[10px] my-[10px]">
                    <View className="w-[90%]">
                        <Text className="font-Niramit_Medium text-[#141C24] leading-[21px] text-[14px]">{item.title}</Text>
                        {index === currentIndex &&
                            <FlatList
                                data={item.content}
                                keyExtractor={(_,index) => index.toString()}
                                renderItem={({ item:content, index })=>(
                                    <Text className="mt-[10px] font-Niramit_Medium text-[#606060] leading-[21px] text-[12px]">
                                        {content}
                                    </Text> 
                                )}
                            />
                        }
                    </View>  
                    <View className="">
                    <Ionicons
                        name={index === currentIndex ? "chevron-down" : "chevron-forward"}
                        size={16}
                        color={index === currentIndex ? "#4E8B1F" : "#344051"}
                    />
                    </View>   
                </TouchableOpacity>
            )}}
        />
        
    )
}