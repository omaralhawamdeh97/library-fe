import members from "../members";
import books from "../books";
import slugify from "slugify";
import {
  BORROW_BOOK,
  CREATE_BOOK,
  CREATE_MEMBER,
  RETURN_BOOK,
} from "./actions";

const initialState = {
  members: members,
  books: books,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      const { newBook } = action.payload;
      newBook.id = +state.books[state.books.length - 1].id + 1;
      newBook.slug = slugify(action.payload.newBook.title);
      return {
        ...state,
        books: [...state.books, newBook],
      };

    case CREATE_MEMBER:
      const { newMember } = action.payload;
      const fullname = `${action.payload.newMember.firstName}-${action.payload.newMember.lastName}`;
      newMember.id = +state.members[state.members.length - 1].id + 1;
      newMember.slug = slugify(fullname.toLowerCase());
      newMember.currentlyBorrowedBooks = [];
      return {
        ...state,
        members: [...state.members, newMember],
      };

    case BORROW_BOOK:
      const member = members.find(
        (member) => member.slug === action.payload.memberSlug
      );

      const borrowedBook = books.find(
        (book) => book.id === action.payload.bookId
      );
      if (member.currentlyBorrowedBooks.includes(action.payload.bookId))
        alert("Book is already borrowed");
      else if (
        member.membership === "silver" &&
        member.currentlyBorrowedBooks.length >= 2
      ) {
        alert("Upgdare your membership please");
      } else if (
        member.membership === "gold" &&
        member.currentlyBorrowedBooks.length >= 3
      ) {
        alert("Upgdare your membership please");
      } else if (
        member.membership === "platinum" &&
        member.currentlyBorrowedBooks.length >= 5
      ) {
        alert("Upgdare your membership please");
      } else {
        member.currentlyBorrowedBooks.push(action.payload.bookId);
        borrowedBook.available = false;
      }

      // console.log(member, "reducer");
      return {
        ...state,
        members: [...state.members],
      };

    case RETURN_BOOK:
      const book = books.find((book) => book.id === action.payload.bookId);
      if (book.available === true) {
        book.available = false;
      } else {
        book.available = true;
      }
      // console.log(book, "hello");
      return {
        ...state,
        books: [...state.books],
      };

    default:
      console.log(state, "reducer");
      return state;
  }
};

export default reducer;
