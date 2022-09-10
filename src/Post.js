import ReactHlsPlayer from 'react-hls-player/dist';
import ReactHtmlParser from 'react-html-parser';
import React, { useState, useEffect } from 'react';
import './Post.css';

export default function Post({ post, Blur }) {
  const [blur, setBlur] = useState(Blur);

  useEffect(() => {
    setBlur(Blur);
  }, [Blur, post]);

  return (
    <div className="content">
      {post.media && post.media.reddit_video && (
        <ReactHlsPlayer
          src={post.media.reddit_video.hls_url}
          autoPlay={false}
          controls={true}
          width="100%"
          height="100%"
        />
      )}

      {post.media &&
        post.media.oembed &&
        ReactHtmlParser(ReactHtmlParser(post.media.oembed.html))}

      {!post.media &&
        /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(post.url) &&
        ((blur && (
          <img
            src={post.url}
            alt={post.title}
            style={{ filter: 'blur(2rem)' }}
            onClick={() => {
              setBlur(false);
            }}
          />
        )) || <img src={post.url} alt={post.title} />)}

      <a
        href={'https://www.reddit.com/u/' + post.author}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="author">u/{post.author}</span>
      </a>
    </div>
  );
}
