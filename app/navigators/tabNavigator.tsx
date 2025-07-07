import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/dashboard';
import Screen1 from '../screens/screen1';
import Chat from '../screens/conversations';
import Profile from '../screens/profile';
import MedicalRecords from '../screens/medicalRecords';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: {
        height: 94,
        borderTopWidth:1.5,
        borderWidth:1.5,
        borderColor:"#0A0A0A1A",
        alignItems: "center",
        borderRadius: 20,
        marginHorizontal:20,
        shadowColor:"transparent",
        backgroundColor:"white",
        position:"absolute",
        bottom:10,     
        zIndex: 0,
        elevation: 0
      },
      tabBarItemStyle: {
        padding:10,
      },
      }}>
        <tab.Screen name="Dashboard" component={Dashboard} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className={`items-center justify-center border-transparent ${ focused ? 'bg-[#FAFAFA] border-b-[5px] border-[#9FF5C1]' : 'bg-transparent'} p-[8px] rounded-[12px] w-full h-full`}>
                <FontAwesome  name='home' size={20} color={focused?'#162E4E':'#8E8E8E'} />
                {/* <Text className={`mt-[10px] font-poppins_semiBold text-[10px] ${focused ? 'text-white':'text-[#43525A]'}`}>Bookings</Text> */}
              </View>
            )          
          }
        }} />
        <tab.Screen name="MedicalRecords" component={MedicalRecords} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className={`items-center justify-center ${ focused ? 'bg-[#FAFAFA] border-b-[5px] border-[#9FF5C1]' : 'bg-transparent'} p-[8px] rounded-[12px] w-full h-full`}>
                <FontAwesome name='stethoscope' size={20} color={focused?'#162E4E':'#8E8E8E'}/>
                {/* <Text className={`mt-[10px] font-poppins_semiBold text-[10px] ${focused ? 'text-white':'text-[#43525A]'}`}>Bookings</Text> */}
              </View>
            )          
          }
        }} />
        <tab.Screen name="Chats" component={Chat} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className={`items-center justify-center ${ focused ? 'bg-[#FAFAFA] border-b-[5px] border-[#9FF5C1]' : 'bg-transparent'} p-[8px] rounded-[12px] w-full h-full`}>
                <Ionicons name='chatbox-ellipses' size={20} color={focused?'#162E4E':'#8E8E8E'}/>
                {/* <Text className={`mt-[10px] font-poppins_semiBold text-[10px] ${focused ? 'text-white':'text-[#43525A]'}`}>Bookings</Text> */}
              </View>
            )          
          }
        }} />
        <tab.Screen name="Screen1" component={Screen1} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className={`items-center justify-center ${ focused ? 'bg-[#FAFAFA] border-b-[5px] border-[#9FF5C1]' : 'bg-transparent'} p-[8px] rounded-[12px] w-full h-full`}>
                <Ionicons name='business' size={20} color={focused?'#162E4E':'#8E8E8E'}/>
                {/* <Text className={`mt-[10px] font-poppins_semiBold text-[10px] ${focused ? 'text-white':'text-[#43525A]'}`}>Bookings</Text> */}
              </View>
            )          
          }
        }} />
        <tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className={`items-center justify-center ${ focused ? 'bg-[#FAFAFA] border-b-[5px] border-[#9FF5C1]' : 'bg-transparent'} p-[8px] rounded-[12px] w-full h-full`}>
                <Ionicons name='person' size={20} color={focused?'#162E4E':'#8E8E8E'}/>
                {/* <Text className={`mt-[10px] font-poppins_semiBold text-[10px] ${focused ? 'text-white':'text-[#43525A]'}`}>Bookings</Text> */}
              </View>
            )          
          }
        }} />
       
      </tab.Navigator>
  );
}

