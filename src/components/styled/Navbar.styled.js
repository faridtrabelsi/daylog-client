import styled from 'styled-components';

const Navbar = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const HamburgerButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 1.2rem;
  padding-top: 0.6rem;

  .hamburger {
    position: relative;
    padding: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .line {
      position: absolute;
      width: 14px;
      height: 1px;
      background-color: ${({ theme }) => theme.icon};
      border-radius: 2px;
      transition: transform 0.25s, opacity 0.35s;
    }

    .line--top {
      transform: translateY(-5px);
    }

    .line--bottom {
      transform: translateY(5px);
    }

    &.change .line--top {
      transform: rotate(45deg);
    }

    &.change .line--middle {
      transform: translateX(16px);
      opacity: 0;
    }

    &.change .line--bottom {
      transform: rotate(-45deg);
    }
  }

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const MobileMenu = styled.nav`
  position: relative;
  background-color: ${({ theme }) => theme.elevation_1};
  //overflow: hidden;
  padding: 0.6rem 1.2rem;
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.border_1};

  & > h2 > a {
    text-decoration: none;
    color: #ffffff;
    font-family: 'Pacifico', cursive;
    font-size: 1.25rem;
  }

  & > ul {
    display: ${({ mobNav }) => (mobNav ? 'block' : 'none')};

    li {
      list-style: none;

      &:first-child {
        margin-top: 1rem;
      }
      &:last-child {
        text-align: center;
        margin-block: 1rem;
      }

      a {
        display: block;
        padding: 1rem 0;
        text-decoration: none;
        color: inherit;
        font-weight: 500;
        border-bottom: 1px solid;
        border-color: ${({ theme }) => theme.border_2};

        i {
          margin-right: 0.5rem;
          color: ${({ theme }) => theme.icon};
        }

        &:hover {
          background-color: ${({ theme }) => theme.hoverBgColor};
        }
      }
    }
  }

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const DesktopMenu = styled.nav`
  background-color: ${({ theme }) => theme.elevation_1};
  display: flex;
  align-items: center;
  padding: 0rem 1.2rem;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.border_1};

  & > h2 > a {
    text-decoration: none;
    color: #ffffff;
    font-family: 'Pacifico', cursive;
  }

  & > ul {
    margin-left: auto;

    li {
      display: inline-block;
      list-style: none;
      &:last-child {
        margin-left: 0.5rem;
      }

      a {
        display: block;
        padding: 1.4rem;
        text-decoration: none;
        color: inherit;
        font-weight: 600;

        i {
          //display: none;
          margin-right: 0.5rem;
          color: ${({ theme }) => theme.icon};
        }

        &:hover {
          background-color: ${({ theme }) => theme.hoverBgColor};
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const LogButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: #ffffff;
  border: 0;
  border-radius: 1.5rem;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  width: 9.25rem;
  height: 2.75rem;
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

export default Navbar;
