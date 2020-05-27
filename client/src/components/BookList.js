import React, { useState } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList() {
  const { loading, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState(null);
  const displayBooks = () => (
    loading
      ? <div>loading books...</div>
      : data.books.map(book => (
        <li key={book.id} onClick={(e) => { setSelected(book.id) }}>
          {book.name}
        </li>
      ))
  )
  return (
    <div>
      <ul id="book-list">
        {displayBooks(loading, data)}
      </ul>
      <BookDetails bookId={selected}/>
    </div>
  );
}

export default BookList;
