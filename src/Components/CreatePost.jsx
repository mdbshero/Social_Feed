import React, { useState } from 'react';



const CreatePost = () => {

const [name, setName] = useState('');
const [post, setPost] = useState('');

function handleSubmit(event) {
    event.preventDefault();
    let newEntry = {
        name: name,
        post: post
    };
    console.log(newEntry);
}

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type='text' value={post} onChange={(event) => setPost(event.target.value)} />
            <button type='submit'>Post</button>
        </form>
     );
}
 
export default CreatePost;