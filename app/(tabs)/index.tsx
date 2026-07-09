import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ActionCard from "../../components/cards/ActionCard";
import StatsCard from "../../components/cards/StatsCard";
import Greeting from "../../components/home/Greeting";

import { getCurrentUser } from "../../services/auth";
import { testGemini } from "../../services/testGemini";

export default function HomeScreen() {
  const [name, setName] = useState("User");

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    try {
      const user = await getCurrentUser();

      if (user?.name) {
        setName(user.name);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleGeminiTest() {
    try {
      await testGemini();
      Alert.alert("Success", "Check Metro Terminal for Gemini response.");
    } catch (e: any) {
      Alert.alert("Gemini Error", e.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Greeting name={name} />

        <View style={styles.statsRow}>
          <StatsCard title="Tests" value="0" />
          <StatsCard title="Accuracy" value="0%" color="#22C55E" />
        </View>

        <View style={styles.statsRow}>
          <StatsCard title="Questions" value="0" color="#F59E0B" />
          <StatsCard title="Streak" value="0 🔥" color="#EF4444" />
        </View>

        <Text style={styles.heading}>Quick Actions</Text>

        <View style={styles.actionRow}>
          <ActionCard
            title="Upload Paper"
            emoji="📄"
            onPress={() => router.push("/(tabs)/upload")}
          />

          <ActionCard
            title="Practice"
            emoji="📝"
            onPress={() => router.push("/(tabs)/practice")}
          />
        </View>

        <View style={styles.actionRow}>
          <ActionCard
            title="Results"
            emoji="📊"
            onPress={() => Alert.alert("Coming Soon")}
          />

          <ActionCard
            title="Community"
            emoji="👥"
            onPress={() => router.push("/(tabs)/community")}
          />
        </View>

        <Text style={styles.heading}>AI Testing</Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#2563EB",
            padding: 15,
            borderRadius: 10,
            margin: 20,
          }}
          onPress={async () => {
            await testGemini();
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            🤖 Test Gemini
          </Text>
        </TouchableOpacity>

        <Text style={styles.heading}>AI Features</Text>

        <TouchableOpacity style={styles.aiButton} onPress={handleGeminiTest}>
          <Text style={styles.aiButtonText}>🤖 Test Gemini AI</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Recent Activity</Text>

        <View style={styles.emptyCard}>
          <Text style={styles.emptyText}>No tests attempted yet.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FB",
  },

  statsRow: {
    flexDirection: "row",
    marginHorizontal: 12,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },

  actionRow: {
    flexDirection: "row",
    marginHorizontal: 12,
  },

  aiButton: {
    backgroundColor: "#2563EB",
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 10,
  },

  aiButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 17,
  },

  emptyCard: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 18,
    padding: 20,
    elevation: 2,
    marginBottom: 40,
  },

  emptyText: {
    color: "#666",
    fontSize: 16,
  },
});
