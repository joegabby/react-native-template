import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../screens/dashboard';
import TabNavigator from './tabNavigator';

const stack = createNativeStackNavigator();
export default function StackNavigator() {
    return (
        <GestureHandlerRootView>
                <NavigationContainer independent={true}>
                    <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Tabs'>        
                        <stack.Screen name="Dashboard" component={Dashboard} />
                        <stack.Screen name="Tabs" component={TabNavigator} />
                    </stack.Navigator>
                </NavigationContainer>
        </GestureHandlerRootView>
    )
}