import styled from 'styled-components';

export const StyledLoading = styled.div`
  text-align: center;

  & > p {
    font-style: italic;
  }
`;

export const StyledError = styled.div`
  text-align: center;

  & > p {
    //font-style: italic;
  }

  & > button {
    margin-top: 0.5rem;
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
