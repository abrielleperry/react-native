"use client";

import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Mock data for demonstration
const SWIPE_USERS = [
  { id: "5", name: "Emma Thompson", bio: "Love hiking and photography" },
  { id: "6", name: "Michael Brown", bio: "Foodie and travel enthusiast" },
  { id: "7", name: "Olivia Davis", bio: "Yoga instructor and book lover" },
];

export default function SwipingScreen() {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLike = () => {
    if (currentIndex < SWIPE_USERS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDislike = () => {
    if (currentIndex < SWIPE_USERS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleViewProfile = () => {
    const userId = SWIPE_USERS[currentIndex].id;
    navigation.navigate("OtherUserProfile" as never, { id: userId } as never);
  };

  if (currentIndex >= SWIPE_USERS.length) {
    return (
      <View className="flex-1 justify-center items-center p-4 bg-white">
        <Text className="text-xl">No more profiles to show</Text>
      </View>
    );
  }

  const currentUser = SWIPE_USERS[currentIndex];

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Discover</Text>

      <View className="flex-1 border rounded-xl overflow-hidden mb-4">
        <Image
          source={{ uri: "/placeholder.svg?height=400&width=300" }}
          className="w-full h-3/4"
        />
        <View className="p-4">
          <Text className="text-xl font-bold">{currentUser.name}</Text>
          <Text className="text-gray-600">{currentUser.bio}</Text>
        </View>
      </View>

      <View className="flex-row justify-around mb-4">
        <TouchableOpacity
          className="bg-red-500 p-4 rounded-full"
          onPress={handleDislike}
        >
          <Text className="text-white font-bold">Dislike</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-full"
          onPress={handleViewProfile}
        >
          <Text className="text-white font-bold">View Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-green-500 p-4 rounded-full"
          onPress={handleLike}
        >
          <Text className="text-white font-bold">Like</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
