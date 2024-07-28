import {buffer} from 'micro'
import * as admin from 'firebase-admin'

export default async (req, res) => {
    if(req.method === 'POST'){
        const buf = await buffer(req)
        const payload = buf.toString()
        const data = JSON.parse(payload)

        await admin.firestore().collection('users').doc(data.id).set({
            name: data.name,
            email: data.email,
            image: data.image
        })

        res.status(201).json({status: 'Success'})
    }
}