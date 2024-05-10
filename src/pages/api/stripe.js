import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Retrieve the payment method ID from the request body
      const { paymentMethodId, amount } = req.body;

      // Create a PaymentIntent on Stripe
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'gbp',
        payment_method: paymentMethodId,
        confirm: true,
      });

      // If the payment was successful, respond with a success message
      if (paymentIntent.status === 'succeeded') {
        return res.status(200).json({ success: true });
      } else {
        // If payment failed, respond with an error message
        return res.status(400).json({ error: 'Payment failed' });
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    // Method Not Allowed error if request method is not POST
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }
}
