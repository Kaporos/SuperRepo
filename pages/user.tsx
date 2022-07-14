import {signIn, signOut, useSession} from "next-auth/react";
import Link from "next/link";


// @ts-ignore
const fetcher = (...args) => fetch(...args).then(r => r.json())
export default function User() {
    const {data: session} = useSession()
    if (!session) {
        return (
            <>Not signed in <br/>

                <button onClick={() => signIn()}>Sign in</button>


            </>
        )
    }
    return (
        <>
            <p>Signed as {session.user.email} {session.user.name}</p>
            <button onClick={() => signOut()}>Sign out</button><br/>
            <Link href="/private">See a private page !</Link>
        </>
    )
}