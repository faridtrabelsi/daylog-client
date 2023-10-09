import StyledSignedInApp from './styled/SignedInApp.styled';
import Navbar from './Navbar';
import Content from './styled/Content.styled';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import MyPosts from './MyPosts';
import PostDetails from './PostDetails';
import NotFound from './NotFound';
import PostModal from './PostModal';
import { useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import ScrollToTop from '../helpers/ScrollToTop';

const queryClient = new QueryClient();

const SignedInApp = () => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
  }, [modal]);

  return (
    <QueryClientProvider client={queryClient}>
      <StyledSignedInApp>
        <Navbar setModal={setModal} />
        <Content>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my_posts" element={<MyPosts />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
        {modal && <PostModal setModal={setModal} />}
      </StyledSignedInApp>
    </QueryClientProvider>
  );
};

export default SignedInApp;
