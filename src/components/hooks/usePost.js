import { useMutation, useQueryClient } from 'react-query';

const usePost = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (post) =>
      fetch(`${process.env.REACT_APP_SERVER_URL}/new_post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
        credentials: 'include',
      }).then((res) => {
        if (!res.ok) {
          throw Error('Something went wrong while connecting to the server...');
        }
        return res.json();
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['feed']);
        queryClient.invalidateQueries(['my_posts']);
      },
    }
  );
};

export default usePost;
