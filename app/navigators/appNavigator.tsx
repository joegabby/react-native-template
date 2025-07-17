// AppNavigator.tsx (simplified)

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RootParamList, TabParamList } from './navigationTypes';
import Dashboard from '../screens/dashboard';
import Conversations from '../screens/conversations';
import Chat from '../screens/chat';

const Stack = createNativeStackNavigator<RootParamList>();
const Tab   = createBottomTabNavigator<TabParamList>();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Conversations" component={Conversations} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs"     component={MainTabs} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
