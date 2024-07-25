const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const { items, email } = req.body;

    const transformedItems = items.map(item => ({
        quantity: 1,
        price_data: {
            currency: 'LKR',
            unit_amount: Math.round(item.price * 100), // Ensure unit_amount is an integer
            product_data: {
                name: item.title,
                images: [item.image],
            },
        },
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            shipping_options: [
                {
                    shipping_rate: 'shr_1PgVf9HXdyJ63GGlieOCgg6H'
                }
            ],
            shipping_address_collection: {
                allowed_countries: ['US', 'CA', 'LK'],
            },
            line_items: transformedItems,
            mode: 'payment',
            success_url: `${process.env.HOST}/success`,
            cancel_url: `${process.env.HOST}/checkout`,
            metadata: {
                email,
                images: JSON.stringify(items.map(item => item.image)),
            },
        });

        res.status(200).json({ id: session.id });
    } catch (error) {
        console.error('Error creating Stripe checkout session:', error);

        // Capture more details about the error
        res.status(500).json({
            statusCode: 500,
            message: error.message,
            type: error.type,
            code: error.code,
            param: error.param,
        });
    }
};
