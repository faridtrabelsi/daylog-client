import styled from 'styled-components';

const SignUp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > form {
    background-color: ${({ theme }) => theme.elevation_1};
    border-radius: 5px;
    height: 400px;
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: ${({ theme }) => theme.shadow};
    text-align: center;

    h1 {
      font-family: 'Pacifico', cursive;
      color: #ffffff;
    }

    sub {
      font-style: italic;
    }
  }
`;

export const SignUpButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  max-width: 240px;
  height: 13%;
  background-color: ${({ theme }) => theme.primary};
  color: #ffffff;
  border: 0;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  padding: 0 1rem;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
    color: ${({ theme }) => theme.body};
    transition: all 150ms;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default SignUp;
