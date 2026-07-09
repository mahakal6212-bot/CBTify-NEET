import { ID } from "appwrite";
import { APPWRITE } from "../constants/config";
import { account, databases } from "../lib/appwrite";

export async function signUp(name: string, email: string, password: string) {
  try {
    // Delete old session if exists
    try {
      await account.deleteSession("current");
    } catch {}

    // Create Auth Account
    const user = await account.create(
      ID.unique(),
      email.trim(),
      password,
      name,
    );

    // Create Profile Document
    await databases.createDocument(
      APPWRITE.databaseId,
      APPWRITE.usersTableId,
      ID.unique(),
      {
        userId: user.$id,
        name,
        email,
        photo: "",
        tests: 0,
        accuracy: 0,
        questions: 0,
        streak: 0,
        createdAt: new Date().toISOString(),
      },
    );

    // Login Automatically
    await account.createEmailPasswordSession(email.trim(), password);

    return await account.get();
  } catch (error: any) {
    console.log("SIGNUP ERROR:", error);
    throw new Error(error?.message || "Signup failed");
  }
}

export async function signIn(email: string, password: string) {
  try {
    // Remove previous session
    try {
      await account.deleteSession("current");
    } catch {}

    await account.createEmailPasswordSession(email.trim(), password);

    return await account.get();
  } catch (error: any) {
    console.log("LOGIN ERROR:", error);
    throw new Error(error?.message || "Invalid credentials");
  }
}

export async function signOut() {
  try {
    await account.deleteSession("current");
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}

export async function getCurrentUser() {
  try {
    return await account.get();
  } catch {
    return null;
  }
}

export async function getProfile(userId: string) {
  try {
    const response = await databases.listDocuments(
      APPWRITE.databaseId,
      APPWRITE.usersTableId,
    );

    return response.documents.find((doc: any) => doc.userId === userId);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateProfile(documentId: string, data: any) {
  return await databases.updateDocument(
    APPWRITE.databaseId,
    APPWRITE.usersTableId,
    documentId,
    data,
  );
}
