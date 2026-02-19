import React from "react";
import { Text,View,SafeAreaView } from "react-native";
import { globalContainer } from "../styles/globalStyles";
import PersonalInfoForm from "../components/forms/personalInfo";
export default function Forms(){
    return(
        <SafeAreaView style={globalContainer.container}>
            <PersonalInfoForm/>
        </SafeAreaView>
    )
}