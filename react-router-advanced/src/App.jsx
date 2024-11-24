import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/blog/:id" element={<BlogPost />} />
        {/* More routes will be added later */}
      </Routes>
    </BrowserRouter>
  );
}