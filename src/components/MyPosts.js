import useFetchPosts from './hooks/useFetchPosts';
import StyledFeed, { LoadMoreButton } from './styled/Feed.styled';
import Post from './Post';
import { StyledError, StyledLoading } from './styled/Status.styled';
import { useNavigate } from 'react-router-dom';

const MyPosts = () => {
  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useFetchPosts('my_posts');

  const navigate = useNavigate();

  return status === 'loading' ? (
    <StyledLoading>
      <p>Loading...</p>
    </StyledLoading>
  ) : status === 'error' ? (
    <StyledError>
      <p>{error.message}</p>
      <button onClick={() => navigate('/', { replace: true })}>Go Home</button>
    </StyledError>
  ) : (
    <StyledFeed>
      <h1>My Posts</h1>
      {data?.pages?.map((page) =>
        page.posts.map((post) => <Post key={post.id} post={post} />)
      )}

      {hasNextPage && !isFetchingNextPage && (
        <LoadMoreButton onClick={() => fetchNextPage()}>
          Show More
        </LoadMoreButton>
      )}
    </StyledFeed>
  );
};

export default MyPosts;
