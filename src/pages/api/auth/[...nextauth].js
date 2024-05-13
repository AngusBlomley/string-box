import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectToDatabase from "lib/dbConnect";
import User from "@/models/user";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const db = await connectToDatabase(); // Connect to the database
        const User = db.collection('users'); // Assuming your collection is named 'users'

        // Check if the user already exists
        const existingUser = await User.findOne({ email: credentials.email });
        if (existingUser) {
          throw new Error("User already exists");
        }

        // Create a new user
        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        const newUser = {
          email: credentials.email,
          password: hashedPassword,
          // You can include additional fields here if needed
        };
        await User.insertOne(newUser);

        // Return user data
        return { email: newUser.email, id: newUser._id.toString() };
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  site: process.env.NEXTAUTH_URL,
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (user) {
        token.userId = user.id;
        token.accessToken = jwt.sign({ id: user.id }, process.env.NEXTAUTH_SECRET, { expiresIn: '1h' });
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user.userId = token.userId;
      session.accessToken = token.accessToken;
      return session;
    },
    signIn: async (user, account) => {
      if (account.provider === 'credentials') {
        const isValidCredentials = await validateCredentials(user.email, user.password);
        return !!isValidCredentials;
      }
      // Additional signIn logic if necessary
      return true;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  debug: true,
});
