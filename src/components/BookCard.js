import { useSelector } from "react-redux";

const BookCard = (props) => {
  const members = useSelector((state) => state.members);

  const borrowedMembers = props.book.borrowedBy;
  const member = borrowedMembers.map((member) =>
    members.find((m) => m.id === member)
  );

  return (
    <div style={{ borderStyle: "solid" }}>
      <p>Author : {props.book.author}</p>
      <p>Title : {props.book.title}</p>
      <p>
        Genre :
        {props.book.genre.map((genre) => (
          <text>{genre},</text>
        ))}
      </p>
      <p>
        Availablity : {props.book.available ? "Available" : "Not Available"}
      </p>
      <p>
        Borrowed By :
        {member.map((member) => (
          <text>{` ${member.firstName} ${member.lastName},`}</text>
        ))}
      </p>
    </div>
  );
};

export default BookCard;
