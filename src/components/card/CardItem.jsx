function CardItem({title, body}){
    return <li className="list-group-item">
            <h3>{title}</h3>
            <p>{body}</p>
        </li>
}

export default CardItem