import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Nowy Cel" }} />
      <Tabs.Screen name="allTasks" options={{ title: "Wszystkie cele" }} />
      <Tabs.Screen name="days" options={{ title: "Dni" }} />
    </Tabs>
  );
}
