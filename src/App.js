import "./App.css";
import BooksList from "./components/BooksList";
import MembersList from "./components/MembersList";
import { Route, Switch } from "react-router";
import MemberDetail from "./components/MemberDetail";
import BookDetails from "./components/BookDetalis";
import NewBook from "./components/NewBook";
import NewMember from "./components/NewMember";
import { All, MainDiv } from "./styles";
import Borrow from "./components/Borrow";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  const theme = {
    light: {
      mainColor: "#242424", // main font color
      backgroundColor: "#fefafb", // main background color
      pink: "#ff85a2",
      red: "#ff3232",
    },
    dark: {
      mainColor: "#fefafb", // main font color
      backgroundColor: "#242424", // main background color
      pink: "#ff85a2",
      red: "#ff3232",
    },
  };
  return (
    <Switch>
      {/* <All> */}
      <MainDiv>
        <Route exact path="/BookDetail/:bookSlug">
          <BookDetails />
        </Route>

        <Route exact path="/MemberDetail/:memberSlug">
          <MemberDetail />
        </Route>

        <Route exact path={["/NewBook", "/NewBook/:bookSlug"]}>
          <NewBook />
        </Route>

        <Route exact path="/NewMember">
          <NewMember />
        </Route>

        <Route exact path="/MembersList">
          <MembersList />
        </Route>

        <Route exact path="/BooksList">
          <BooksList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/books/borrow/:memberSlug">
          <Borrow />
        </Route>
      </MainDiv>
      {/* </All> */}
    </Switch>
  );
}

export default App;
