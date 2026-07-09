import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  emoji: string;
  onPress: () => void;
};

export default function ActionCard({ title, emoji, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.icon}>{emoji}</Text>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    margin: 8,
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    minHeight: 120,
  },

  icon: {
    fontSize: 34,
    marginBottom: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
