import { useEffect } from "react"
import cardData from "../data/cardData";
import CardItem from "../components/card/CardItem";
let Posts = () => {

    useEffect(() => {
        console.log('mount component Posts');

        //viene eseguito allo smontare del componente
        return () => {
            console.log('unmount component Posts');
        }
    }, [])

    return (
        <ul className="list-group d-flex my-5">
            {cardData.map((card)=> <CardItem
            key = {card.id}
            title = {card.title}
            body = {card.body}/>)}
        </ul>
    )
}

export default Posts