import { Link, Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
//components

//Styling
// import {AddBook} from "../styles"

const MemberDetail = () => {
  const members = useSelector((state) => state.members);
  const books = useSelector((state) => state.books);

  const { memberSlug } = useParams();
  // console.log(memberSlug, "slugg");

  const member = members.find((m) => m.slug === memberSlug);
  // console.log(member, "mmm");

  if (!member) return <Redirect to="/" />;
  const borrowdBooks = member.currentlyBorrowedBooks;
  const booksTitle = borrowdBooks.map((book) =>
    books.find((e) => e.id === book)
  );

  return (
    <div>
      <Link to="./MemberList">Back to Members</Link>
      <h1>{`${member.firstName} ${member.lastName}`}</h1>
      <p>
        Borrowed Books :
        {booksTitle.map((book) => (
          <text>{book.title},</text>
        ))}
      </p>
      <p>Membership : {member.membership}</p>
    </div>
  );
};
export default MemberDetail;
