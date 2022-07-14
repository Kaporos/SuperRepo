import {GetServerSideProps, GetStaticProps} from "next";
import {ClientSafeProvider, getProviders, signIn, useSession} from "next-auth/react";
import {useRouter} from "next/router";


export default function Login({providers}: {providers: ClientSafeProvider}) {
    const router = useRouter()
    const {data: session} = useSession()
    if (session) {
        const {callbackUrl} = router.query
        //@ts-ignore
        router.push(callbackUrl)
    }
    return (
        <>
            {Object.values(providers).map(provider => (
                <>
                    <div key={provider.name}>
                        <button onClick={() => {signIn(provider.id)}}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                </>
            ))}
            <p>Login page !</p>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const providers = await getProviders()
    return {
        props: {
            providers
        }
    }
}