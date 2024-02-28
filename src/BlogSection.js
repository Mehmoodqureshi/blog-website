// BlogSection.js
import React from "react";
import { Link } from "react-router-dom";
import  posts from "./postData"; // Import the posts data array
import ProfileImage from "./dp.jpg"; // Import your image

const BlogSection = () => {
  console.log(posts);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h3 className="mb-4 font-bold ml-9">Latest Posts</h3>
        <div className="flex flex-wrap m-4">
          {posts.map((post) => (
            <div key={post.id} className="p-4 md:w-1/3">
              <Link
                to={{ pathname: `/singlepost/${post.id}`, state: { post } }}
              >
                <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
                  <img
                    className="object-cover object-center w-full lg:h-48 md:h-36"
                    src={post.images}
                    alt={post.title}
                  />
                  <div className="p-6">
                    <h2 className="w-24 px-2 py-2 mb-1 text-xs font-medium tracking-widest text-blue-800 bg-gray-100 title-font">
                      Technology
                    </h2>
                    <h1 className="pt-4 mb-3 text-xl font-bold text-gray-900 title-font">
                      {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 pt-6">
                      <img src={ProfileImage} alt="Photo" />
                      <h4>Mehmood Qureshi</h4>
                      {new Date().toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
