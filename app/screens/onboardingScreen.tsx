import React from "react";
import { SafeAreaView } from "react-native";
import OnboardingStepper from "../components/onboarding";
import { globalContainer } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";

const onboardingData = [
    {
      headerText: "Review the requirements for the available positions.",
      description: "You are expected to go through the requirements for all available Election staff positions to determine your Eligibility",
      info: "",
      imageSrc: require("../assets/images/onboarding1.png"),
      step: 1,
    },
    {
      headerText: 'Click on "Register" and follow the instructions.',
      description: "",
      info: "",
      imageSrc: require("../assets/images/onboarding2.png"),
      step: 2,
    },
    {
      headerText: 'Create your Password',
      description: "After creating your password, you are automatically logged into the portal and presented with an application form",
      info: "",
      imageSrc: require("../assets/images/onboarding3.png"),
      step: 3,
    },
    {
      headerText: 'Fill the Application form.',
      description: "Please NOTE: This form is segmented into three (3) sections; (i) Personal Information, (ii) Contact Information and (iii) Bank Details.",
      info: "Kindly enter your names as associated with your BVN. Ensure you fill in your details correctly. You will not be allowed to edit details once the form is submitted.",
      imageSrc: require("../assets/images/onboarding4.png"),
      step: 4,
    },
    {
      headerText: 'Upload your passport photograph.',
      description: "You are required to upload a recent plain background passport photograph of size",
      info: "Not larger than 5MB",
      imageSrc: require("../assets/images/onboarding5.png"),
      step: 5,
    },
    {
      headerText: 'Fill in the details of your referees',
      description: "",
      info: "",
      imageSrc: require("../assets/images/onboarding6.png"),
      step: 6,
    },
    {
      headerText: 'Check the Attestation box',
      description: "The information provided, will be validated from your institutions/organization/referees",
      info: "",
      imageSrc: require("../assets/images/onboarding7.png"),
      step: 7,
    },
    {
      headerText: 'Print your acknowledgement slip.',
      description: "This is mandatory as you will need this for the final verification.",
      info: "",
      imageSrc: require("../assets/images/onboarding8.png"),
      step: 8,
      isLast:true
    },
  ];

export default function OnboardingScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={globalContainer.container} className="flex-1">
      <OnboardingStepper
        steps={onboardingData}
        onFinish={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "AvailablePositions" }],
          })
        }
      />
    </SafeAreaView>
  );
}
