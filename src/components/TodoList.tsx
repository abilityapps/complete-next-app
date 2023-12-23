"use client";
import {trpc} from "@/app/_trpc/client";

export default function TodoList() {
	const f = trpc.hello.useQuery();
	return <div>{JSON.stringify(f.data)}</div>;
}
