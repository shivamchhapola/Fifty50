import './Main.css';
import { useState, useEffect } from 'react';
import { GetPost } from './GetPost.ts';
import Post from './Post';
import Footer from './Footer';

function Main() {
  const [post, setPost] = useState({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    GetPost('fiftyfifty', setPost);
  }, [setPost, setVisible]);

  return (
    <div className="main">
      <h2>{post.title}</h2>

      <Post post={post} Blur={!visible} />

      <div className="nav">
        <button
          onClick={() => {
            GetPost('fiftyfifty', setPost);
            setPost({});
            setVisible(false);
          }}
          style={{ backgroundColor: '#97F388' }}
        >
          {' '}
          Another One?
        </button>

        <button
          onClick={() => {
            window.open('/eyebleach', '_self');
            setPost({});
          }}
          style={{ backgroundColor: '#E79CFA' }}
        >
          {' '}
          Clean my eyes!
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
      </div>
      <Footer />
    </div>
  );
}

export default Main;
