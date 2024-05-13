import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
const { connectToDatabase } = require('lib/dbConnect');

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jane.doe@example.com" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const { db } = await connectToDatabase();
        const user = await db.collection('users').findOne({
          email: credentials.email
        });

        if (user && user.password === credentials.password) {
          return { id: user._id, name: user.username, email: user.email };
        } else {
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user.id = token.id;
      return session;
    }
  }
});
