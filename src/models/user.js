import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'; // Import jwt for token verification

const userSchema = new mongoose.Schema({
    name: { type: String, required: false },
    secondName: { type: String, required: false },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: { type: String, required: true },
    mobile: { type: String, required: false },
    address: [{
        addressLine1: { type: String, required: true },
        addressLine2: { type: String, required: false },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true }
    }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});

const User = mongoose.models && mongoose.models.User ? mongoose.models.User : mongoose.model('User', userSchema);

export default User;

async function mongooseConnect() {
    try {
        await mongoose.connect("mongodb+srv://your_connection_string");
        console.log("Connected to MongoDB with Mongoose!");
    } catch (error) {
        console.error("Mongoose connection error:", error);
    }
}

export { mongooseConnect };

async function getServerSideProps(context) {
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
        return { props: {} }; // Token is valid
    } catch (error) {
        console.error('JWT verification failed:', error.message);
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
}


export { getServerSideProps };