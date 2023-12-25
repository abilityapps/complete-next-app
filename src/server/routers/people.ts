import { people } from "@/db/schema";
import { publicProcedure } from "@/server/trpc";
import { BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import { z } from "zod";

export function getAllPeople(db: BetterSQLite3Database<Record<string, never>>) {
	return publicProcedure.query(async () => {
		return db.select().from(people).all();
	});
}

export function addPeople(db: BetterSQLite3Database<Record<string, never>>) {
	return publicProcedure
		.input(
			z.object({
				name: z.string(),
				age: z.number(),
			}),
		)
		.mutation(async (opts) => {
			db.insert(people)
				.values({ name: opts.input.name, age: opts.input.age })
				.run();
			return true;
		});
}

export function deleteAllPeople(
	db: BetterSQLite3Database<Record<string, never>>,
) {
	return publicProcedure.mutation(async () => {
		db.delete(people).run();
		return true;
	});
}
