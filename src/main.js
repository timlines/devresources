import './style.css'
import { PROJECT_ID, DATABASE_ID, COLLECTION_ID } from './keys.js';

import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);

const databases = new Databases(client);

let myVar = await databases.listDocuments(
  DATABASE_ID,
  COLLECTION_ID,
  [
    Query.equal('category', ['Learning Resources'])
  ]
);

console.log(myVar);

