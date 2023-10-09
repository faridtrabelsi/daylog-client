import { useNavigate } from 'react-router-dom';
import StyledNotFound from './styled/NotFound.styled';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <StyledNotFound>
      <h1>404</h1>
      <p>Page Not found</p>
      <button onClick={() => navigate('/', { replace: true })}>Go Home</button>
    </StyledNotFound>
  );
};

export default NotFound;
