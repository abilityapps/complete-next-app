import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import NextAuth from "next-auth"
import type { Provider } from "next-auth/providers"

const providers: Provider[] = [
  Google,
  GitHub
]

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    }
    return { id: provider.id, name: provider.name }
  })
  .filter((provider) => provider.id !== "credentials")

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  pages: {
    signIn: "/sign-in",
    signOut: "/sign-out",
  },
})
