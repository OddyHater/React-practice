import React from 'react';
import './App.css';
import AboutMe from "./about-me/AboutMe";
import Header from './Header';
import Blog from './Blog';


import { Route, Routes } from 'react-router-dom';
import MyStory from "./about-me/MyStory";
import Hobbies from "./about-me/Hobbies";
import Contact from "./about-me/Contact";
import Post from './Post';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />}>
          <Route path="my-story" element={<MyStory />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path='blog/:id' element={<Post />} />
        </Route>
       
        
      </Routes>
    </div>
  );
}

export default App; 