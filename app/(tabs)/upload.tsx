import { Text, View } from "react-native";

export default function Screen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8FAFC",
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "700",
        }}
      >
        Coming Soon 🚀
      </Text>
    </View>
  );
}
