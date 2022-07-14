import Link from "next/link";

function HomePage() {
    return (
        <>
            <div>Hello World !</div>
            <Link href="/user">Go to my user profile</Link>
        
        </>
    )
}
export default HomePage