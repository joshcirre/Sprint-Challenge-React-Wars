import axios from 'axios';

export const get = axios.create({
  responseType: 'json',
  method: 'get'
});

// Implement our API pull.
// We are looking for pages, setPages, currentPage, and setCharacters
