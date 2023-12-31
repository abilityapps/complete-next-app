import PeopleList from "@/components/TodoList";
import { serverClient } from "@/utils/trpc/serverClient";

export default async function Home() {
	const people = await serverClient.getAllPeople();
	return (
		<div>
			Done
			<PeopleList initialPeople={people} />
		</div>
	);
}
