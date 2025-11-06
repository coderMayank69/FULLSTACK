import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcherLoader() {

    // ...existing code...
    const [quote, setQuote] = useState({ text: "", author: "" });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchQuote() {
            try {
                const response = await fetch(RANDOM_QUOTE_URL);
                const jsonResponse = await response.json();
                const randomQuote = jsonResponse.quote;
                setQuote(randomQuote);
            } catch (err) {
                console.error("Failed to fetch quote:", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchQuote();
    }, []);
    // ...existing code...

    return(
        <div>
            {isLoading && <p>Loading.......</p>}
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
            
        </div>
    )
}