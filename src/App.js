import './App.css';
import { useState, useEffect } from 'react';
import ReactHlsPlayer from 'react-hls-player/dist';
import ReactHtmlParser from "react-html-parser";

function App() {
  const [ post, setPost ] = useState({});

  async function getPost() {
    const res = await fetch('https://reddit-random-middleware.herokuapp.com/memes');
    const resJ = await res.json();
    setPost(resJ);
    console.log(resJ)
  }

  useEffect(() => {
    getPost();
  },[setPost])
  
  return (
    <>
      {post.title}
      <br />
      {post.media && post.media.reddit_video && <ReactHlsPlayer
        src={post.media.reddit_video.hls_url}
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />}
      {post.media && post.media.oembed && ReactHtmlParser(ReactHtmlParser(post.media.oembed.html))}
      {!post.media && /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(post.url) && <img src={post.url} alt={post.title}/>}
    </>
  );
}

export default App;
