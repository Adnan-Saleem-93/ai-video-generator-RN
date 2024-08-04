import {Account, Client, ID, Models} from 'react-native-appwrite'
export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.dani.reelforge',
  projectId: '66ad14aa0006a68332d1',
  databaseId: '66ae673600118bd61edb',
  userCollectionId: '66ae674f001ba6fa1325',
  videoCollectionId: '66ae67650002b7c9154d',
  storageId: '66ae69dd001ce29d4cfb'
}

// Init your React Native SDK
export const client = new Client()

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.

const account = new Account(client)
export const createUser = async ({
  email,
  password
}: {
  email: string
  password: string
}): Promise<Models.User<Models.Preferences> | any> => {
  // Register User
  try {
    const response = await account.create(ID.unique(), email, password, email.split('@')[0])
  } catch (error) {
    throw error
  }
}
