import './Main.css';
import { useState, useEffect } from 'react';
import ReactHlsPlayer from 'react-hls-player/dist';
import ReactHtmlParser from "react-html-parser";

function Memes() {
  const [ post, setPost ] = useState({});

  async function getPost() {
    const res = await fetch('https://reddit-random-middleware.herokuapp.com/memes');
    let resJ = await res.json();
    resJ.url = resJ.url.replace("gifv", "gif");
    setPost(resJ);
  }

  useEffect(() => {
    getPost();
  },[setPost])

  return (
    <div className="main">
      <h2>{post.title}</h2>
      <div className="content">
          {post.media && post.media.reddit_video && <ReactHlsPlayer
            src={post.media.reddit_video.hls_url}
            autoPlay={false}
            controls={true}
            width="100%"
            height="100%"
          />}
          {post.media && post.media.oembed && ReactHtmlParser(ReactHtmlParser(post.media.oembed.html))}
          {!post.media && /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(post.url) && <img src={post.url} alt={post.title} />}
        <a href={"https://www.reddit.com/u/" + post.author} target="_blank" rel="noopener noreferrer">
          <span className="author">u/{post.author}</span>
        </a>
      </div>
      <div className="nav">
        <button onClick={() => {
          getPost();
          setPost({});
        }} style={{backgroundColor: "#A2DCFD"}}> Another One? </button>
        <button onClick={() => {
          window.open("/", "_self");
          setPost({});
        }} style={{backgroundColor: "#FC777F"}}> 50/50 Challenge! </button>
        <button onClick={() => {
          window.open("/eyebleach", "_self");
          setPost({});
        }} style={{backgroundColor: "#E79CFA"}}> Clean my eyes! </button>
      </div>
    </div>
  );
}

export default Memes;
