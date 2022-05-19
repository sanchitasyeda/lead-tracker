import React, { useEffect, useState } from "react";
import data from "./mock-data.json";

const App = () => {

  const [contacts, setContacts] = useState(data); // taking data and storing it in state

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
    <form>
      <input type="text"
        name="name"
        required="required"
        placeholder="Enter a name"
      />
      <input type="text"
        name="phoneNumber"
        required="required"
        placeholder="Enter a phone number"
      />
      <input type="text"
        name="email"
        required="required"
        placeholder="Enter an email"
      />
    </form>
  </div>

};

export default App;
