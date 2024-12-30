// Import the Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue, update, increment } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwMFPvf5Hr3ASjcsii5bWpJNFBaRG0YQ0",
  authDomain: "quascars-2024.firebaseapp.com",
  projectId: "quascars-2024",
  storageBucket: "quascars-2024.firebasestorage.app",
  messagingSenderId: "497636253553",
  appId: "1:497636253553:web:c0d26aed52c019e1ece0d0",
  measurementId: "G-ES41X1FD3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Voting Function
function vote(option) {
    const votesRef = ref(database, 'votes/' + option);
    update(votesRef, { count: increment(1) }).then(() => {
        console.log(`Vote registered for ${option}`);
    }).catch(error => {
        console.error('Error updating vote:', error);
    });
}

// Fetch Votes
function getVotes() {
    const votesRef = ref(database, 'votes');
    onValue(votesRef, (snapshot) => {
        const votes = snapshot.val();
        console.log('Current votes:', votes);
    }, (error) => {
        console.error('Error reading votes:', error);
    });
}