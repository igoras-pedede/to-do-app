import { useCompletedStore } from "@/store/useCompletedStore";
import { router, useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";

export default function DayDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const days = useCompletedStore((state) => state.days);
  const index = Number(id);
  const day = days[index];

  const goBack = () => {
    router.back();
  };

  return (
    <View>
      <FlatList
        data={day.tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.task}</Text>}
      />
    </View>
  );
}
