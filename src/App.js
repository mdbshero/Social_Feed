import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import NavBar from "./Components/NavBar/NavBar";
import CreatePost from "./Components/CreatePost/CreatePost";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    { name: "Matthew Bshero", comment: "Test post 1" },
    { name: "Matthew Bshero", comment: "Test post 2" },
  ]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="border-nav">
            <NavBar />
          </div>
        </div>
      </div>
      <main>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="border-box">
              <CreatePost addNewPostProp={addNewPost} />
            </div>
            <div className="border-box">
              <DisplayPosts post={posts} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
