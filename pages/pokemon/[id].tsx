import { useRouter } from 'next/router'

function Theo({pokemon}) {
    const router = useRouter()
    const {id} = router.query
    return <div>
        Offset: {id}
        <br />
    </div>
}


export default Theo