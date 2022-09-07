import React from 'react'
import './Post.css'

export default function Post(post) {
  return (
    <div className="content">
        {post.media && post.media.reddit_video && <ReactHlsPlayer
            src={post.media.reddit_video.hls_url}
            autoPlay={false}
            controls={true}
            width="100%"
            height="100%"
        />}
        {post.media && post.media.oembed && ReactHtmlParser(ReactHtmlParser(post.media.oembed.html))}
        {!post.media && /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(post.url) && <img src={post.url} alt={post.title}/>}
        <a href={"https://www.reddit.com/u/" + post.author} target="_blank" rel="noopener noreferrer">
        <span className="author">u/{post.author}</span>
        </a>
    </div>
  )
}
