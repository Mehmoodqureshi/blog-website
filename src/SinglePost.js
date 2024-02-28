// SinglePost.js
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import posts from './postData';

const SinglePost = () => {
  const location = useLocation();
  console.log("Location state:", location.state);
  const { postId } = useParams();
  console.log("Post:", posts);
  // Ensure post is properly accessed from location state
  const post = posts.find(post => post.id === parseInt(postId));
  return (
    <div id="SinglePost">
      {post ? (
        <>
          <h1 className="mb-4 text-2xl font-bold">{post.title}</h1>
          <img className="object-cover object-center w-full lg:h-48 md:h-36" src={post.images} alt={post.title} />
          {/* Render other post details as needed */}
        </>
      ) : (
        <div className='flex items-center justify-center h-screen'>Post not found.</div>
      )}
    </div>
  );
};

export default SinglePost;
