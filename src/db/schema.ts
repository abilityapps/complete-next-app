import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const people = sqliteTable("people", {
	id: integer("id").primaryKey(),
	name: text("name"),
	age: integer("age"),
});
