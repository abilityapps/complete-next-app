import { SignOut } from "@/components/auth";
import { signOut } from "@/lib/auth";

export default function SignOutPage() {
	return (
		<div className="items-center justify-center min-h-screen mt-[25vh]">
			<SignOut />
		</div>
	);
}
