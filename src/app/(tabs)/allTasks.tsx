import AppButton from "@/constans/AppButton";
import { useCelStore } from "@/store/useCelStore";
import { useCompletedStore } from "@/store/useCompletedStore";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function AllTasksScreen() {
  const wszystkie = useCelStore((state) => state.goals);
  const clearGoals = useCelStore((state) => state.clearGoals);
  const removeGoal = useCelStore((state) => state.removeGoals);
  const addCompletedTask = useCompletedStore((state) => state.addCompleted);
  const completeGoal = (cel: string, index: number) => {
    addCompletedTask({ task: cel });
    removeGoal(index);
  };
  const completed = useCompletedStore((state) => state.completed);
  const saveDay = useCompletedStore((state) => state.addDay);

  return (
    <View>
      <View style={styles.headerContaner}>
        <Text style={styles.text}>Twoje Cele:</Text>
      </View>
      <FlatList
        style={styles.flatListContaner}
        data={wszystkie}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.pair}>
            <Pressable onPress={() => removeGoal(index)}>
              <Text>
                {index + 1} : {item.cel}
              </Text>
            </Pressable>
            <Pressable onPress={() => completeGoal(item.cel, index)}>
              <Text style={styles.zaliczoneText}>Zaliczone</Text>
            </Pressable>
          </View>
        )}
        ListEmptyComponent={<Text>Brak Celów</Text>}
      />
      <AppButton title="Wyczyść" onPress={clearGoals} />
      <FlatList
        style={styles.completedList}
        data={completed}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Text>
            {index + 1} : {item.task}
          </Text>
        )}
        ListEmptyComponent={<Text>Brak ukończonych zadań</Text>}
      />
      <AppButton title="Zapisz Dzień" onPress={saveDay} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  flatListContaner: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: "#000000",
    padding: 16,
  },
  headerContaner: {
    backgroundColor: "#ff0000",
    borderWidth: 2,
    borderColor: "#450303",
    borderRadius: 2,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  pair: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  zaliczoneText: {
    color: "#4073f5",
  },
  completedList: {
    padding: 20,
    backgroundColor: "#ffffff",
    borderWidth: 3,
    borderColor: "#00ff2a",
    borderRadius: 6,
    marginRight: 5,
    marginLeft: 5,
  },
});
