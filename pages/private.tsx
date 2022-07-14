import {signIn, signOut, useSession} from "next-auth/react";
import {GetServerSideProps} from "next";
import {unstable_getServerSession} from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]"

export default function Private({server_session}) {
    console.log(server_session)
    if (server_session) {
        return (
            <>
                <p>This is private !</p>
            </>
        )
    }
    else {
        signIn()
    }
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const server_session = await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
    )
    if (server_session) {
        server_session.user.email = ""
    }
    return {
        props: {
            server_session
        }
    }
}