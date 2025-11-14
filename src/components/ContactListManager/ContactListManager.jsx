import React, { useState } from "react";
import "./ContactListManager.css";

function ContactListManager() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    job_title: "",
    birthday: "",
    notes: "",
    website: "",
    favorite: false,
  });

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
  return (
    <div>
      <h2> Contact List </h2>

      <form onSubmit={addContact}>
        <input
          name="name"
          placeholder="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="job_title"
          placeholder="Job Title"
          value={form.job_title}
          onChange={handleChange}
        />
        <input
          name="birthday"
          placeholder="date"
          value={form.birthday}
          onChange={handleChange}
        />
        <input
          name="website"
          placeholder="website"
          value={form.website}
          onChange={handleChange}
        />
        <input
          name="notes"
          placeholder="Notes"
          value={form.notes}
          onChange={handleChange}
        />
        <input
          name="favorite"
          placeholder="checkbox"
          checked={form.favorite}
          onChange={handleChange}
        />

        <button>Add me</button>
      </form>
    </div>
  );
}

export default ContactListManager;
