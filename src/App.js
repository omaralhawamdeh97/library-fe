import "./App.css";
import BooksList from "./components/BooksList";
import MembersList from "./components/MembersList";
import { Route, Switch } from "react-router";
import MemberDetail from "./components/MemberDetail";
import BookDetails from "./components/BookDetalis";
import NewBook from "./components/NewBook";
import NewMember from "./components/NewMember";
import { MainDiv } from "./styles";
import Borrow from "./components/Borrow";

function App() {
  return (
    <Switch>
      <div className="App">
        <MainDiv>
          <Route exact path="/BookDetail/:bookSlug">
            <BookDetails />
          </Route>
        </MainDiv>
        <div>
          <Route exact path="/MemberDetail/:memberSlug">
            <MemberDetail />
          </Route>
        </div>
        <div>
          <Route exact path="/NewBook">
            <NewBook />
          </Route>
        </div>
        <div>
          <Route exact path="/NewMember">
            <NewMember />
          </Route>
        </div>
        <div>
          <Route exact path="/">
            <MembersList />
          </Route>
        </div>
        <div>
          <Route exact path="/">
            <BooksList />
          </Route>
        </div>
        <Route exact path="/books/borrow/:memberSlug">
          <Borrow />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
