import styled from 'styled-components';

const PostDetails = styled.div`
  & > p {
    margin-top: 1.25rem;
    padding: 1rem;
    overflow-wrap: break-word;
    white-space: pre-line;
  }
`;

export const PostDetailsHeader = styled.div`
  & > h1 {
    text-align: center;
    margin-bottom: 2rem;
    overflow-wrap: break-word;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.border_2};

  & > img {
    aspect-ratio: 1 / 1;
    width: 40px;
    border-radius: 50%;
  }

  & > div > div:nth-child(1) > span {
    font-size: 16px;
    font-weight: 500;
  }

  & > div > div:nth-child(2) > span {
    font-size: 13px;
  }

  & > div > div:nth-child(2) > span:nth-child(2) {
    padding: 0 0.5rem;
  }
`;

export const PostOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.25rem;

  & > .fa-solid.fa-arrow-left {
    color: ${({ theme }) => theme.icon};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.iconHover};
    }
  }

  & > .fa-solid.fa-trash {
    color: ${({ theme }) => theme.icon};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.iconHover};
    }
  }
`;

export default PostDetails;
