'use client';

import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// TEMP MOCK DATA FOR INTERESTS
const INTERESTS = [
  { id: '1', name: 'Photography' },
  { id: '2', name: 'Travel' },
  { id: '3', name: 'Cooking' },
  { id: '4', name: 'Fitness' },
  { id: '5', name: 'Reading' },
  { id: '6', name: 'Music' },
  { id: '7', name: 'Movies' },
  { id: '8', name: 'Art' },
  { id: '9', name: 'Technology' },
  { id: '10', name: 'Sports' },
  { id: '11', name: 'Fashion' },
  { id: '12', name: 'Gaming' },
];

export default function CreateInterests() {
  const router = useRouter();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter((interestId) => interestId !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  const goNext = () => {
    router.replace('/welcome');
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView className="flex-1 px-6 py-12">
        <Text className="mb-2 text-3xl font-bold">Select Your Interests</Text>
        <Text className="mb-8 text-gray-600">
          Choose topics you're interested in to help us personalize your experience.
        </Text>

        <View className="mb-8 flex-row flex-wrap justify-between">
          {INTERESTS.map((interest) => (
            <TouchableOpacity
              key={interest.id}
              onPress={() => toggleInterest(interest.id)}
              className={`mb-4 rounded-full border px-5 py-3 ${
                selectedInterests.includes(interest.id)
                  ? 'border-teal-500 bg-teal-500'
                  : 'border-gray-300 bg-white'
              }`}
              style={{ width: '48%' }}>
              <Text
                className={`text-center font-medium ${
                  selectedInterests.includes(interest.id) ? 'text-white' : 'text-gray-800'
                }`}>
                {interest.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          onPress={goNext}
          className="mb-8 w-full items-center rounded-xl bg-teal-500 py-4">
          <Text className="text-lg font-semibold text-white">Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
