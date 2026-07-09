import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { signIn } from "../../services/auth";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await signIn(email, password);

      router.replace("/(tabs)");
    } catch (e: any) {
      Alert.alert("Login Failed", e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>CBTify</Text>

      <Text style={styles.heading}>Welcome Back 👋</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>
          {loading ? "Signing In..." : "Login"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
        <Text style={styles.link}>Don&apos;t have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
  },

  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2563EB",
    marginBottom: 10,
    textAlign: "center",
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 30,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },

  link: {
    marginTop: 25,
    textAlign: "center",
    color: "#2563EB",
    fontWeight: "600",
  },
});
