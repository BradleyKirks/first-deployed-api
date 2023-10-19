import { initializeApp, cert } from "firebase-admin/firestore"
import { getFirestore } from "firebase-admin/firestore"
import { creds } from '../creds.js'

initializeApp({
    credential: cert(creds)
})
const db = getFirestore()

export default db 