import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: false },
    secondName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: false },
    address: { type: String, required: false },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});

export default mongoose.models.User || mongoose.model('User', userSchema);

export async function getServerSideProps(context) {
    const token = context.req.cookies.token;

    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        // Token is valid, proceed to render the page
        return { props: {} };
    } catch (error) {
        // Invalid token, redirect to login
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
}