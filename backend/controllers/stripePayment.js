const stripe = require('stripe')('sk_test_...');
const { v4: uuidv4 } = require('uuid');
uuidv4();

exports.makeStripePayment = (req, res) => {
    const {products, token} = req.body;

    console.log('product', products);

    let amount = 0
    products.map(p => {
        amount = amount + p.price;
    });

    const idempotencyKey = uuidv4();

    return stripe.customers
        .create({
            email: token.email,
            source: token.id
        })
        .then(customer => {
            stripe.charges.create({
                    amount: amount,
                    currency: 'usd',
                    receipt_email: token.email,
                    description: `Purchase of ${product.name}`,
                    shipping: {
                        name: token.card.name,
                        address: {
                            country: token.card.address_country
                        }
                    }
                }, {idempotencyKey}
            );
        })
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err));
}