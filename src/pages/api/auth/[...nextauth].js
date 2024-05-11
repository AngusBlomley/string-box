import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import { connectToServer } from "../../../../lib/dbConnect";
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
        try {
          console.log('Credentials:', credentials);
          await connectToServer();
          const user = await User.findOne({ email: credentials.email }).exec();
          if (user && await bcrypt.compare(credentials.password, user.password)) {
            return { name: user.name, email: user.email, id: user._id.toString() }; // Ensure ID is a string
          } else {
            return null;
          }
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  site: process.env.NEXTAUTH_URL,
  callbacks: {
    jwt: async ({ token, user, account }) => {
      // Only update the token when a user logs in directly via credentials or provider
      if (user) {
        token.userId = user.id;  // Make sure it is the user ID in string format if needed
      }
      return token;
    },
    session: async ({ session, token }) => {
      // Make sure the session includes the userId from the token
      session.user.userId = token.userId;
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  debug: true,
});
