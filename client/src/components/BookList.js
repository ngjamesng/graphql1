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

const displayBooks = (loading, data) => (
  loading
    ? <div>loading books...</div>
    : data.books.map(book => (<li key={book.id}>{book.name}</li>))
)

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  return (
    <div>
      <ul id="book-list">
        {displayBooks(loading, data)}
      </ul>
    </div>
  );
}

export default BookList;
