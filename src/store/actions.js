export const CREATE_BOOK = "CREATE_BOOK";
export const CREATE_MEMBER = "CREATE_MEMBER";
export const BORROW_BOOK = "BORROW_BOOK";
export const RETURN_BOOK = "RETURN_BOOK";
export const createBook = (newBook) => {
  return {
    type: CREATE_BOOK,
    payload: { newBook },
  };
};
export const createMember = (newMember) => {
  return {
    type: CREATE_MEMBER,
    payload: { newMember },
  };
};
export const borrowBook = (bookId, memberSlug) => {
  console.log(bookId, memberSlug, "id+slug");
  return {
    type: BORROW_BOOK,
    payload: { bookId, memberSlug },
  };
};

export const returnBook = (bookId) => {
  // console.log(bookId, "id");
  return {
    type: RETURN_BOOK,
    payload: { bookId },
  };
};
