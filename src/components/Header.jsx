// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  /* Ensure full width */
  box-sizing: border-box;  /* Include padding in width */
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => (
  <HeaderContainer>
    <h1>My Portfolio</h1>
    <Nav>
      
      <NavLink to="/">Projects</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  </HeaderContainer>
);

export default Header;
