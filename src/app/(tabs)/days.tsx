import AppButton from "@/constans/AppButton";
import { useCompletedStore } from "@/store/useCompletedStore";
import { router } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";

export default function DaysScreen() {
  const allDays = useCompletedStore((state) => state.days);
  const clearDays = useCompletedStore((state) => state.clearDays);

  return (
    <View>
      <FlatList
        data={allDays}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => router.push(`/day/${index}`)}>
            <Text>Dzień {item.num}</Text>
          </Pressable>
        )}
      />
      <AppButton title="Wyczyść" onPress={clearDays} />
    </View>
  );
}
