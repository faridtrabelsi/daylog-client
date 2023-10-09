import { useQuery } from 'react-query';

const useFetchPostDetails = (id) => {
  return useQuery(['post', id], async () => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/post/${id}`, {
      credentials: 'include',
    });

    if (res.status === 400) {
      throw Error('Bad Request');
    }

    if (res.status === 404) {
      throw Error('Post not found');
    }

    if (res.status === 500) {
      throw Error('Internal Server Error');
    }

    return res.json();
  });
};

export default useFetchPostDetails;
