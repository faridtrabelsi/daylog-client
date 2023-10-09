import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styled/GlobalStyles';
import StyledApp from './components/styled/App.styled';
import { darkTheme } from './Themes';
import { useContext } from 'react';
import { UserContext } from './components/UserContext';
import SignedInApp from './components/SignedInApp';
import SignUp from './components/SignUp';

function App() {
  const user = useContext(UserContext);

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <StyledApp>
          {user?.loggedIn === null ? (
            ''
          ) : user?.loggedIn === true ? (
            <SignedInApp />
          ) : (
            <SignUp />
          )}
        </StyledApp>
      </ThemeProvider>
    </Router>
  );
}

export default App;
