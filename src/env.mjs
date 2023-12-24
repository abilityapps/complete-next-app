import {createEnv} from "@t3-oss/env-nextjs";
import {z} from "zod";

export const env = createEnv({
	/*
	 * Serverside Environment variables, not available on the client.
	 */
	server: {},
	/*
	 * Environment variables available on the client (and server).
	 */
	client: {
		GOOGLE_CLIENT_ID: z.string().min(1),
		GOOGLE_CLIENT_SECRET: z.string().min(1),
		DATABASE_URL: z.string().min(1),
	},
	/*
	 * Due to how Next.js bundles environment variables on Edge and Client,
	 * need to manually destructure them to make sure all are included in bundle.
	 *
	 * All variables from `server` & `client` need to be included here.
	 */
	runtimeEnv: {
		DATABASE_URL: process.env.DATABASE_URL,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
	},
});
