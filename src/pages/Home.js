import React from "react";
import CreatePost from "containers/CreatePost";
import Post from "containers/Post";
const Home = () => {
  return (
    <div className="row justify-content-center mt-2">
      <div className="col-5">
        <CreatePost />
        <Post />
       
      </div>
    </div>
  );
};

export default Home;
