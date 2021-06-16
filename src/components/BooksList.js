import { useSelector } from "react-redux";
import BookCard from "./BookCard";

const BooksList = () => {
  const books = useSelector((state) => state.books);

  const booksList = books.map((book) => <BookCard book={book} key={book.id} />);

  return (
    <div>
      <h1>Books List : </h1>

      <div>{booksList}</div>
    </div>
  );
};

export default BooksList;
