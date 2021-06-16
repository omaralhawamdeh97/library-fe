import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MemberDetail from "./MemberDetail";
const MemberCard = (props) => {
  const books = useSelector((state) => state.books);

  const borrowdBooks = props.member.currentlyBorrowedBooks;

  const booksTitle = borrowdBooks.map((book) =>
    books.find((e) => e.id === book)
  );
  const memberSlug = props.member.slug;
  return (
    <div style={{ borderStyle: "solid" }}>
      <p>Name : {`${props.member.firstName} ${props.member.lastName}`}</p>

      <Link to={`/MemberDetail/${memberSlug}`}>
        <button>Details</button>
      </Link>

      {props.member.membership === "silver" && borrowdBooks.length >= 2 ? (
        <p>You cant borrow!</p>
      ) : props.member.membership === "gold" && borrowdBooks.length >= 3 ? (
        <p>You cant borrow!</p>
      ) : props.member.membership === "platinum" && borrowdBooks.length >= 5 ? (
        <p>You cant borrow!</p>
      ) : (
        <Link to={`/books/borrow/${memberSlug}`}>
          <button>Borrow</button>
        </Link>
      )}
    </div>
  );
};

export default MemberCard;
