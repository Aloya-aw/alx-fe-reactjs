import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();

  // Use the postId to fetch blog post data
  return (
    <div>
      <h1>Blog Post {postId}</h1>
      {/* ... */}
    </div>
  );
}
export default BlogPost;