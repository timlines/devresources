import './style.css'

import { PROJECT_ID, DATABASE_ID, COLLECTION_ID } from './keys.js';

import { Client, Databases, ID,Query  } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);

const databases = new Databases(client);

let learningResourcesQuery = await databases.listDocuments(
  DATABASE_ID,
  COLLECTION_ID,
  [
    Query.equal('category', 'Learning Resources')
  ]
);

let softwareBestPractices = await databases.listDocuments(
  DATABASE_ID,
  COLLECTION_ID,
  [
    Query.equal('category', 'Software Best Practices')
  ]
);

let webDesign = await databases.listDocuments(
  DATABASE_ID,
  COLLECTION_ID,
  [
    Query.equal('category', 'Web Design')
  ]
);

let careerDevelopment = await databases.listDocuments(
  DATABASE_ID,
  COLLECTION_ID,
  [
    Query.equal('category', 'Career Development & Productivity')
  ]
);
let interactiveLearningTools = await databases.listDocuments(
  DATABASE_ID,
  COLLECTION_ID,
  [
    Query.equal('category', 'Interactive Learning & Tools')
  ]
);



function generateItemList(query){
  let str = ``

  for(let element of query['documents']){
    str += `
    <a href="${element['source']}" target="_blank"><li>${element['name']}</li>
    `
  }

  return str
}

// Add all the resources to the results page
async function addResourcesToDom(query, div = '.search-results'){
  document.querySelector(div).innerHTML = generateItemList(query)
}



addResourcesToDom(learningResourcesQuery, '.best-practices')
addResourcesToDom(softwareBestPractices, '.learning-resources')
addResourcesToDom(softwareBestPractices, '.web-design')
addResourcesToDom(softwareBestPractices, '.career-development')
addResourcesToDom(softwareBestPractices, '.interactive-learning-tools')

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


