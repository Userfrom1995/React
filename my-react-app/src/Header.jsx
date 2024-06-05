import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5em;
`;

const Nav = styled.nav`
  margin-top: 10px;
`;

const NavLink = styled.a`
  margin: 0 15px;
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  &:hover {
    text-decoration: underline;
  }
`;





function Header() {
    return (
        <HeaderContainer>
          <Title>My Header</Title>
          <Nav>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>
        </HeaderContainer>
      );
}

export default Header;