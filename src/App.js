import "./App.css";
import BooksList from "./components/BooksList";
import MembersList from "./components/MembersList";

function App() {
  return (
    <div className="App">
      <div>
        <MembersList />
      </div>
      <div>
        <BooksList />
      </div>
    </div>
  );
}

export default App;
