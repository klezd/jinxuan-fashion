/* eslint-disable no-undef */
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// FIREBASE
const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID
};

export const app = initializeApp(firebaseConfig);

// export const firebaseStorage = firebase.storage();
// export const firebaseDb = firebase.database();
// export const firebaseAuth = firebase.auth();

// export const firebaseApp = firebase.app();
