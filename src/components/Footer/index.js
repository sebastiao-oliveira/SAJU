import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const FooterWrapper = styled.footer`
position: fixed;
bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;



const Footer = () => (
  <FooterWrapper>
    <p>Copyright 2023  </p>
    <nav>
      <ul>
        <li>
          <a href="https://www.facebook.com/sajubahia/s">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sajubahia/">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </nav>
  </FooterWrapper>
);
  
export default Footer;