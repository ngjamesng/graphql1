import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { getBookQuery } from "../queries/queries";


function BookDetails({ bookId }) {
  const { loading, error, data } = useQuery(getBookQuery,
    {
      variables: { id:bookId }
    }
  );
  // console.log("bookId", bookId)
  !loading && console.log("data", data)
  return (
    <div id="book-details">
      <p>
        book details here
      </p>
    </div>
  )
}

export default BookDetails;