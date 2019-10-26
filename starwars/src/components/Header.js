import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  color: yellow;
  font-family: 'Poller One', cursive;
  background-color: black;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export default function(props) {
  return (
    <Header>
      <h1>React Wars</h1>
      {props.children}
    </Header>
  );
}