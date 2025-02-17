import './style.css'
import { PROJECT_ID, DATABASE_ID, COLLECTION_ID } from './keys.js';

import { Client, Databases, ID, Query } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);

const databases = new Databases(client);

let myQuery = await databases.listDocuments(
  DATABASE_ID,
  COLLECTION_ID,
  [
    Query.equal('category', ['Learning Resources'])
  ]
);


// Add all the resources to the results page
async function addResourcesToDom(){
  document.querySelector('ul').innerHTML = '<li>1</li>'
  

}



console.log(myVar);

