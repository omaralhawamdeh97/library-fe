import { useSelector } from "react-redux";
import { DetailButton } from "../styles";
import BookDetails from "./BookDetalis";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  const members = useSelector((state) => state.members);

  const bookSlug = props.book.slug;
  return (
    <div style={{ borderStyle: "solid" }}>
      <p>Title : {props.book.title}</p>
      <p>
        Genre :
        {props.book.genre.map((genre) => (
          <text>{genre},</text>
        ))}
      </p>
      <Link to={`/BookDetail/${bookSlug}`}>
        <DetailButton>Details</DetailButton>
      </Link>
    </div>
  );
};

export default BookCard;
