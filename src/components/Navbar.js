import StyledNav, {
  DesktopMenu,
  HamburgerButton,
  MobileMenu,
  LogButton,
} from './styled/Navbar.styled';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ setModal }) => {
  const [mobNav, setMobNav] = useState(false);

  return (
    <StyledNav>
      <MobileMenu mobNav={mobNav}>
        <Links mobNav={mobNav} setMobNav={setMobNav} setModal={setModal} />
      </MobileMenu>

      <DesktopMenu>
        <Links mobNav={null} setModal={setModal} />
      </DesktopMenu>
    </StyledNav>
  );
};

export default Navbar;

const Links = ({ mobNav, setMobNav, setModal }) => (
  <>
    <h2>
      <Link
        to="/"
        onClick={() => {
          if (mobNav) setMobNav(false);
        }}
      >
        Daylog
      </Link>
    </h2>

    <ul>
      <li>
        <Link
          to="/"
          onClick={() => {
            if (mobNav) setMobNav(false);
          }}
        >
          <i className="fa-solid fa-house" />
          Home
        </Link>
      </li>

      <li>
        <Link
          to="/my_posts"
          onClick={() => {
            if (mobNav) setMobNav(false);
          }}
        >
          <i className="fa-regular fa-address-book" />
          My Posts
        </Link>
      </li>

      <li>
        <LogButton
          onClick={() => {
            if (mobNav) setMobNav(false);
            setModal(true);
          }}
        >
          Log
        </LogButton>
      </li>
    </ul>

    <HamburgerButton>
      <div
        className={`hamburger${mobNav ? ' change' : ''}`}
        onClick={() => {
          setMobNav((prevState) => !prevState);
        }}
      >
        <span className="line line--top"></span>
        <span className="line line--middle"></span>
        <span className="line line--bottom"></span>
      </div>
    </HamburgerButton>
  </>
);
