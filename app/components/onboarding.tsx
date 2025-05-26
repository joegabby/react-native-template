import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ImageSourcePropType } from "react-native";

type StepData = {
  headerText: string;
  description: string;
  info: string;
  imageSrc: ImageSourcePropType;
  step: number;
  isLast?: boolean;
};

type Props = {
  steps: StepData[];
  onFinish: () => void;
};

export default function OnboardingStepper({ steps, onFinish }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const stepData = steps[currentStep];
  const isLast = stepData.isLast || currentStep === steps.length - 1;

  return (
    <View className="flex-1 justify-between"> 
        <View> 
            <View className="flex-row justify-between">
                {steps.map((_, i) => (
                <View
                    key={i}
                    className={`h-[5px] w-[40px] rounded-[5px] ${i <= currentStep ? "bg-black" : "bg-[#D9D9D9]"}`}
                />
                ))}
            </View>
            <View className="flex-row justify-end items-center">
                <TouchableOpacity onPress={onFinish} className="flex-row justify-end items-center mt-[20px]">
                    <Text className="text-[16px] text-p_blue font-Niramit_Regular mr-[5px]">Skip</Text>
                    <Ionicons name="close" size={20} color="#002966" />
                </TouchableOpacity>
            </View>
        </View>

        <View>
            <View className="items-center mb-[80px]">
                <Image source={stepData.imageSrc}/>
            </View>
            <Text className="text-p_blue font-Niramit_SemiBold text-[20px] leading-7">{stepData.headerText}</Text>
            {stepData.description ? (
            <Text className="text-p_blue text-[16px] font-Niramit_Regular leading-6 mt-5">{stepData.description}</Text>
            ) : null}
            {stepData.info ? (
            <Text className="text-p_red text-[12px] font-Niramit_Regular leading-6 mt-[10px]">{stepData.info}</Text>
            ) : null}
        </View>

        <View className="flex-row justify-between items-center">
            <TouchableOpacity className="flex-row items-center" onPress={() => setCurrentStep(currentStep - 1)}>
                {currentStep > 0 &&
                    <View className="bg-p_green w-[50px] h-[50px] items-center justify-center rounded-full">
                    <Ionicons name="arrow-back" size={16} color="white" />
                    </View>
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={() => (isLast ? onFinish() : setCurrentStep(currentStep + 1))} className="flex-row items-center">
                {isLast ? (
                    <Text className="text-p_blue text-[16px] font-Niramit_SemiBold">Proceed</Text>
                ) : (
                    <Text className="text-p_blue text-[16px] font-Niramit_SemiBold">Next</Text>
                )}
                <View className="bg-p_green w-[50px] h-[50px] items-center justify-center rounded-full ml-[10px]">
                    <Ionicons name="arrow-forward" size={16} color="white" />
                </View>
            </TouchableOpacity>
      </View>
    </View>
  );
}
