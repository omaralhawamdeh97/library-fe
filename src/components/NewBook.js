//React
import { Link } from "react-router-dom";
import { useState } from "react";
//Redux
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { createBook } from "../store/actions";

//Styling
import { BodyButtons, BodyLinks, XX } from "../styles";

const NewBook = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const bookSlug = useParams().bookSlug;

  const books = useSelector((state) => state.books);
  const foundBook = books.find((book) => book.slug === bookSlug);
  const [book, setBook] = useState(
    foundBook ?? { title: "", author: "", genre: [] }
  );
  const [genre, setGenre] = useState("");

  const handleChange = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  const handleGenreChange = (event) => {
    setGenre({
      [event.target.name]: book.genre.includes(genre)
        ? alert("genre already exist")
        : book.genre.push(genre),
    });
    alert("genre successfully added");
    history.push("/newbook");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createBook(book));
    alert("Successfully added !");
    history.push("/");
  };
  console.log(book);
  return (
    <XX>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Title:
              <input
                placeholder="enter book title"
                type="text"
                name="title"
                onChange={handleChange}
                value={book.title}
              />
            </label>
            <label>
              Author:
              <input
                placeholder="enter book author"
                type="text"
                name="author"
                onChange={handleChange}
                value={book.author}
              />
            </label>
            <label>
              Genre:
              <input
                placeholder="enter book genre"
                type="text"
                name="genre"
                onChange={(event) => setGenre(event.target.value)}
              />
            </label>
            <button type="button" onClick={handleGenreChange}>
              add genre
            </button>
          </div>
          <div>
            <p>
              <button>Add Book</button>
            </p>
          </div>
        </form>

        <Link to="/BooksList">
          <BodyButtons>
            <BodyLinks>Back to list</BodyLinks>
          </BodyButtons>
        </Link>
      </div>
    </XX>
  );
};
export default NewBook;
