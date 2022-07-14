import {GetServerSideProps} from "next";
import Link from "next/link";

function HomePage() {
    return (
        <>
            <div>Hello World !</div>
            <Link href="/user">Go to my user profile</Link>
        
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log(process.env.GITHUB_ID)

    return {
        props: {}
    }
}

export default HomePage