import React from "react";
import { Text,View,SafeAreaView, TouchableOpacity,ScrollView,Image} from "react-native";
import Header from "../components/header";
import { globalContainer } from "../styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";

export default function Chat(){
    return(
        <SafeAreaView style={globalContainer.container}>
            <Header title="History"/>
            <View className="flex-row justify-between w-[80%] self-center mb-[30px]">
                <TouchableOpacity className="py-[10px] border-b-[5px] border-[#9FF5C1] flex justify-center items-center">
                    <Text className="text-[#9FF5C1] text-[11px] font-poppins_semiBold">Messages</Text>
                </TouchableOpacity>
                <TouchableOpacity className="py-[10px] border-b-[0px] border-[#9FF5C1] flex justify-center items-center">
                    <Text className="text-[#000000CC] text-[11px] font-poppins_semiBold">Voice Calls</Text>
                </TouchableOpacity>
                <TouchableOpacity className="py-[10px] border-b-[0px] border-[#9FF5C1] flex justify-center items-center">
                    <Text className="text-[#000000CC] text-[11px] font-poppins_semiBold">Video Calls</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View className="flex-row justify-between py-[10px] items-center">
                    <View className="flex-row items-center">
                        <View className="w-[50px] h-[50px] rounded-full overflow-hidden border-[3px] border-[#D9D9D9] mr-[10px]">
                            <Image source={require("../assets/images/icon.png")} className="w-[100%] object-cover h-[100%] rounded-full"/>
                        </View>
                        <View>
                            <Text className="text-[#000000CC] text-[11px] font-poppins_semiBold">Doctor John</Text>
                            <Text className="text-[#000000CC] text-[11px] font-poppins_regular">When was the last time you ....</Text>
                        </View>
                    </View>
                    <View>
                        <Text className="text-[#8E8E8E] text-[11px] font-poppins_regular">Yesterday</Text>
                        <Text className="text-[#8E8E8E] text-[11px] font-poppins_regular">7:00PM</Text>
                    </View>
                </View>
                <View className="flex-row justify-between py-[10px] items-center">
                    <View className="flex-row items-center">
                        <View className="w-[50px] h-[50px] rounded-full overflow-hidden border-[3px] border-[#D9D9D9] mr-[10px]">
                            <Image source={require("../assets/images/icon.png")} className="w-[100%] object-cover h-[100%] rounded-full"/>
                        </View>
                        <View>
                            <Text className="text-[#000000CC] text-[11px] font-poppins_semiBold">Doctor John</Text>
                            <Text className="text-[#000000CC] text-[11px] font-poppins_regular">When was the last time you ....</Text>
                        </View>
                    </View>
                    <View>
                        <Text className="text-[#8E8E8E] text-[11px] font-poppins_regular">Yesterday</Text>
                        <Text className="text-[#8E8E8E] text-[11px] font-poppins_regular">7:00PM</Text>
                    </View>
                </View>
                <View className="flex-row justify-between py-[10px] items-center">
                    <View className="flex-row items-center">
                        <View className="w-[50px] h-[50px] rounded-full overflow-hidden border-[3px] border-[#D9D9D9] mr-[10px]">
                            <Image source={require("../assets/images/icon.png")} className="w-[100%] object-cover h-[100%] rounded-full"/>
                        </View>
                        <View>
                            <Text className="text-[#000000CC] text-[11px] font-poppins_semiBold">Doctor John</Text>
                            <Text className="text-[#000000CC] text-[11px] font-poppins_regular">When was the last time you ....</Text>
                        </View>
                    </View>
                    <View>
                        {/* <Text className="text-[#8E8E8E] text-[11px] font-poppins_regular">Yesterday</Text>
                        <Text className="text-[#8E8E8E] text-[11px] font-poppins_regular">7:00PM</Text> */}
                        <Ionicons name="call" size={18}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}