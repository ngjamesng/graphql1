import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const getAuthorsQuery = gql`
  {
    authors {
      name, 
      id
    }   
  }
`

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  const displayAUthors = () => (
    loading
      ? <option disabled>loading authors...</option>
      : data.authors.map(author => (<option key={author.id} value={author.id}>{author.name}</option>))
  )
  return (
    <form>
      <div className="field">
        <label>
          Book Name:
        </label>
        <input type="text" />
      </div>
      <div className="field">
        <label>
          Genre:
        </label>
        <input type="text" />
      </div>
      <div className="field">
        <label>
          Author:
        </label>
        <select>
          <option> select author </option>
          {displayAUthors()}
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default AddBook;
