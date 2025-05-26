// screens/Onboarding.tsx
import React from "react";
import { SafeAreaView,ScrollView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { globalContainer } from "../styles/globalStyles";
import StackNavigator from "./stackNavigator";

import OnboardingScreen from "../screens/onboardingScreen";

const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
            <Stack.Screen name="AvailablePositions" component={StackNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
