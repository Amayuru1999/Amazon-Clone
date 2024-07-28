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
        const payload = requestBuffer.toString();
        const sig = req.headers['stripe-signature'];
        let event;
        //Verify that the EVENT posted came from STRIPE
        try{
            event = stripe.webhooks.constructEvent(payload,sig,endpointSecret);
        } catch (err){
            console.log('ERROR',err.message);
            return res.status(400).send(`Webhook error: ${err.message}`);

    }
    //Handle the checkout.session.completed event
}};