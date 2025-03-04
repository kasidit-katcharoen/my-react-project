import { useEffect, useState } from "react";

const SearchHighlight = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [hasValue, setHasValue] = useState("");
  const [resProducts, setResProducts] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setHasValue("");
    if (value.length > 0) {
      const filteredSuggestions = resProducts.filter((res) =>
        res?.title?.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const getAPIProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setResProducts(json));
    // .then(json=>console.log(json))
  };

  useEffect(() => {
    getAPIProducts();
  }, []);

  useEffect(() => {
    console.log("hasValue : " + hasValue);
  }, [hasValue]);

  return (
    <div className="search-container">
      <p>
        API power by{" "}
        <a href="https://fakestoreapi.com/products" target="_bank">
          https://fakestoreapi.com/products
        </a>
      </p>
      <input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Search words..."
      />
      {suggestions.length > 0 && !hasValue && (
        <ul className="suggestions">
          {suggestions.map((v, index) => (
            <li
              key={index}
              onClick={() => {
                setHasValue(v.title), setQuery(v.title);
              }}
            >
              {highlightText(v.title, query)}
            </li>
          ))}
        </ul>
      )}
      <style>{`
        .search-container {
          margin: 0 auto;
          width: 300px;
          font-family: Arial, sans-serif;
        }
        input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .suggestions {
          list-style-type: none;
          padding: 0;
          margin: 5px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
          max-height: 150px;
          overflow-y: auto;
          background: #252525;
        }
        .suggestions li {
          padding: 8px;
          cursor: pointer;
        }
        .suggestions li:hover {
          background:rgb(61, 59, 59);
        }
        .highlight {
          background-color:rgb(178, 8, 251);
          color: white;
        }
      `}</style>
    </div>
  );
};

export default SearchHighlight;
