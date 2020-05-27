import React, { useState } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { getAuthorsQuery } from "../queries/queries";


function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [formData, setFormData] = useState({
    name: "",
    genre: "",
    authorId: ""
  })

  const displayAUthors = () => (
    loading
      ? <option disabled>loading authors... </option>
      : data.authors.map(author => (<option key={author.id} value={author.id}>{author.name}</option>))
  )

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }))
  }

  const submitForm = (evt) => {
    evt.preventDefault();
    console.log("SUBMITTED,", evt)
    console.log(formData);
  }
  return (
    <form onSubmit={(e) => submitForm(e)} onChange={handleChange}>
      <div className="field">
        <label>
          Book Name:
        </label>
        <input type="text" name="name"/>
      </div>
      <div className="field">
        <label>
          Genre:
        </label>
        <input type="text" name="genre"/>
      </div>
      <div className="field">
        <label>
          Author:
        </label>
        <select name="authorId">
          <option> select author </option>
          {displayAUthors()}
        </select>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default AddBook;
