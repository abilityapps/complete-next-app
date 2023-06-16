import { NextAuthOptions, getServerSession } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/db";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/sign-in',
    },
    theme: {
        colorScheme: 'auto',
        logo: 'https://i.imgur.com/7KhWHiF.png',
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        // DiscordProvider({
        //     clientId: process.env.DISCORD_CLIENT_ID || "",
        //     clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
        // }),
    ],
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
                session.user.username = token.username
            }

            return session
        },
        redirect() {
            return '/dashboard'
        },
    },
};

export const getAuthSession = () => getServerSession(authOptions);