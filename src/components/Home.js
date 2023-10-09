import useFetchPosts from './hooks/useFetchPosts';
import StyledFeed, { LoadMoreButton } from './styled/Feed.styled';
import Post from './Post';
import { StyledError, StyledLoading } from './styled/Status.styled';

const Home = () => {
  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useFetchPosts('feed');

  return status === 'loading' ? (
    <StyledLoading>
      <p>Loading...</p>
    </StyledLoading>
  ) : status === 'error' ? (
    <StyledError>
      <p>{error.message}</p>
    </StyledError>
  ) : (
    <StyledFeed>
      <h1>Recent Posts</h1>
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

export default Home;
