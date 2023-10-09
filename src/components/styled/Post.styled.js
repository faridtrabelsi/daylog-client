import styled from 'styled-components';

const Post = styled.div`
  background-color: ${({ theme }) => theme.elevation_2};
  padding: 1rem;
  margin: 1.25rem 0;
  border-radius: 0.75rem;
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.border_2};

  & > a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > img {
    aspect-ratio: 1 / 1;
    width: 20px;
    border-radius: 50%;
  }

  & > h4 {
    font-size: 13px;
    font-weight: 400;
  }
`;

export const PostBody = styled.div`
  padding: 0.5rem 0;

  & > h2 {
    overflow-wrap: break-word;
  }

  & > p {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  //justify-content: space-between;
  padding-top: 0.5rem;

  & > span {
    font-size: 13px;
  }

  & > span:nth-child(2) {
    padding: 0 0.375rem;
  }
`;

export default Post;
