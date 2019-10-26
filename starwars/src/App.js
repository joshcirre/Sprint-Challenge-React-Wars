import React, { useState, useEffect } from 'react';
import { get } from './utils/getCharacters';
import Header from './components/Header';
import CharacterContainer from './components/CharacterContainer';
import PageButton from './components/PageButton';

const App = () => {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    let exists = false;
    pages.forEach(page => {
      currentPage === page && (exists = true);
    });
    if (!exists) {
      get(`https://swapi.co/api/people/?page=${currentPage}`)
        .then(res => {
          setCharacters(list => [
            ...list,
            {
              next: res.data.next,
              previous: res.data.previous,
              results: res.data.results
            }
          ]);
          setPages(pages => [...pages, currentPage]);
        })
        .catch(err => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  console.log(characters);

  return (
    <div className='App'>
      <Header>
        <h2>Current Page: {currentPage}</h2>
        <PageButton
          direction='previous'
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <PageButton
          direction='next'
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Header>
      <CharacterContainer characters={characters[currentPage - 1]} />
    </div>
  );
};

export default App;
