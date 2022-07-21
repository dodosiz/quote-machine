import "./App.css";
import "./button.css";

function App() {
  return (
    <div className="App">
      <div id="quote-box">
        <q id="text" className="text">
          This is a quote.
        </q>
        <p id="author" className="text">
          Mark Example
        </p>
        <button className="button" id="new-quote">
          New Quote
        </button>
        <a className="button" id="tweet-quote" href="_blank">
          Tweet Quote
        </a>
      </div>
    </div>
  );
}

export default App;
