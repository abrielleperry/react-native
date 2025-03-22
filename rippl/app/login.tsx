"use client";

import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // This is a placeholder for your actual authentication logic
    // You'll replace this with Supabase authentication later
    if (email && password) {
      try {
        // Simulate successful login
        await AsyncStorage.setItem("userToken", "dummy-auth-token");
        // Force app reload to trigger authentication check
        // In a real app, you'd use a proper state management solution
        Alert.alert("Success", "Login successful!", [
          { text: "OK", onPress: () => window.location.reload() },
        ]);
      } catch (error) {
        Alert.alert("Error", "Failed to login");
      }
    } else {
      Alert.alert("Error", "Please enter email and password");
    }
  };

  return (
    <View className="flex-1 justify-center items-center p-4 bg-white">
      <Text className="text-2xl font-bold mb-6">Log In</Text>

      <TextInput
        className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        className="w-full border border-gray-300 rounded-lg p-3 mb-6"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        className="bg-blue-500 py-3 px-4 rounded-lg w-full items-center"
        onPress={handleLogin}
      >
        <Text className="text-white font-semibold text-lg">Log In</Text>
      </TouchableOpacity>
    </View>
  );
}
