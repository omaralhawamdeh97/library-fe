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
      {/* <p>
        Borrowed Books :
        {booksTitle.map((book) => (
          <text>{book.title},</text>
        ))}
      </p>
      <p>Membership : {props.member.membership}</p> */}
      <Link to={`/MemberDetail/${memberSlug}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default MemberCard;
