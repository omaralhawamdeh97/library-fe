import { useState } from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

const BooksList = () => {
  const books = useSelector((state) => state.books);
  const [query, setQuery] = useState("");

  const booksList = books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.genre.find((g) => g.toLowerCase().includes(query.toLowerCase()))
    )
    .map((book) => <BookCard book={book} key={book.id} />);

  return (
    <div>
      <h1>Books List : </h1>
      <input
        type="text"
        placeholder="Search for a book ..."
        onChange={(event) => setQuery(event.target.value)}
      />
      <Link to="/NewBook">
        <button>Add a Book</button>
      </Link>
      <Link to="/">Home</Link>
      <div>{booksList}</div>
    </div>
  );
};

export default BooksList;
