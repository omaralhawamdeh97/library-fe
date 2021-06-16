import "./App.css";
import BooksList from "./components/BooksList";
import MembersList from "./components/MembersList";
import { Route, Switch } from "react-router";

function App() {
  return (
    <Switch>
      <div className="App">
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
      </div>
    </Switch>
  );
}

export default App;
