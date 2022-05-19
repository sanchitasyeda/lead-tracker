import React from "react";

const App = () => {
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
        <tr>
          <td>Joey Boey</td>
          <td>123-456-7898</td>
          <td>joeyboey@joey.ca</td>
          <td>HCA</td>
          <td>TAG</td>
          <td>Note</td>
        </tr>
      </tbody>
    </table>
  </div>

};

export default App;
