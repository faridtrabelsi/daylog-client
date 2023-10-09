import styled from 'styled-components';

const Content = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.elevation_1};
  max-width: 700px;
  width: 90%;
  margin: auto;
  padding: 1.25rem;
`;

export default Content;
