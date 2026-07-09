import { StyleSheet, Text, View } from "react-native";

type Props = {
  name?: string;
};

export default function Greeting({ name = "Student" }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.small}>Welcome 👋</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },

  small: {
    color: "#6B7280",
    fontSize: 16,
  },

  name: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111827",
    marginTop: 4,
  },
});
