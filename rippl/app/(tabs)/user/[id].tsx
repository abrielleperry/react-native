import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function OtherUserProfile() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl">Viewing Profile of User {id}</Text>
    </View>
  );
}
