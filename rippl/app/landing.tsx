import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LandingScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center p-4 bg-white">
      <Image
        source={{ uri: "/placeholder.svg?height=100&width=100" }}
        className="w-24 h-24 mb-8"
      />
      <Text className="text-3xl font-bold mb-2">Welcome</Text>
      <Text className="text-gray-600 mb-8 text-center">
        Sign in to continue to our awesome app
      </Text>

      <TouchableOpacity
        className="bg-blue-500 py-3 px-8 rounded-lg mb-4 w-full items-center"
        onPress={() => navigation.navigate("Login" as never)}
      >
        <Text className="text-white font-semibold text-lg">Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-white border border-blue-500 py-3 px-8 rounded-lg w-full items-center"
        onPress={() => navigation.navigate("CreateAccount" as never)}
      >
        <Text className="text-blue-500 font-semibold text-lg">
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}
