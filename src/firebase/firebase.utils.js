import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCGCB2NWQNtxwm4T3CDYUq5omvvzFKSKbI',
  authDomain: 'e-commerce-c4rr0t.firebaseapp.com',
  databaseURL: 'https://e-commerce-c4rr0t.firebaseio.com',
  projectId: 'e-commerce-c4rr0t',
  storageBucket: 'e-commerce-c4rr0t.appspot.com',
  messagingSenderId: '23184680493',
  appId: '1:23184680493:web:31b73de84251b751e8baa4',
  measurementId: 'G-4046E48YYQ',
}

export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()


    if(!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

export default firebase