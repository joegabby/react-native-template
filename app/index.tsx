// import { global } from "../styles/global";
import {
  SafeAreaView,
  TextInput,
  ScrollView,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ViewBase,
} from "react-native";
// import GlobalHeader from "../components/globalHeader";
import Person_icon from "./assets/icons/asterisk.svg";
import { NativeWindStyleSheet } from "nativewind";
import Asterisk from "./assets/icons/asterisk.svg";
import { useNavigation } from "@react-navigation/native";

// NativeWindStyleSheet.setOutput({
//   default: "native",
// });

export default function Login() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("./assets/images/icon.png")}
        className="overflow-hidden w-screen h-screen bg-no-repeat flex-col justify-end bg-white p-5"
        imageStyle={{
          opacity: 0.7,
        }}
      >
        <View>
          <View className="bottom-40">
            <View className="mb-3">
              <Text className="text-3xl font-bold text-green-800 mb-2">
                Login
              </Text>
              <Text className="text-gray-500">Please login to continue</Text>
            </View>
            <View className="mb-5">
              <View className="flex-row items-center overflow-hidden bg-gray-200 rounded-3xl mb-3">
                <View className="flex-col ml-3 w-10 h-10 justify-center items-center">
                  <Person_icon width={15} height={15} fill="#707070" />
                </View>
                <TextInput placeholder="Username" className="w-full p-2" />
              </View>
              <View className="flex-row items-center overflow-hidden bg-gray-200 rounded-3xl mb-1">
                <View className="flex-row w-10 h-10 ml-3 justify-center items-center">
                  <Asterisk width={7} height={7} fill="#707070" />
                  <Asterisk width={7} height={7} fill="#707070" />
                  <Asterisk width={7} height={7} fill="#707070" />
                </View>
                <TextInput placeholder="Password" className="w-full p-2 "/>
              </View>
            </View>
            <TouchableOpacity
              className="bg-green-600 w-full h-11 rounded-3xl justify-center items-center"
              
            >
              <Text className="text-white font-bold">Login</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center items-center bottom-5">
            <Text>Don't have an account? </Text>
            <TouchableOpacity
              
            >
              <Text className="text-green-800 font-bold">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
