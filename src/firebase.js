import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, push } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyALQ0FxCR1w-qCfoHuKCUt6uK7sVt1g8ME",
  databaseURL: "https://arbazmurme-54ba9-default-rtdb.firebaseio.com/",
  projectId: "arbazmurme-54ba9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, ref, push };
