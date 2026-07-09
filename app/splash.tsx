import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";

export default function Splash() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/onboarding");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient colors={["#2563EB", "#1D4ED8"]} style={styles.container}>
      <Text style={styles.logo}>CBTify</Text>

      <Text style={styles.subtitle}>
        Upload. Convert. Practice. Crack NEET.
      </Text>

      <ActivityIndicator
        size="large"
        color="#ffffff"
        style={{ marginTop: 40 }}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#fff",
  },

  subtitle: {
    marginTop: 15,
    fontSize: 18,
    color: "#E0E7FF",
    textAlign: "center",
    paddingHorizontal: 30,
  },
});
