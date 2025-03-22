import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CurrentUserScreen() {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("userToken");
      // Force app reload to trigger authentication check
      window.location.reload();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="items-center p-4 border-b border-gray-200">
        <Image
          source={{ uri: "/placeholder.svg?height=150&width=150" }}
          className="w-32 h-32 rounded-full mb-4"
        />
        <Text className="text-2xl font-bold">Your Name</Text>
        <Text className="text-gray-600 mb-2">your.email@example.com</Text>
      </View>

      <View className="p-4">
        <Text className="text-xl font-bold mb-2">About Me</Text>
        <Text className="text-gray-600 mb-4">
          This is your profile description. You can edit this to tell others
          about yourself.
        </Text>

        <Text className="text-xl font-bold mb-2">Interests</Text>
        <View className="flex-row flex-wrap mb-4">
          {["Travel", "Photography", "Cooking", "Reading", "Hiking"].map(
            (interest, index) => (
              <View
                key={index}
                className="bg-gray-200 rounded-full px-3 py-1 m-1"
              >
                <Text>{interest}</Text>
              </View>
            )
          )}
        </View>

        <TouchableOpacity className="bg-blue-500 py-3 px-4 rounded-lg w-full items-center mb-2">
          <Text className="text-white font-semibold">Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-red-500 py-3 px-4 rounded-lg w-full items-center"
          onPress={handleLogout}
        >
          <Text className="text-white font-semibold">Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
