import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AvailablePositions from '../screens/availablePositions';
import OnboardingScreen from '../screens/onboardingScreen';
import Forms from '../screens/forms';
const stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <GestureHandlerRootView>
                <NavigationContainer independent={true}>
                    <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>        
                        <stack.Screen name="AvailablePositions" component={AvailablePositions} />
                        <stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
                        <stack.Screen name="Forms" component={Forms} />
                    </stack.Navigator>
                </NavigationContainer>
        </GestureHandlerRootView>
    )
}