import React, { useState } from 'react';
import Post from "./Post";

const DisplayPosts = (props) => {
  const [posts, setPosts] = useState([
    { name: "Matthew Bshero", comment: "Test post 1" },
    { name: "Matthew Bshero", comment: "Test post 2" },
  ]);

  return (
    <table>
      <thead>
        <tr>
          <th>Social Feed</th>
        </tr>
      </thead>
      <tbody>
        <Post parentPosts={posts} />
      </tbody>
    </table>
  );
};

export default DisplayPosts;
