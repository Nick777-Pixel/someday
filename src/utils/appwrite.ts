import { Client,Databases,Functions,Account } from 'appwrite';
const client = new Client();


client.setEndpoint('https://appwrite.hosenur.tech/v1').setProject('6408d275d925dcf6b8cf');
const database = new Databases(client);
const functions = new Functions(client);
const account = new Account(client);
export  { database, functions, account };