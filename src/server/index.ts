import {publicProcedure, router} from "@/server/trpc";

export const appRouter = router({
	hello: publicProcedure.query(async () => {
		return [10, 20, 30];
	}),
});

export type AppRouter = typeof appRouter;
