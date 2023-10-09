import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { readingTime } from '../helpers/Utils';
import useDeletePost from './hooks/useDeletePost';
import useFetchPostDetails from './hooks/useFetchPostDetails';
import StyledPostDetails, {
  PostDetailsHeader,
  PostInfo,
  PostOptions,
} from './styled/PostDetails.styled';
import { StyledError, StyledLoading } from './styled/Status.styled';
import { UserContext } from './UserContext';

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, status, error } = useFetchPostDetails(id);
  const user = useContext(UserContext);
  const { mutate: deletePost, isLoading: isDeleting } = useDeletePost();
  const navigate = useNavigate();

  const handleDelete = () => {
    deletePost(id, {
      onSuccess: () => {
        navigate('/', { replace: true });
      },
    });
  };

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
    <StyledPostDetails>
      <PostDetailsHeader>
        <PostOptions>
          <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)} />

          {!isDeleting && user?.id === post.author_id ? (
            <i className="fa-solid fa-trash" onClick={handleDelete} />
          ) : null}
        </PostOptions>

        <h1>{post.title}</h1>

        <PostInfo>
          <img src={post.img} alt="Profile Img" />

          <div>
            <div>
              <span>{post.username}</span>
            </div>

            <div>
              <span>{post.created_at}</span>
              <span>·</span>
              <span>{readingTime(post.body)}</span>
            </div>
          </div>
        </PostInfo>
      </PostDetailsHeader>

      <p>{post.body}</p>
    </StyledPostDetails>
  );
};

export default PostDetails;
