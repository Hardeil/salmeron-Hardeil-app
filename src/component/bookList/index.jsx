import React, { useEffect, useState } from "react";
import Book from "../bookData";
import SearchFilter from "../searchFilter";

function BookList() {
  const [books, setBooks] = useState(Book);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Book);
  const dueDate = Math.floor(Math.random() * 30) + 1;
  const ontoggle = (index) => {
    setBooks((prevBooks) =>
      prevBooks.map((book, i) =>
        i === index
          ? {
              ...book,
              dueDate: book.status === "Checkout" ? "none" : dueDate,
              status: book.status === "Available" ? "Checkout" : "Available",
            }
          : book
      )
    );
  };

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredBooks(books);
    } else {
      const filterBooks = books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.dueDate
            .toString()
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
      setFilteredBooks(filterBooks);
    }
  }, [searchQuery, books]);

  const searchBook = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} searchBook={searchBook} />
      <ul>
        <li>No.</li>
        <li>Title</li>
        <li>Author</li>
        <li>Due Date</li>
        <li>Status</li>
        <li>Action</li>
      </ul>
      {filteredBooks.map((book, index) => (
        <ul key={index}>
          <li>{index + 1}</li>
          <li>{book.title}</li>
          <li>{book.author}</li>
          <li>{book.dueDate}</li>
          <li>{book.status}</li>
          <li>
            <button className="btn" onClick={() => ontoggle(index)}>
              Toggle Status
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default BookList;
