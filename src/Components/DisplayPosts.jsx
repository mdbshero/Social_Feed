import React, { useState } from 'react';
import Post from "./Post";

const DisplayPosts = (props) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Social Feed</th>
        </tr>
      </thead>
      <tbody>
              {props.post.map((post) => {
        return (
            <tr>
            <Post post={post} />
            </tr>
        );
      })
    }
      </tbody>
    </table>
  );
};

export default DisplayPosts;
