import { useMutation, useQueryClient } from 'react-query';

const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id) =>
      fetch(`${process.env.REACT_APP_SERVER_URL}/post/${id}/delete`, {
        method: 'DELETE',
        credentials: 'include',
      }).then((res) => {
        if (!res.ok) {
          throw Error('Something went wrong while connecting to the server...');
        }
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['feed']);
        queryClient.invalidateQueries(['my_posts']);
      },
    }
  );
};
export default useDeletePost;
