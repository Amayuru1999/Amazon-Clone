import {buffer} from 'micro'
import * as admin from 'firebase-admin'

//Secure a connection to FIREBASE from the backend
const serviceAccount= require('../../../permissions.json')
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app();

//Establish connection to STRIPE
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

export default async (req, res) => {
    if(req.method === 'POST'){
        const  requestBuffer = await buffer(req);
    }
}