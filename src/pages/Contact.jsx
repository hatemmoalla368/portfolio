// src/pages/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const ContactInfo = styled.div`
  margin: 20px 0;
  font-size: 18px;
  color: #333;
  
  a {
    color: #007bff;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Contact = () => (
  <ContactContainer>
    <h2>Contact Me</h2>
    <ContactInfo>
      <p>
        <strong>Telephone:</strong> +216 24021594
      </p>
      <p>
        <strong>Email:</strong> <a href="mailto:hatemmoalla368@gmail.com">hatemmoalla368@gmail.com</a>
      </p>
    </ContactInfo>
  </ContactContainer>
);

export default Contact;
