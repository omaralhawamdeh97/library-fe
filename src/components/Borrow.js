import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { borrowBook } from "../store/actions";
import { Link } from "react-router-dom";

const Borrow = () => {
  const books = useSelector((state) => state.books);
  const availableBooks = books.filter((book) => book.available === true);
  const dispatch = useDispatch();
  const history = useHistory();
  const { memberSlug } = useParams();

  const handleClick = (bookId) => {
    dispatch(borrowBook(bookId, memberSlug));
    alert("Book successfully borrowed");
    history.push(`/books/borrow/${memberSlug}`);
    // console.log(member);
  };

  return (
    <div>
      <h1>Available Books</h1>
      <h4>
        {availableBooks.length === 0 ? (
          <p>Empty</p>
        ) : (
          availableBooks.map((book) => (
            <div>
              <p>{book.title}</p>
              <button onClick={() => handleClick(book.id)}>Borrow</button>
            </div>
          ))
        )}
      </h4>
      <Link to="/">back to home</Link>
    </div>
  );
};
export default Borrow;
