"use client";
import { Button } from "@/components/ui/button";
import { trpc } from "@/utils/trpc/client";
import { serverClient } from "@/utils/trpc/serverClient";
import Link from "next/link";
import { toast } from "sonner";

export default function TodoList({
	initialPeople,
}: {
	initialPeople: Awaited<ReturnType<(typeof serverClient)["getAllPeople"]>>;
}) {
	const getPeoples = trpc.getAllPeople.useQuery(undefined, {
		initialData: initialPeople,
		refetchOnMount: false,
		refetchOnReconnect: false,
	});
	const addPerson = trpc.addPerson.useMutation();
	const deleteAllPeople = trpc.deleteAllPeople.useMutation();

	return (
		<div>
			{JSON.stringify(getPeoples.data)}

			<Button onClick={() => addPerson.mutate({ name: "hello", age: 20 })}>
				add person
			</Button>
			<Button onClick={() => deleteAllPeople.mutate()}>
				delete all people
			</Button>
			<Button onClick={() => toast.success("Hello World")}>Toast</Button>
			<Link href={"/jest-example"}>hi</Link>
		</div>
	);
}
