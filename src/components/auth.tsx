import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { providerMap, signIn, signOut } from "@/lib/auth";

import { Button } from "./ui/button";

export function SignIn() {
	return (
		<Card className="mx-auto max-w-sm p-4">
			<CardHeader>
				<CardTitle className="text-2xl">Sign In</CardTitle>
				<CardDescription>
					Sign in to continue.
				</CardDescription>
			</CardHeader>
			<div className="flex flex-col gap-2">
				{Object.values(providerMap).map((provider) => (
					<form
						key={provider.id}
						action={async () => {
							"use server";
							await signIn(provider.id, { redirectTo: "/" });
						}}
					>
						<Button type="submit" variant="outline" className="w-full">
							{provider.name}
						</Button>
					</form>
				))}
			</div>
		</Card>
	);
}

export function SignOut() {
	return (
		<Card className="mx-auto max-w-sm p-4">
			<CardHeader>
				<CardTitle className="text-2xl">Sign Out</CardTitle>
				<CardDescription>
				Are you sure you want to sign out?
				</CardDescription>
			</CardHeader>
			<div className="flex flex-col gap-2">
				<form
					action={async (formData) => {
					"use server"
					await signOut()
					}}
				>
					<Button type="submit" className="w-full">Sign out</Button>
				</form>
			</div>
		</Card>
	);
}

