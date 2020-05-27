import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { getBookQuery } from "../queries/queries";


function BookDetails({ bookId }) {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: bookId }
  });

  return (
    <div id="book-details">
      <p>
        book details here
      </p>
    </div>
  )
}

export default BookDetails;