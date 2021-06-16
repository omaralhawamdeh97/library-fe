import { useSelector } from "react-redux";

const MemberCard = (props) => {
  const books = useSelector((state) => state.books);
  const borrowdBooks = props.member.currentlyBorrowedBooks;
  const booksTitle = borrowdBooks.map((book) =>
    books.find((e) => e.id === book)
  );
  return (
    <div style={{ borderStyle: "solid" }}>
      <p>Name : {`${props.member.firstName} ${props.member.lastName}`}</p>
      <p>
        Borrowed Books :
        {booksTitle.map((book) => (
          <text>{book.title},</text>
        ))}
      </p>
      <p>Membership : {props.member.membership}</p>
    </div>
  );
};

export default MemberCard;
