/**
 * Book Collection Manager Component
 * This is a collection where users can add, view, update, and delete and
 * also reorder books in a list.
 * Each book is rendered with the <Book /> component which receives the book object, the index,
 * and some handler functions lie onDelete etc.
 */



import React, { useState } from "react";
import "./BookCollectionManager.css"
import Book from "./Book";

const BookCollectionManager = () => {
  const [books, setBooks] = useState([]);
  const [editBook, setEditedBook] = useState("");
  const [newBook, setNewBook] = useState({ title: "", author: "", genre: "", language: "", edition: "", pages: "", rating: "" });
  const { title, author, genre, language, edition, pages, rating } = newBook; //destrucutring

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  }

  // Adds a new book to the list and also checks for duplicate books before adding.
  // It also deals with the updating logic.
  const addBook = () => {
    let isDuplicate = false;
    for (let i=0; i<books.length; i++){
    if (
      i !== editBook && books[i].title.toLowerCase() === newBook.title.toLowerCase() && books[i].author.toLowerCase() === newBook.author.toLowerCase()
    ) {
      isDuplicate= true;
      break;
    }
  }
  if (isDuplicate) {
    alert("The book already exists in the list.")
    return;
  }
    if (title.trim() !== "" && author.trim() !== "" && genre.trim() !== "" && language.trim() !== "" && edition.trim() !== "" && pages.trim() !== "" && rating.trim() !== "") {
      if (editBook !== "") {
        const updatedBooks = [...books];
        updatedBooks[editBook] = newBook;
        setBooks(updatedBooks);
        setEditedBook("");
      }
      else {
        setBooks((b) => [...b, newBook]);
      }
      setNewBook({ title: "", author: "", genre: "", language: "", edition: "", pages: "", rating: "" })
    }
  }
  const updateBook = (index) => {
    setNewBook(books[index]);
    setEditedBook(index);
  };

  // Delete a book from the list
  function deleteBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }
  const moveBookUp = (index) => {
    if (index > 0) {
      const updatedBooks = [...books];
      [updatedBooks[index], updatedBooks[index - 1]] =
        [updatedBooks[index - 1], updatedBooks[index]];
      setBooks(updatedBooks);
    }
  }
  const moveBookDown = (index) => {
    if (index < books.length - 1) {
      const updatedBooks = [...books];
      [updatedBooks[index], updatedBooks[index + 1]] =
        [updatedBooks[index + 1], updatedBooks[index]];
      setBooks(updatedBooks);
    }
  }

  return (
    <div className="book-collection">
      <h1>Book Collection Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Enter book title..."
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter author name..."
          name="author"
          value={author}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter genre..."
          name="genre"
          value={genre}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter language"
          name="language"
          value={language}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter edition"
          name="edition"
          value={edition}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Enter page numbers (positive page count)"
          name="pages"
          value={pages}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Enter rating 0-5"
          name="rating"
          value={rating}
          onChange={handleInputChange}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      <ol>
        {books.map((book, index) => (
          <Book 
          key= {index} book= {book} index={index} onDelete={deleteBook} 
          onUpdate={updateBook} onMoveUp={moveBookUp} onMoveDown={moveBookDown}
          />
        ))}
      </ol>
    </div>
  );
}

export default BookCollectionManager;