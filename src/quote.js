import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote } from "./quote-slice";

export function Quote() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.quote);
  function onNewQuote() {
    dispatch(fetchRandomQuote());
  }
  if (!data.initialized) {
    dispatch(fetchRandomQuote());
  }
  return (
    <div id="quote-box">
      <q id="text" className="text">
        {data.initialized ? data.quote : "..."}
      </q>
      <p id="author" className="text">
        {data.initialized ? `- ${data.author}- ` : ""}
      </p>
      <button onClick={onNewQuote} className="button" id="new-quote">
        New Quote
      </button>
      <a
        className="button"
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${data.quote}`}
      >
        Tweet Quote
      </a>
    </div>
  );
}
