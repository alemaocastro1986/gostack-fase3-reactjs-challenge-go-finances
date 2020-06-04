import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  activePage?: string;
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  activePage = '',
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link className={activePage === 'Dashboard' ? 'active' : ''} to="/">
          Listagem
        </Link>
        <Link className={activePage === 'Import' ? 'active' : ''} to="/import">
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
