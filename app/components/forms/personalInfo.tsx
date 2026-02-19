import React from "react";
import { View,Text,TouchableOpacity,TextInput,ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useFormValidation from "../helpers/formValidator";
import CustomDropdown from "../dropdown";
import { genderOptions } from "../enums/lists";
export default function PersonalInfoForm(){
    const initialFormState = { firstName: "", lastName: "", email: "", phone: "", gender:"", address:"", department:"", password: "", passwordRetype: "" };
    const { formInput, formError, handleInputChange, validateForm } = useFormValidation(initialFormState);
    return(
        <ScrollView>
            <Text>PERSONAL INFORMATION</Text>
            <View>
                <View className="mb-[20px] border border-gray-900 bg-white rounded-lg">
                    <CustomDropdown data={genderOptions} placeholder={"What is your gender?"} value={(value)=>handleInputChange("gender",value)}/>
                    {formError.gender && <Text className="text-red-500 text-xs text-center">{formError.gender}</Text>}
                </View> 
                <View className={`mb-[25px] flex-row items-center overflow-hidden relative border bg-[#F8F8FF] border-[#1B1C1E1A] rounded-lg`}>
                    <View className="flex-col ml-[20px] mr-[15px] justify-center items-center ">
                        <Ionicons name="person-outline" size={20} color="#002966" />
                    </View>
                    <TextInput placeholder="First Name" className="flex-1 p-4 pl-[0px] text-xs font-Niramit_Regular" autoCapitalize="none" />
                </View> 
                <View className={`mb-[25px] flex-row items-center overflow-hidden relative border bg-[#F8F8FF] border-[#1B1C1E1A] rounded-lg`}>
                    <View className="flex-col ml-[20px] mr-[15px] justify-center items-center ">
                        <Ionicons name="person-outline" size={20} color="#002966" />
                    </View>
                    <TextInput placeholder="Last Name" className="flex-1 p-4 pl-[0px] text-xs font-Niramit_Regular" autoCapitalize="none" />
                </View> 
                <View className={`mb-[25px] flex-row items-center overflow-hidden relative border bg-[#F8F8FF] border-[#1B1C1E1A] rounded-lg`}>
                    <View className="flex-col ml-[20px] mr-[15px] justify-center items-center ">
                        <Ionicons name="person-outline" size={20} color="#002966" />
                    </View>
                    <TextInput placeholder="Other Names" className="flex-1 p-4 pl-[0px] text-xs font-Niramit_Regular" autoCapitalize="none" />
                </View> 
                <View className={`mb-[25px] flex-row items-center overflow-hidden relative border bg-[#F8F8FF] border-[#1B1C1E1A] rounded-lg`}>
                    <View className="flex-col ml-[20px] mr-[15px] justify-center items-center ">
                        <Ionicons name="mail-outline" size={20} color="#002966" />
                    </View>
                    <TextInput placeholder="Email" className="flex-1 p-4 pl-[0px] text-xs font-Niramit_Regular" autoCapitalize="none" />
                </View> 
                <View className={`mb-[25px] flex-row items-center overflow-hidden relative border bg-[#F8F8FF] border-[#1B1C1E1A] rounded-lg`}>
                    <View className="flex-col ml-[20px] mr-[15px] justify-center items-center ">
                        <Ionicons name="briefcase-outline" size={20} color="#002966" />
                    </View>
                    <TextInput placeholder="Workplace/Organization" className="flex-1 p-4 pl-[0px] text-xs font-Niramit_Regular" autoCapitalize="none" />
                </View> 
                <View className={`mb-[25px] flex-row items-center overflow-hidden relative border bg-[#F8F8FF] border-[#1B1C1E1A] rounded-lg`}>
                    <View className="flex-col ml-[20px] mr-[15px] justify-center items-center ">
                        <Ionicons name="briefcase-outline" size={20} color="#002966" />
                    </View>
                    <TextInput placeholder="Staff/Student ID No." className="flex-1 p-4 pl-[0px] text-xs font-Niramit_Regular" autoCapitalize="none" />
                </View> 
                <View className={`mb-[25px] flex-row items-center overflow-hidden relative border bg-[#F8F8FF] border-[#1B1C1E1A] rounded-lg`}>
                    <View className="flex-col ml-[20px] mr-[15px] justify-center items-center ">
                        <Ionicons name="call-outline" size={20} color="#002966" />
                    </View>
                    <TextInput placeholder="Phone" className="flex-1 p-4 pl-[0px] text-xs font-Niramit_Regular" autoCapitalize="none" />
                </View> 
                <View className={`mb-[25px] flex-row items-center overflow-hidden relative border bg-[#F8F8FF] border-[#1B1C1E1A] rounded-lg`}>
                    <View className="flex-col ml-[20px] mr-[15px] justify-center items-center ">
                        <Ionicons name="call-outline" size={20} color="#002966" />
                    </View>
                    <TextInput placeholder="Preferred Contact" className="flex-1 p-4 pl-[0px] text-xs font-Niramit_Regular" autoCapitalize="none" />
                </View> 
                <View className={`mb-[25px] flex-row items-center overflow-hidden relative border bg-[#F8F8FF] border-[#1B1C1E1A] rounded-lg`}>
                    <View className="flex-col ml-[20px] mr-[15px] justify-center items-center ">
                        <Ionicons name="calendar-outline" size={20} color="#002966" />
                    </View>
                    <TextInput placeholder="Date Of Birth [dd/mm/yyyy}" className="flex-1 p-4 pl-[0px] text-xs font-Niramit_Regular" autoCapitalize="none" />
                </View> 
                <View className={`mb-[25px] flex-row items-center overflow-hidden relative border bg-[#F8F8FF] border-[#1B1C1E1A] rounded-lg`}>
                    <View className="flex-col ml-[20px] mr-[15px] justify-center items-center ">
                        <Ionicons name="calendar-outline" size={20} color="#002966" />
                    </View>
                    <TextInput placeholder="NYSC Passout Date {mm/yyyy}" className="flex-1 p-4 pl-[0px] text-xs font-Niramit_Regular" autoCapitalize="none" />
                </View> 
                <View className={`mb-[25px] flex-row items-center overflow-hidden relative border bg-[#F8F8FF] border-[#1B1C1E1A] rounded-lg`}>
                    <View className="flex-col ml-[20px] mr-[15px] justify-center items-center ">
                        <Ionicons name="school-outline" size={20} color="#002966" />
                    </View>
                    <TextInput placeholder="Highest Qualification" className="flex-1 p-4 pl-[0px] text-xs font-Niramit_Regular" autoCapitalize="none" />
                </View> 
                <View className={`mb-[25px] flex-row items-center overflow-hidden relative border bg-[#F8F8FF] border-[#1B1C1E1A] rounded-lg`}>
                    <View className="flex-row gap-x-[5px] ml-[20px] mr-[15px] justify-center items-center bg-[#F0F6FF] rounded-[8px] p-[10px] ">
                        <Ionicons name="cloud-upload-outline" size={20} color="#002966" />
                        <Text>Uplaod</Text>
                    </View>
                    <TextInput placeholder="Highest Qualification" className="flex-1 p-4 pl-[0px] text-xs font-Niramit_Regular" autoCapitalize="none" />
                </View> 
                <View className={`mb-[25px] flex-row items-center overflow-hidden relative border bg-[#F8F8FF] border-[#1B1C1E1A] rounded-lg`}>
                    <TextInput placeholder="Identification Category" className="flex-1 p-4 text-xs font-Niramit_Regular" autoCapitalize="none" />
                </View> 
                <View className={`mb-[25px] flex-row items-center overflow-hidden relative border bg-[#F8F8FF] border-[#1B1C1E1A] rounded-lg`}>
                    <View className="flex-row gap-x-[5px] ml-[20px] mr-[15px] justify-center items-center bg-[#F0F6FF] rounded-[8px] p-[10px] ">
                        <Ionicons name="cloud-upload-outline" size={20} color="#002966" />
                        <Text>Uplaod</Text>
                    </View>
                    <TextInput placeholder="Means Of Identification" className="flex-1 p-4 pl-[0px] text-xs font-Niramit_Regular" autoCapitalize="none" />
                </View> 
            </View>
            <TouchableOpacity className="bg-[#407720] py-[15px] px-[30px] items-center justify-center rounded-[10px]">
                <Text className="text-[#F8F8FF] font-Niramit_SemiBold text-[14px]">Next</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}