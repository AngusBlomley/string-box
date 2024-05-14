import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from 'lib/dbConnect';
import generateToken from './generateToken';
import { User } from '@/models/userModel';
require('dotenv').config();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        await connectToDatabase();
        const user = await User.findOne({ email: credentials.email }).exec();
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          const accessToken = generateToken(user);
          return {
            id: user._id.toString(),
            name: user.username,
            email: user.email,
            accessToken: accessToken,
          };
        }
        return null;
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (account && user) {
        token.accessToken = user.accessToken;
      }
      if (user) {
        token.id = user.id;
        token.user = {
          id: user.id,
          name: user.name,
          email: user.email
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user ? token.user : session.user;
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      return session;
    }
  },
  session: {
  }
});
