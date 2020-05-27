import React, { useState } from 'react';
import { useQuery, useMutation } from "@apollo/react-hooks";
import { getAuthorsQuery, addBookMutation, getBooksQuery } from "../queries/queries";

const INITIAL_STATE = {
  name: "",
  genre: "",
  authorId: ""
}
function AddBook() {
  const { loading, data } = useQuery(getAuthorsQuery);
  const [formData, setFormData] = useState(INITIAL_STATE);

  const [addBook] = useMutation(addBookMutation);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }))
  }

  const submitForm = (evt) => {
    evt.preventDefault();
    addBook({
      variables: formData,
      refetchQueries: [{ query: getBooksQuery }]
    });
  }
  const displayAUthors = () => (
    loading
      ? <option disabled>loading authors... </option>
      : data.authors.map(author => (<option key={author.id} value={author.id}>{author.name}</option>))
  )
  return (
    <form onSubmit={(e) => submitForm(e)} onChange={handleChange}>
      <div className="field">
        <label>
          Book Name:
        </label>
        <input type="text" name="name" />
      </div>
      <div className="field">
        <label>
          Genre:
        </label>
        <input type="text" name="genre" />
      </div>
      <div className="field">
        <label>
          Author:
        </label>
        <select defaultValue="select author" name="authorId" required>
          <option disabled> select author </option>
          {displayAUthors()}
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default AddBook;
