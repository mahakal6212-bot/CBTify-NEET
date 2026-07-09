import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  value: string;
  color?: string;
};

export default function StatsCard({ title, value, color = "#2563EB" }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text
        style={[
          styles.value,
          {
            color,
          },
        ]}
      >
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    margin: 6,
    elevation: 3,
  },

  title: {
    fontSize: 15,
    color: "#777",
  },

  value: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "700",
  },
});
