import AppButton from "@/constans/AppButton";
import { useCelStore } from "@/store/useCelStore";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function AllTasksScreen() {
  const wszystkie = useCelStore((state) => state.goals);
  const clearGoals = useCelStore((state) => state.clearGoals);
  const removeGoal = useCelStore((state) => state.removeGoals);

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
            <Text>
              {index + 1} : {item.cel}
            </Text>
            <Pressable onPress={() => removeGoal(index)}>
              <Text style={styles.usuńText}> Usuń</Text>
            </Pressable>
          </View>
        )}
        ListEmptyComponent={<Text>Brak Celów</Text>}
      />
      <AppButton title="Wyczyść" onPress={clearGoals} />
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
  },
  usuńText: {
    color: "#4073f5",
  },
});
