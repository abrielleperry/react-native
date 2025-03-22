import { Tabs } from "expo-router";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function TabsLayout() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/landing");
    }
  }, [user]);

  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="swiping" options={{ title: "Swipe" }} />
      <Tabs.Screen name="current-user" options={{ title: "Profile" }} />
    </Tabs>
  );
}
