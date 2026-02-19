import React from "react";
import { FlatList, Text,TouchableOpacity,View } from "react-native";
import Requirements from "./enums/applicantsRequirements";
import { useNavigation } from "@react-navigation/native";
export default function RequirementsCard(){
    const navigation = useNavigation<any>();
    return(
        <View className="flex-1">
            <View>
                <Text className="text-[12px] leading-[24px] text-[#E74C3C] font-Niramit_Regular text-center">
                    Returning Applicants should enroll based on the appropriate category that currently applies to them.
                </Text>
            </View>
            <FlatList
                data={Requirements}
                keyExtractor={(_,index) => index.toString()}
                renderItem={({ item }) => (  
                    <View className="bg-white my-4 border border-[#E9EAEB] rounded-[12px] p-[24px] justify-center items-center">
                        <Text className="font-Niramit_Bold text-[18px] leading-[27px] text-[#181D27] mb-[10px] text-center">{item.position}</Text>
                        <Text className="font-Niramit_SemiBold text-[15px] leading-[27px] text-[#181D27] mb-[5px]">Requirements</Text>
                        <FlatList
                            className="mb-[30px]"
                            data={item.requirements}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={({ item:requirement, index })=>(
                                <View className="items-center">
                                    <Text className="font-Niramit_Regular text-[12px] leading-[21px] text-[#535862] mb-[5px] text-center">•  {requirement}</Text>
                                    {item.options && index !== item.requirements.length - 1 && (
                                        <Text className="text-[12px] leading-[21px] text-[#535862] font-Niramit_SemiBold my-[2px] text-center">OR</Text>
                                    )}
                                </View>                   
                            )}                    
                        />
                        <TouchableOpacity onPress={()=>navigation.navigate("Forms")} className="bg-[#215346] w-full justify-center items-center py-[10px] rounded-[6px]">
                            <Text className="text-white font-Niramit_SemiBold text-[12px] leading-[18px]">Apply Now</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}