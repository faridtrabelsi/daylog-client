import styled from 'styled-components';

const Feed = styled.div`
  h1 {
    text-align: center;
  }
  /* display: flex;
  flex-direction: column;
  gap: 3rem; */
`;

export const LoadMoreButton = styled.button`
  background-color: transparent;
  color: inherit;
  border: 1px solid;
  border-color: ${({ theme }) => theme.border_2};
  border-radius: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  width: 40%;
  height: 2rem;
  display: block;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.hoverBgColor};
    transition: background-color 150ms;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default Feed;
