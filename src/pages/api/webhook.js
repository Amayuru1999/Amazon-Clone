import {buffer} from 'micro'
import * as admin from 'firebase-admin'

//Secure a connection to FIREBASE from the backend
const serviceAccount= require('../../../permissions.json')
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app();


export default async (req, res) => {
    if(req.method === 'POST'){


    }
}