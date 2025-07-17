import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../screens/dashboard';
import TabNavigator from './tabNavigator';
import MedicalRecords from '../screens/chat';
import Chat from '../screens/chat';
const stack = createNativeStackNavigator();
export default function StackNavigator() {
    return (
        <GestureHandlerRootView>
                <NavigationContainer independent={true}>
                    <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Tabs'>        
                        <stack.Screen name="Chat" component={Chat} />
                        <stack.Screen name="Tabs" component={TabNavigator} />
                    </stack.Navigator>
                </NavigationContainer>
        </GestureHandlerRootView>
    )
}