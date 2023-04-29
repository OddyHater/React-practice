import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Post() {
  const [post, setPost] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }, [id]);

  

  return(
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  )
}

export default Post;