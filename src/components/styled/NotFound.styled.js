import styled from 'styled-components';

const NotFound = styled.div`
  text-align: center;

  & > button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    border: 0;
    background-color: #4285f4;
    color: #000000;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background-color: #5a95f5;
      transition: background-color 150ms;
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export default NotFound;
