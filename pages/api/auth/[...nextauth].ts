import NextAuth, {NextAuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";




export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    pages: {
        signIn: "/auth/login"
    },
    secret: process.env.AUTH_SECRET
}



export default NextAuth(authOptions)