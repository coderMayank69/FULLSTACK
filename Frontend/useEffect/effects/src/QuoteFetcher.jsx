// import { useState, useEffect } from "react";
import QuoteFetcherLoader from "./QuoteFetcherLoader";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {

    // const [quote, setQuote] = useState({ text: "", author: "" });

    // useEffect(() => {
    //     fetchQuote();
    // }, []);
    // async function fetchQuote() {
    //     const response = await fetch(RANDOM_QUOTE_URL);
    //     const jsonResponse = await response.json();
    //     const randomQuote = jsonResponse.quote;
    //     setQuote(randomQuote);
    // }

  

    return(
        <div>
              <QuoteFetcherLoader />
            <button onClick={fetchQuote}>GET QUOTE</button>
            {/* <h1>{quote.text}</h1>
            <h3>{quote.author}</h3> */}
        </div>
    )
}