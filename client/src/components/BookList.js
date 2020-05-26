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
  const {loading, error, data } = useQuery(getBooksQuery);
  return (
    <div>
      <ul id="book-list">
        <li>Book 1 name</li>
      </ul>
    </div>
  );
}

export default BookList;
