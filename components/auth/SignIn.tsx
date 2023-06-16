import AuthForm from "./AuthForm";
import { Icons } from "@/components/Icons";
import Link from "next/link";

export default function SignIn() {
    return (
        <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
            <div className="flex flex-col space-y-2 text-center">
                <Icons.logo className="h-8 w-8 mx-auto" />
                <h1 className="text-2xl font-semibold tracking-tight">
                    Welcome Back!
                </h1>

                <AuthForm />

                <p className="px-8 text-center text-sm text-zinc-700">
                    New to Complete-Next-App? {" "}
                    <Link href="/sign-up" className="hover:text-zinc-800 text-sm underline underline-offset-4">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};