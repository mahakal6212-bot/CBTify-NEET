import { Alert } from "react-native";
import { askGemini } from "./gemini";

export async function testGemini() {
  try {
    const reply = await askGemini("Say Hello from CBTify");

    console.log(reply);

    Alert.alert("Gemini Success ✅", reply);
  } catch (e: any) {
    console.log(e);

    Alert.alert("Gemini Error ❌", e.message);
  }
}
