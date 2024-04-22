import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const SearchInput = ({ setResults, setInputText }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleDelete = () => {
    setInput("");
    setSuggestions([]);
  };

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
        setSuggestions(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion.name);
    setSuggestions([]);
    setInputText(suggestion.name);
  };

  return (
    <div className="relative">
      <div className="flex items-center w-[100%] bg-white shadow-lg rounded-md p-2">
        <FaSearch className="mr-2" />
        <input
          type="text"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search..."
          className="text-gray-500 h-[100%] bg-transparent text-xl focus:outline-none flex-1"
        />
        {input && (
          <IoIosClose className="text-2xl ml-auto" onClick={handleDelete} />
        )}
      </div>

      {suggestions.length > 0 && (
        <div className=" bg-white flex flex-col shadow-lg rounded-md mt-3 w-[100%] max-h-[300px] overflow-y-auto">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
