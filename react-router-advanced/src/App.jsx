import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        {/* More routes will be added later */}
      </Routes>
    </BrowserRouter>
  );
}