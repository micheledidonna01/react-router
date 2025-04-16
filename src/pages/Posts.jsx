import { useEffect } from "react"

let Posts = () => {

    useEffect(() => {
        console.log('mount component Posts');

        //viene eseguito allo smontare del componente
        return () => {
            console.log('unmount component Posts');
        }
    }, [])

    return (
        <div>Sono Posts</div>
    )
}

export default Posts