import React from 'react';
import Logo from '../../assets/img/Logo.png';
import FooterBase, { ImageFooter } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <ImageFooter src={Logo} alt="Logo Foodflix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
