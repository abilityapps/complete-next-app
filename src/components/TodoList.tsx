"use client";
import { trpc } from "@/app/_trpc/client";
import { serverClient } from "@/app/_trpc/serverClient";
import { Button } from "@/components/ui/button";

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
		</div>
	);
}
