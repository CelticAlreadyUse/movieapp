import NextAuth from "next-auth"
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
export const authOption = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENTID,
            clientSecret:process.env.GOOGLE_CLIENTSECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}
const handler = NextAuth(authOption)

export { handler as GET, handler as POST }