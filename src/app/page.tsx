import { serverClient } from "@/app/_trpc/serverClient";
import PeopleList from "@/components/TodoList";

export default async function Home() {
	const people = await serverClient.getAllPeople();
	return (
		<div>
			Done
			<PeopleList initialPeople={people} />
		</div>
	);
}
