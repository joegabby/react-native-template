import React, {useState} from "react";
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { globalContainer } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import RequirementsCard from "../components/requirements";
import FrequentlyAskedQuestions from "../components/faqs";
export default function AvailablePositions() {
    const navigation = useNavigation<any>(); 
    const [AvailablePositions,setAvailablePositions] = useState(true)
    const [ApplicationSteps,setApplicationSteps] = useState(false)
    const [ContactUs,setContactUs] = useState(false)
    const [Faqs,setFaqs] = useState(false)
    const [Header,setHeader] = useState("Available Positions")

    const handleTabs=(tabName:string)=>{
        switch (tabName) {
          case 'Available Positions':
            setAvailablePositions(true)
            setApplicationSteps(false)
            setContactUs(false)        
            setFaqs(false) 
            setHeader(tabName)       
            break;
          case 'How To Apply':
            setAvailablePositions(false)
            setApplicationSteps(true)
            setContactUs(false)        
            setFaqs(false) 
            setHeader(tabName)       
            break;
          case 'Contact Us':
            setAvailablePositions(false)
            setApplicationSteps(false)
            setContactUs(true)        
            setFaqs(false)  
            setHeader(tabName)       
            break;
          case 'FAQs':
            setAvailablePositions(false)
            setApplicationSteps(false)
            setContactUs(false)        
            setFaqs(true) 
            setHeader(tabName)              
            break;
          
            }
      }
    return (
        <SafeAreaView style={globalContainer.container}>
        <View className="my-[20px]">
            <Text className="font-Niramit_Bold font-[700] text-[16px] leading-[16px]">{Header}</Text>
        </View>
        <View className="py-[12px]">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 0 }}
            >
                <TouchableOpacity className={`p-[10px] ${AvailablePositions ? 'bg-[#45A27D]' : 'bg-[#45A27D80]'} rounded-full mr-[5px]`} onPress={()=>{handleTabs("Available Positions"), navigation.navigate("AvailablePositions")}}>
                    <Text className="text-white text-[12px] leading-[24px] font-Niramit_Medium font-[400]">Available Positions</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`p-[10px] ${ApplicationSteps ? 'bg-[#45A27D]' : 'bg-[#45A27D80]'} rounded-full mr-[5px]`} onPress={()=>{handleTabs("How To Apply"),navigation.navigate("OnboardingScreen",{child:true})}}>
                    <Text className="text-white text-[12px] leading-[24px] font-Niramit_Medium font-[400]">How To Apply</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`p-[10px] ${ContactUs ? 'bg-[#45A27D]' : 'bg-[#45A27D80]'} rounded-full mr-[5px]`} onPress={()=>{handleTabs("Contact Us")}}>
                    <Text className="text-white text-[12px] leading-[24px] font-Niramit_Medium font-[400]">Contact Us</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`p-[10px] ${Faqs ? 'bg-[#45A27D]' : 'bg-[#45A27D80]'} rounded-full mr-[5px]`} onPress={()=>{handleTabs("FAQs")}}>
                    <Text className="text-white text-[12px] leading-[24px] font-Niramit_Medium font-[400]">FAQs</Text>
                </TouchableOpacity>
                
            </ScrollView>
        </View>
        {AvailablePositions && <RequirementsCard/>}
        {Faqs && <FrequentlyAskedQuestions/>}
        </SafeAreaView>
    );
}
