import './App.css';
import { useState, useEffect } from 'react';
import ReactHlsPlayer from 'react-hls-player/dist';
import ReactHtmlParser from "react-html-parser";
import { useParams } from "react-router-dom";

function App() {
  let params = useParams();
  const [ post, setPost ] = useState({});

  async function getPost(sub) {
    const res = await fetch(sub ? 'https://reddit-random-middleware.herokuapp.com/' + sub : 'https://reddit-random-middleware.herokuapp.com/fiftyfifty');
    const resJ = await res.json();
    setPost(resJ);
    console.log(resJ)
  }

  useEffect(() => {
    getPost(params.sub);
  },[setPost, params])
  
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
      {!post.media && /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(post.url) && <img src={post.url} alt={post.title} />}
      <button onClick={() => getPost()}> Another One </button> 
    </>
  );
}

export default App;
