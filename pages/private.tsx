import {signIn, useSession} from "next-auth/react";
import {GetServerSideProps} from "next";
import {unstable_getServerSession} from "next-auth";
import {authOptions} from "./api/auth/[...nextauth]"

export default function Private() {
    const {data: session, status} = useSession()

    if (status == "loading") {
        return (
            <>
                <p>Loading...</p>
            </>
        )
    }
    if (status == "unauthenticated") {
        signIn()
    }
    return (
        <>
            <p>Welcome to private content !</p>

        </>
    )
}