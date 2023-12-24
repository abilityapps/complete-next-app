import {env} from "@/env.mjs";
import {addPeople, deleteAllPeople, getAllPeople,} from "@/server/routers/people";
import {router} from "@/server/trpc";
import Database from "better-sqlite3";
import {drizzle} from "drizzle-orm/better-sqlite3";
import {migrate} from "drizzle-orm/better-sqlite3/migrator";

const sqlite = new Database(env.DATABASE_URL);
const db = drizzle(sqlite);

migrate(db, { migrationsFolder: "drizzle" });

export const appRouter = router({
	getAllPeople: getAllPeople(db),
	addPerson: addPeople(db),
	deleteAllPeople: deleteAllPeople(db),
});

export type AppRouter = typeof appRouter;
