import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import Sub from './Othersub';
import Memes from './Memes';
import Eyebleach from './Eyebleach';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} exact />
        <Route path="/Memes" element={<Memes />}/>
        <Route path="/Eyebleach" element={<Eyebleach />}/>
        <Route path="/:sub" element={<Sub />}/>
  </Routes>
  </BrowserRouter>
);
