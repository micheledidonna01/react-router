import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const url = 'https://jsonplaceholder.typicode.com/posts';

function SinglePost() {

    let [post, setPost] = useState(null);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(false);

    let { id } = useParams();
    console.log()
    let intId = parseInt(id);
    console.log(id);
    let navigate = useNavigate();

    function nextPage(incId) {
        if (incId > 100) {
            let btn = document.querySelector('.disabledBtn');
            btn.classList.add('disabled');
            return
        }
        let stringId = incId.toString();
        navigate(`/posts/${stringId}`);
    }


    function getPost() {
        setLoading(true);
        axios.get(`${url}/${id}`)
            .then(res => {
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);

                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }


    useEffect(getPost, [intId]);


    console.log(post);

    if (loading) {
        return <div>Caricamento della pagina</div>
    }

    if (error) {
        return <div>Siamo in errore</div>
    }

    return (
        <div className="container-main d-flex row"> 
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            <div className="d-flex justify-content-between container-btn px-4">
                <div className="text-dark icon" onClick={() => navigate(-1)}><i class="fa-solid fa-arrow-left"></i></div>
                <div className="text-dark icon" onClick={() => nextPage(intId + 1)}><i class="fa-solid fa-arrow-right"></i></div>
                {/* <button className="btn btn-outline-primary disabledBtn" onClick={() => nextPage(intId + 1)}>Pagina succ</button> */}
            </div>

        </div>
    )

}

export default SinglePost