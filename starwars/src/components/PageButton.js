import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #c4221a;
    color: #FFF;
    font-family: 'Staatliches', sans-serif;
    font-size: 1.5rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
    transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    &:hover {
        background: #b0403a;
    }
    &:active {
        transform: scale(0.95);
    }
`;

export default function({ direction, currentPage, setCurrentPage }) {
  const handleClick = () => {
    if (direction === 'previous') setCurrentPage(page => page - 1);
    if (direction === 'next') setCurrentPage(page => page + 1);
  };

  const isPreviousDisabled = direction === 'previous' && currentPage <= 1;
  const isNextDisabled = direction === 'next' && currentPage >= 9;
  return (
    <Button
      onClick={handleClick}
      disabled={isNextDisabled || isPreviousDisabled}
    >
      {direction}
    </Button>
  );
}
