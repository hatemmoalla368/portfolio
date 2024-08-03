// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 20px;
  text-align: center;
  width: 100%;  /* Ensure full width */
  box-sizing: border-box;  /* Include padding in width */
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    <p>
      <a href="https://github.com/hatemmoalla368" target="_blank" rel="noopener noreferrer">GitHub</a> | 
      <a href="https://www.linkedin.com/in/hatem-moalla-b99a78199/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </p>
  </FooterContainer>
);

export default Footer;
