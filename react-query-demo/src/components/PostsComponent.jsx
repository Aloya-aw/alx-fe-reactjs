import React from 'react';
import { useQuery } from 'react-query';

function PostsComponent() {
  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 1 
  };

  const { isLoading, error, data, refetch } = useQuery('posts', fetchPosts);

  const isError = !!error;

  return (
    <div>
      {isLoading && <p>Loading posts...</p>}
      {isError && <p>Error fetching posts: {error.message}</p>}
      {data && (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
      <button onClick={refetch}>Refresh Posts</button>
    </div>
  );
}

export default PostsComponent;