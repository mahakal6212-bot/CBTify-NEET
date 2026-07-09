import { ID, Query } from "appwrite";
import { APPWRITE } from "../constants/config";
import { databases } from "../lib/appwrite";

export async function createPaper(data: {
  userId: string;
  title: string;
  fileId: string;
  fileName: string;
}) {
  return databases.createDocument(
    APPWRITE.databaseId,
    APPWRITE.papersTableId,
    ID.unique(),
    {
      ...data,
      status: "uploaded",
      totalQuestions: 0,
      createdAt: new Date().toISOString(),
    },
  );
}

export async function getMyPapers(userId: string) {
  const result = await databases.listDocuments(
    APPWRITE.databaseId,
    APPWRITE.papersTableId,
    [Query.equal("userId", userId)],
  );

  return result.documents;
}
