import './Main.css';
import { useState, useEffect } from 'react';
import { GetPost } from './GetPost.ts';
import Post from './Post';

function Main() {
  const [post, setPost] = useState({});

  useEffect(() => {
    GetPost('memes', setPost);
  },[setPost])

  return (
    <div className="main">
      <h2>{post.title}</h2>

      <button onClick={() => {
        setVisible(true);
      }} className="imgBtn">
        <Post post={post} Blur={true} />
      </button>

      <div className="nav">
        <button onClick={() => {
          GetPost('memes', setPost);
          setPost({});
          setVisible(false);
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
        }} style={{ backgroundColor: "#A2DCFD" }}> Memes!
        </button>
      </div>
    </div>
  );
}

export default Main;
