import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDRI-4r0HZI6KRtNmT3y7lIHKAnoXWD4nY',
	authDomain: 'svelteblog-666f6.firebaseapp.com',
	projectId: 'svelteblog-666f6',
	storageBucket: 'svelteblog-666f6.appspot.com',
	messagingSenderId: '759849915682',
	appId: '1:759849915682:web:74ae3b5288367c146b417b',
	databaseURL: 'https://svelteblog-666f6-default-rtdb.firebaseio.com/'
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
