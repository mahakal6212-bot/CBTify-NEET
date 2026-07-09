import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";

export async function pickPDF() {
  const result = await DocumentPicker.getDocumentAsync({
    type: "application/pdf",
    copyToCacheDirectory: true,
  });

  if (result.canceled) return null;

  return result.assets[0];
}

export async function pickImages() {
  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!permission.granted) {
    throw new Error("Permission denied");
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    allowsMultipleSelection: true,
    quality: 1,
  });

  if (result.canceled) return [];

  return result.assets;
}
