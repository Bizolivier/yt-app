import React from "react";
import usePosts from "./usePosts";

export default function App() {
  const posts = usePosts();
  // Add in code here to use the 'usePosts' hook.

  const renderedPosts = posts.map(post => {
    return <li key={post.id}>{post.title}</li>;
  });

  return (
    <div>
      <h3>Posts</h3>
      <ul>{renderedPosts}</ul>
    </div>
  );
}

