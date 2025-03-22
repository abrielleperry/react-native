import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-xl">Home Screen</Text>
      <Link href="/user/456" asChild>
        <Pressable className="mt-4 p-3 bg-blue-500 rounded-lg">
          <Text className="text-white">Go to User Profile</Text>
        </Pressable>
      </Link>
    </View>
  );
}
