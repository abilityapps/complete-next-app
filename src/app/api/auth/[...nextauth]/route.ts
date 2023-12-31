import { env } from "@/env.mjs";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
		}),
	],
	pages: {
		signIn: "/sign-in",
		signOut: "/sign-out",
	},
});

export { handler as GET, handler as POST };
