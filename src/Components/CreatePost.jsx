import React, { useState } from 'react';



const CreatePost = (props) => {

const [name, setName] = useState('');
const [comment, setComment] = useState('');

function handleSubmit(event) {
    event.preventDefault();
    let newEntry = {
        name: name,
        comment: comment
    };
    props.addNewPostProp(newEntry);
}

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            <label>Post:</label>
            <input type='text' value={comment} onChange={(event) => setComment(event.target.value)} />
            <button type='submit'>Submit</button>
        </form>
     );
}
 
export default CreatePost;