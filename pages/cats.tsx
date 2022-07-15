import useSWR, {useSWRConfig} from "swr"
import {fetcher} from "../utils/fetcher";
import {ICat} from "../utils/mongo";
import {createRef} from "react";

export default function Cats() {
    const {mutate} = useSWRConfig()
    const {data: cats, error}: {data?: ICat[], error?: any} = useSWR("/api/mongo/get", fetcher)


    const inputRef = createRef<HTMLInputElement>()

    const createCat = async () => {
        const name = inputRef.current.value
        if (name.length > 15) {
            alert("Non horacio, le nom ne peut pas dépasser 15 caractères MDR")
            return
        }
        await fetcher("/api/mongo/create/"+name)
        await mutate("/api/mongo/get")
        inputRef.current.value = ""
    }

    return (
        <>
            <h1>Cats: </h1>
            <input ref={inputRef} type="text" placeholder="Cat name"/>
            <button onClick={createCat}>Create cat !</button>
            {cats ? cats.reverse().map((cat) => (
                <>
                    <p>- {cat.name}</p>

                </>
            )) : <></>}
        </>
    )
}