import './style.css'

import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67b2c60e000bb8e6847b');

const databases = new Databases(client);

const promise = databases.createDocument(
    '67b2c632000f6037bc0a',
    '67b2c67b0004f0872d83',
    ID.unique(),
    { "title": "Hamlet" }
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
