import "react-native-url-polyfill/auto";

import {
    Account,
    Avatars,
    Client,
    Databases,
    Functions,
    ID,
    Query,
    Storage,
} from "appwrite";

import { APPWRITE } from "../constants/config";

const client = new Client();

client.setEndpoint(APPWRITE.endpoint).setProject(APPWRITE.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
export const functions = new Functions(client);

// Export Helpers
export { ID, Query };

export default client;
