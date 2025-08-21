import React from 'react';
import styled from 'styled-components';

// aici s-a folosit styled components ca sa cream titlu cu un h1
// observam ca putem pune genu asta de cod si direct aici
// dar e mult mai inestetic si aglomereaza fisierul

// TODO: muta title intr-un fisier separat doar de style
const Title = styled.h1`
  font-size: 2rem;
  color: #8B4513;
  text-align: center;
`;

function Header() {
  return <Title>Coffee House ☕</Title>;
}

export default Header;