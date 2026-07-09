import * as DocumentPicker from "expo-document-picker";

export async function pickAndUploadPDF() {
  const result = await DocumentPicker.getDocumentAsync({
    type: "application/pdf",
    copyToCacheDirectory: true,
  });

  if (result.canceled) return null;

  const file = result.assets[0];

  console.log(file);

  // Upload code next step
}
