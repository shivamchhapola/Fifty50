import './Main.css';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { GetPost } from './GetPost.ts';
import Post from './Post';

function Sub() {
  let param = useParams();
  const [ post, setPost ] = useState({});

  useEffect(() => {
    GetPost(param.sub, setPost);
  },[setPost, param])

  return (
    <div className="main">
      <h2>{post.title}</h2>
      <Post post={post}/>
      <div className="nav">
        <button onClick={() => {
          GetPost(param.sub, setPost);
          setPost({});
        }} style={{ backgroundColor: "#97F388" }}> Another One?
        </button>

        <button onClick={() => {
          window.open("/eyebleach", "_self");
          setPost({});
        }} style={{ backgroundColor: "#E79CFA" }}> Clean my eyes!
        </button>

        <button onClick={() => {
          window.open("/memes", "_self");
          setPost({});
        }} style={{backgroundColor: "#A2DCFD"}}> Memes! </button>
      </div>
    </div>
  );
}

export default Sub;
