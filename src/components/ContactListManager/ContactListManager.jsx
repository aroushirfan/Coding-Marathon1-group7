import React, { useState } from 'react';

import "./ContactListManager.css";


function ContactListManager() {

  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ Name: "", Job_title: "", Birthday: "", Notes: "", Website: "", Favorite: false, })



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const addContact = (e) => {
    e.preventDefault();
    setContacts([...contacts, { id: Date.now(), ...form }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  return (
    <div>
      <h2> Contact List  </h2>

      <form onSubmit={addContact}>

        <input
          name="Name"
          placeholder="Name"
          value={form.Name}
          onChange={handleChange}
        />
        <input
          name="Job_title"
          placeholder="Job Title"
          value={form.Job_title}
          onChange={handleChange}
        />
        <input
          name="Birthday"
          placeholder="Date"
          type="date"
          value={form.Birthday}
          onChange={handleChange}
        />
        <input
          name="Website"
          placeholder="Website"
          value={form.Website}
          onChange={handleChange}
        />
        <input
          name="Notes"
          placeholder="Notes"
          value={form.Notes}
          onChange={handleChange}
        />
        <input
          name="Favorite"
          type="checkbox"
          checked={form.Favorite}
          onChange={handleChange}
        />

        <button>Add me</button>
      </form>
      <div className="contact-output">
        <h3>Saved Contacts</h3>

        {contacts.length === 0 && <p>No contacts yet.</p>}


        {contacts.map((c) => (
          <div key={c.id} className="contact-card">
            <p><strong>Name:</strong> {c.Name}</p>
            <p><strong>Job Title:</strong> {c.Job_title}</p>
            <p><strong>Birthday:</strong> {c.Birthday}</p>
            <p><strong>Notes:</strong> {c.Notes}</p>
            <p><strong>Website:</strong> {c.Website}</p>
            <p><strong>Favorite:</strong> {c.Favorite ? "Yes" : "No"}</p>


            <button
              className="delete-btn"
              onClick={() => deleteContact(c.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>


    </div>
  )

}

export default ContactListManager;