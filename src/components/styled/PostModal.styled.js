import styled from 'styled-components';

const PostModal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostModalForm = styled.form`
  position: relative;
  width: 90%;
  max-width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.body};
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  animation-name: animatetop;
  animation-duration: 0.3s;
  @keyframes animatetop {
    from {
      top: -100%;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  & > input[type='text'] {
    background-color: inherit;
    color: inherit;
    width: 90%;
    max-width: 400px;
    height: 3rem;
    padding: 0.8rem;
    outline: 0;
    border: 1px solid #6b6a78;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;

    &:hover {
      background-color: rgba(66, 133, 244, 0.1);
    }

    &:focus {
      border: 2px solid;
      border-color: ${({ theme }) => theme.primaryHover};
    }
  }

  & > textarea {
    background-color: inherit;
    color: inherit;
    width: 90%;
    max-width: 400px;
    height: 50%;
    border: 1px solid #6b6a78;
    outline: 0;
    padding: 0.8rem;
    border-radius: 5px;
    resize: none;

    &:hover {
      background-color: rgba(66, 133, 244, 0.1);
    }

    &:focus {
      border: 2px solid;
      border-color: ${({ theme }) => theme.primaryHover};
    }
  }

  & > button {
    background-color: ${({ theme }) => theme.primary};
    color: #ffffff;
    border: 0;
    border-radius: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    padding: 0.6rem 1.4rem;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.primaryHover};
      color: ${({ theme }) => theme.body};
      transition: all 150ms;
    }

    &:active {
      transform: scale(0.98);
    }

    &:disabled {
      background-color: ${({ theme }) => theme.elevation_1};
      color: ${({ theme }) => theme.text_2};
      cursor: not-allowed;
      pointer-events: none;
    }
  }

  & > p {
    padding: 0 3rem;
  }
`;

export const PostModalHeader = styled.div`
  span {
    position: absolute;
    top: 0.25rem;
    right: 1rem;
    font-size: 1.75rem;
    font-weight: bold;
    color: ${({ theme }) => theme.icon};
    cursor: pointer;
    padding: 0.25rem;

    &:hover {
      color: ${({ theme }) => theme.iconHover};
    }
  }
`;

export default PostModal;
