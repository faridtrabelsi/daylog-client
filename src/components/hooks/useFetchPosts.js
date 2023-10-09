import { useInfiniteQuery } from 'react-query';

const useFetchPosts = (path) => {
  return useInfiniteQuery(
    [path],
    async ({ pageParam = 0 }) => {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/${path}?cursor=${pageParam}`,
        {
          credentials: 'include',
        }
      );
      if (!res.ok) {
        throw Error('Something went wrong while connecting to the server...');
      }
      return res.json();
    },
    {
      refetchInterval: 1000 * 300,
      getNextPageParam: (lastPage) =>
        lastPage.posts.length >= 5 ? lastPage.nextCursor : undefined,
    }
  );
};

export default useFetchPosts;
