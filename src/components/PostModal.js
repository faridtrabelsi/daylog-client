import StyledPostModal, {
  PostModalForm,
  PostModalHeader,
} from './styled/PostModal.styled';
import { useState, useRef } from 'react';
import usePost from './hooks/usePost';
import { useNavigate } from 'react-router-dom';

const PostModal = ({ setModal }) => {
  const [value, setValue] = useState({ title: '', post: '' });
  const modalBackgroundRef = useRef();
  const { mutate: sendPost, isLoading, isError, error } = usePost();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = { title: value.title, post: value.post };

    sendPost(post, {
      onSuccess: (data) => {
        setModal(false);
        navigate('/post/' + data.id);
      },
    });

    /*     setValue((prevState) => ({
      ...prevState,
      title: '',
      post: '',
    })); */
  };

  return (
    <StyledPostModal
      ref={modalBackgroundRef}
      onClick={(e) => {
        if (e.target === modalBackgroundRef.current) setModal(false);
      }}
    >
      <PostModalForm onSubmit={handleSubmit}>
        <PostModalHeader>
          <h2>New Post</h2>
          <span onClick={() => setModal(false)}>&times;</span>
        </PostModalHeader>
        <input
          type="text"
          name="title"
          required
          placeholder="Title"
          value={value.title}
          onChange={handleChange}
          maxLength="60"
          minLength="7"
        />

        <textarea
          name="post"
          minLength="100"
          required
          placeholder="Your story..."
          value={value.post}
          onChange={handleChange}
        />

        {/* <sub>Characters Left: {255 - value.post.length}</sub> */}

        {!isError ? (
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Adding Daylog...' : 'Log it'}
          </button>
        ) : (
          <p>An error occurred: {error.message}</p>
        )}
      </PostModalForm>
    </StyledPostModal>
  );
};

export default PostModal;
