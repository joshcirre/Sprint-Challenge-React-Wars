import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.div`
  max-width: 15rem;
  width: 19%;
  border-radius: 5px;
  margin: 1rem;
`;
const Title = styled.div`
  border-bottom: 1px solid black;
  font-family: 'Staatliches', cursive;
  font-size: 1.5rem;
  background-color: white;
  padding: 1rem;
  border-radius: 5px 5px 0 0;
`;

const Body = styled.div`
  padding: 1rem;
  background-color: rgb(255, 255, 255, 0.7);
  border-radius: 0 0 5px 5px;
`;

export default function({ character, children }) {
  return (
    <CharacterCard>
      <Title>{character.name}</Title>
      <Body>
        Birth Year: {character.birth_year}
        <br></br>
        Height: {character.height}
        {children}
      </Body>
    </CharacterCard>
  );
}
