import axios from 'axios'
import CreateTable from './table'
import { useEffect, useState } from 'react';
import ObjectTable from './objectTable';
export default function ApiCall()
{

    const [comments, setComments] = useState(null);
    const [input, setInput] = useState("");
    const [postId, setPostId] = useState("1");
    // function fetchApi()
    // {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(post => setComments(post.data))
    // }

    useEffect(() =>
    {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${input}`)
            .then(post =>
            {
                console.log(post)
                setComments(post.data)
            })
    }, [input])

    function fetchData()
    {
        console.log(input)
        setPostId(input);
    }

    return (
        <>
            <input type='text' onChange={(event) => { setInput(event.target.value) }} />
            <button onClick={fetchData}>Fetch</button>
            {/* comments && <CreateTable comments={comments} /> */}

            {
                // comments == null ? <></> : <CreateTable comments={comments} />
                comments && <ObjectTable post={comments} />
            }
        </>
    )
}