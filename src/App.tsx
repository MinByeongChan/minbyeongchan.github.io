// dependency
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useGetPosts from '@hooks/useGetPosts';
import useInitPage from '@hooks/useInitPage';

// components
import MainLayout from '@components/layout/MainLayout';
import Posts from '@pages/Posts';
import PostDetail from '@pages/PostDetail';
import Tags from '@pages/Tags';
import Portpolio from '@pages/Portpolio';
import About from '@pages/About';
import Error from '@pages/error/Error';
import NotFound from '@pages/error/NotFound';

function App() {
  useGetPosts();
  useInitPage();

  return (
    <React.Suspense fallback={<></>}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Posts />} />
            <Route path="/content" element={<PostDetail />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/portpolio" element={<Portpolio />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
}

export default App;
