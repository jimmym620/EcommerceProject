import Link from "next/link";
import { useEffect } from "react";
import {useRouter} from 'next/router'

const PageNotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    },[])

    return (<div className="page-not-found">
        <h1>Oops...</h1>
        <p>Go back to <Link href="/">Homepage</Link></p>
    </div> );
}
 
export default PageNotFound;