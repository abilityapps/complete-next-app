import AuthButton from "../auth/AuthButton";
import { Icons } from "../Icons";
import Link from "next/link";
import UserAccountMenu from "./UserAccountMenu";
import { getAuthSession } from "@/lib/auth";

export default async function Navbar() {
    const session = await getAuthSession();
    return (
        <div className="fixed top-0 inset-x-0 border-b bg-slate-50/70 backdrop-blur-lg border-zinc-300 z-[10] py-2">
            <div className="container h-full mx-auto flex items-center justify-between gap-2">
                <Link href="/" className="flex gap-2 items-center">
                    <Icons.logo className="w-10 h-10 sm:h-8 sm:w-8" />
                    <p className="hidden text-zinc-700 text-sm font-medium md:block ">
                        Complete-Next-App
                    </p>
                </Link>
                {session?.user ? (
                    <UserAccountMenu user={session.user} />
                ) : (
                    <AuthButton />
                )}
            </div>
        </div>
    )
};