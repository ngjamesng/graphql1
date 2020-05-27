import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { getBookQuery } from "../queries/queries";


function BookDetails({ bookId: id }) {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id }
  });

  const displayBook = () => (
    !loading && data.book
      ?
      <div>
        <h2> {data.book.name}</h2>
        <p> {data.book.genre}</p>
        <p> other books by {data.book.author.name}</p>
        <ul className="other-books">
          {data.book.author.books.map(book => (<li key={book.id}> {book.name}</li>))}
        </ul>
      </div>
      : <div> No book selected... </div>
  )
  return (
    <div id="book-details">
      {displayBook()}
    </div>
  )
}

export default BookDetails;