import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

function QuoteFetcher() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchQuote();
    }, []);

    async function fetchQuote() {
        const fetchQuote = await fetch(RANDOM_QUOTE_URL);
        const jsonRes = await fetchQuote.json();
        setQuote(jsonRes.quote.text);
        setAuthor(jsonRes.quote.author);
        setIsLoading(false);
    }
    return (
        <div>
            <h1>Fetch quote</h1>
            {isLoading && <h4>Loading...</h4>}
            <h3>{quote}</h3>
            <h3>{author}</h3>
        </div>
    );
}
export default QuoteFetcher;
