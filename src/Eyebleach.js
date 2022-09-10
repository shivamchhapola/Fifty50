import './Main.css';
import { useState, useEffect } from 'react';
import { GetPost } from './GetPost.ts';
import Post from './Post';
import Footer from './Footer';

function Eyebleach() {
  const [post, setPost] = useState({});

  useEffect(() => {
    GetPost('eyebleach', setPost);
  }, [setPost]);

  return (
    <div className="main">
      <h2>{post.title}</h2>
      <Post post={post} />
      <div className="nav">
        <button
          onClick={() => {
            GetPost('eyebleach', setPost);
            setPost({});
          }}
          style={{ backgroundColor: '#E79CFA' }}
        >
          {' '}
          Another One?
        </button>

        <button
          onClick={() => {
            window.open('/memes', '_self');
            setPost({});
          }}
          style={{ backgroundColor: '#A2DCFD' }}
        >
          {' '}
          Memes!
        </button>

        <button
          onClick={() => {
            window.open('/', '_self');
            setPost({});
          }}
          style={{ backgroundColor: '#FC777F' }}
        >
          {' '}
          50/50 Challenge!{' '}
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Eyebleach;
