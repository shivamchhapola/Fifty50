import './Main.css';
import { useState, useEffect } from 'react';
import { GetPost } from './GetPost.ts';
import Post from './Post';
import Footer from './Footer';

function Memes() {
  const [post, setPost] = useState({});

  useEffect(() => {
    GetPost('memes', setPost);
  }, [setPost]);

  return (
    <div className="main">
      <h2>{post.title}</h2>
      <Post post={post} />
      <div className="nav">
        <button
          onClick={() => {
            GetPost('memes', setPost);
            setPost({});
          }}
          style={{ backgroundColor: '#A2DCFD' }}
        >
          {' '}
          Another One?
        </button>

        <button
          onClick={() => {
            window.open('/', '_self');
            setPost({});
          }}
          style={{ backgroundColor: '#FC777F' }}
        >
          {' '}
          50/50 Challenge!
        </button>

        <button
          onClick={() => {
            window.open('/eyebleach', '_self');
            setPost({});
          }}
          style={{ backgroundColor: '#E79CFA' }}
        >
          {' '}
          Clean my eyes!{' '}
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Memes;
