// Scout to add database here

import { PROJECT_ID, DATABASE_ID, COLLECTION_ID } from '../src/keys.js';
import { bigBoy } from '../dataFile.js'

import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);

const databases = new Databases(client);

async function createDocument(itemArray){
    const promise = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
          ID.unique(),
          {   "category": itemArray[0],
              "name": itemArray[1],
              "source": itemArray[2] 
          }  
          
      );

    return promise;
    
}

for ( let resource of bigBoy ) {
    console.log(resource);
    createDocument(resource);
    
}



// promise.then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });
