import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import UserModel from "@/model/User";
import dbConnect from "@/lib/dbConnect";


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
              },
              async authorize(credentials: any): Promise<any> {  
                await dbConnect();
                try {
                    const { username, password, email } = credentials;
                    const user = await UserModel.findOne({
                        $or: [{ email: email }, { username: username }]
                    });
                    if (!user) {
                        throw new Error("No user found");
                    }
                    if (!user.isVerified) {
                        throw new Error("Please verify your email first");
                    }

                    const isValid = await bcrypt.compare(password, user.password);
                    if (!isValid) {
                        throw new Error("Invalid credentials");
                    }

                    return user;
                }
                catch (error: any) {
                    throw new Error("Invalid credentials", error);
                } 
              }
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token._id = user._id?.toString();
                token.username = user.username;
                token.isVerified = user.isVerified;
                token.isAcceptingMessages = user.isAcceptingMessages;
            }
            return token;
        },
        async session({session, token}) {
            if (token) {
                session.user._id = token._id;
                session.user.username = token.username;
                session.user.isVerified = token.isVerified;
                session.user.isAcceptingMessages = token.isAcceptingMessages;
            }
            return session;
        }
    },
    pages: {
        signIn: "/sign-in"
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
}
