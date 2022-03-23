import React, { useState } from 'react';
import Post from './Components/Post';


function App() {

const [posts, setPosts] = useState([{name: 'Matthew Bshero', comment: 'Test post'}, {name: 'Matthew Bshero', comment: 'Test post 2'}]);

  return (
    <div>
      <Post parentPosts = {posts} />
    </div>
  );
}

export default App;
