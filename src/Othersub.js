import './Main.css';
import { useState, useEffect } from 'react';
import ReactHlsPlayer from 'react-hls-player/dist';
import ReactHtmlParser from "react-html-parser";
import { useParams } from "react-router-dom";
import { GetPost } from './GetPost.ts';

function Sub() {
  let param = useParams();
  const [ post, setPost ] = useState({});

  useEffect(() => {
    GetPost(param.sub, setPost);
  },[setPost, param])

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
