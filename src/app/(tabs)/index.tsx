import { useCelStore } from "@/store/useCelStore";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import AppButton from "../../constans/AppButton";

export default function AddTasks() {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const addGoals = useCelStore((state) => state.addGoals);

  const handleAdd = () => {
    if (task.trim() === "") {
      setError("Cel nie może być pusty");
      return;
    }
    addGoals({ cel: task });
    setTask("");
    setError("");
  };

  return (
    <View>
      <TextInput
        style={styles.textInput}
        value={task}
        onChangeText={setTask}
        placeholder="Wpisz cel na jutro"
      />
      <AppButton title="Dodaj Cel" onPress={handleAdd} />
      {error !== "" && <Text>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 6,
  },
});
