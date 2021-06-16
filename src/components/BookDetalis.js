import { useSelector } from "react-redux";
import { Link, Redirect, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useSelector((state) => state.books);
  const members = useSelector((state) => state.members);
  const { bookSlug } = useParams();

  const book = books.find((m) => m.slug === bookSlug);
  if (!book) return <Redirect to="/" />;
  const borrowedMembers = book.borrowedBy;
  const memberName = borrowedMembers.map((member) =>
    members.find((m) => m.id === member)
  );

  return (
    <div>
      <Link to="./BookList">Back to Books</Link>
      <p>Title : {book.title}</p>
      <p>
        Genre :
        {book.genre.map((genre) => (
          <text>{genre},</text>
        ))}
      </p>
      <p>Author : {book.author}</p>
      <p>Availablity : {book.available ? "Available" : "Not Available"}</p>
      <p>
        Borrowed By :
        {memberName.map((member) => (
          <text>{member.firstName},</text>
        ))}
      </p>
    </div>
  );
};

export default BookDetails;
