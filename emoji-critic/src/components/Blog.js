import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {        
        setPosts(data);
        console.log(posts);
      })
      .catch((err) => console.log(err));
  }, []);

  return(
    <>
      <h1>Блог</h1>
      <ul>
        {posts.map((post) => (
          <li>
            <Link key={post.id} to={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Blog;