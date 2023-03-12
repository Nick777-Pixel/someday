import { Client,Databases,Functions,Account } from 'appwrite';
const client = new Client();
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
const PROJECT = import.meta.env.VITE_APPWRITE_PROJECT;

client.setEndpoint(ENDPOINT).setProject(PROJECT);
const database = new Databases(client);
const functions = new Functions(client);
const account = new Account(client);
export  { database, functions, account };