import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const getBooksQuery = gql`
  {
    books {
      name, 
      id
    }   
  }
`


function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);

  const displayBooks = () => (
    loading
      ? <div>loading books...</div>
      : data.books.map(book => (<li key={book.id}>{book.name}</li>))
  )
  return (
    <div>
      <ul id="book-list">
        {displayBooks(loading, data)}
      </ul>
    </div>
  );
}

export default BookList;
