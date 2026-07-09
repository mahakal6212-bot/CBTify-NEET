import { Query } from "appwrite";
import { APPWRITE } from "../constants/config";
import { databases } from "../lib/appwrite";

export async function getUserProfile(userId: string) {
  try {
    const result = await databases.listDocuments(
      APPWRITE.databaseId,
      APPWRITE.usersTableId,
      [Query.equal("userId", userId)],
    );

    if (result.documents.length === 0) {
      return null;
    }

    return result.documents[0];
  } catch (error) {
    console.log("Profile Error:", error);
    return null;
  }
}
