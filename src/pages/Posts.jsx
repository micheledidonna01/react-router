import { useEffect, useState } from "react"
import CardItem from "../components/post/PostItem";
import axios from "axios";

let Posts = () => {

    const [posts, setPosts] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/posts';

    function fetchPosts(){
        axios.get(url).then(res => setPosts(res.data))
        .catch(err => console.log(err))
    }

    console.log(posts);

    useEffect(fetchPosts, []);

    useEffect(() => {
        console.log('mount component Posts');

        //viene eseguito allo smontare del componente
        return () => {
            console.log('unmount component Posts');
        }
    }, [])

    return (
        <ul className="list-group d-flex my-5">
            {posts.map((card)=> <CardItem
            key = {card.id}
            title = {card.title}
            body = {card.body}/>)}
        </ul>
    )
}

export default Posts