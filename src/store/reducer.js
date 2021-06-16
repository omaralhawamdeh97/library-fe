import members from "../members";
import books from "../books";

const initialState = {
  members: members,
  books: books,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      console.log(state, "reducer");
      return state;
  }
};

export default reducer;
