"use client"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/Button"

export default function AuthButton() {
    return (
        <div className="space-x-2">
            <Link href='/sign-in' className={buttonVariants({ variant: "outline" })}>Sign In</Link>
            <Link href='/sign-up' className={buttonVariants()}>Sign Up</Link>
        </div>
    )
};

