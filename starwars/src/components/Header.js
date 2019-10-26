import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

export default function(props) {
  return (
    <Header>
      <h1>React Wars</h1>
      {props.children}
    </Header>
  );
}
