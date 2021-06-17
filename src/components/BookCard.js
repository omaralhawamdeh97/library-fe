import { useDispatch } from "react-redux";
import {
  DetailButton,
  AvailableButton,
  AvailableText,
  StatusRow,
} from "../styles";
import { Link } from "react-router-dom";
import { returnBook } from "../store/actions";

const BookCard = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(returnBook(props.book.id));
  };

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
      <StatusRow>
        Status :
        <AvailableText available={props.book.available}>
          {props.book.available ? "Available" : "Not Available"}
        </AvailableText>
      </StatusRow>

      <AvailableButton available={props.book.available} onClick={handleClick}>
        {props.book.available ? "Available" : "Not Available"}
      </AvailableButton>

      <Link to={`/BookDetail/${bookSlug}`}>
        <DetailButton>Details</DetailButton>
      </Link>
    </div>
  );
};

export default BookCard;
