"use client";

import { getProviders, signIn } from "next-auth/react";

type Provider = {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
};

type Providers = {
    [key: string]: Provider;
};

export default async function SignInFlow() {
    const providers = await getProviders() as Providers;

    return (
        <div>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    )
};