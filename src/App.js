import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";

const App = () => {

  const [contacts, setContacts] = useState(data); // taking data and storing it in state
  const [addFormData, setAddFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    program: "",
    tags: "",
    notes: ""
  })

  // function to handle form input
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name"); // will get name attribute of whatever input user has typed
    const fieldValue = event.target.value; // actual value

    const newFormData = { ...addFormData}; // copy of existing form data without mutating state
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
      program: addFormData.program,
      tags: addFormData.tags,
      notes: addFormData.notes
    }

    const newContacts = [...contacts, newContact]
    setContacts(newContacts);
  }

  return <div className="app-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Program</th>
          <th>Tags</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (<tr>
          <td>{contact.name}</td>
          <td>{contact.phoneNumber}</td>
          <td>{contact.email}</td>
          <td>{contact.program}</td>
          <td>{contact.tags}</td>
          <td>{contact.notes}</td>
        </tr>
        ))}

      </tbody>
    </table>
    <h2>Add a Contact</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input type="text"
        name="name"
        required="required"
        placeholder="Enter a name"
        onChange={handleAddFormChange}
      />
      <input type="text"
        name="phoneNumber"
        required="required"
        placeholder="Enter a phone number"
        onChange={handleAddFormChange}
      />
      <input type="text"
        name="email"
        required="required"
        placeholder="Enter an email"
        onChange={handleAddFormChange}
      />
        <input type="text"
        name="program"
        required="required"
        placeholder="Enter a program"
        onChange={handleAddFormChange}
      />
        <input type="text"
        name="tags"
        required="required"
        placeholder="Enter any tags"
        onChange={handleAddFormChange}
      />
        <input type="text"
        name="notes"
        required="required"
        placeholder="Enter notes"
        onChange={handleAddFormChange}
      />
      <button type="submit">Add</button>
    </form>
  </div>

};

export default App;
