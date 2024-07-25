const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req,res) => {
    const {items,email}=req.body;

    const transformedItems=items.map(item => ({
        description: item.description,
        quantity: 1,
        price_data:{
            currency:'LKR',
            unit_amount: item.price * 390.89,
            product_data:{
                name:item.title,
                images:[item.image],
            },
        }
    }));
}