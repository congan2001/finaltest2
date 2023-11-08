import React, { useState } from "react";

const Button = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");

  const getQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
      setTags(data.tags);
    } catch (error) {
      console.log("Error fetching quote:", error);
    }
  };

  return (
    <div>
      <button onClick={getQuote}>Get Quote</button>
      
      {quote && (
        <div>
          <p className="quote">{quote}</p>
          <p className="author">{author}</p>
          <p className="tags">Category: {tags}</p>
        </div>
      )}
    </div>
  );
};

export default Button;
