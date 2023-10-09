import StyledSignUp, { SignUpButton } from './styled/SignUp.styled';

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const svURL = `${process.env.REACT_APP_SERVER_URL}/auth/google`;
    window.open(svURL, '_self');
  };

  return (
    <StyledSignUp>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Daylog</h1>
          <sub>A public journal for the stories you want to tell.</sub>
        </div>

        <SignUpButton>
          Sign in with Google <i className="fa-brands fa-google" />
        </SignUpButton>
      </form>
    </StyledSignUp>
  );
};

export default SignUp;
