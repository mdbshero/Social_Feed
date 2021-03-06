import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import NavBar from "./Components/NavBar/NavBar";
import CreatePost from "./Components/CreatePost/CreatePost";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    { name: "Matthew Bshero", comment: "HELLO?" },
    { name: "Matthew Bshero", comment: "Am I the only one on here?" },
  ]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div className="container gradient-custom">
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
      <footer>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="border-footer">
              <h6>Copyright BsheroCorp</h6>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
