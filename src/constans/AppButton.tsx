import { Pressable, StyleSheet, Text } from "react-native";

type Button = {
  title: string;
  onPress: () => void;
};

export default function AppButton({ title, onPress }: Button) {
  return (
    <Pressable
      style={({ pressed }) => [styles.pressable, styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    padding: 14,
    backgroundColor: "#d10000",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10,
  },
  pressed: {
    opacity: 0.6,
  },
  text: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "black",
  },
});
