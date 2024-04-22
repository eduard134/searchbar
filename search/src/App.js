import React, { useState } from "react";

import SearchInput from "./components/SearchInput";

function App() {
  const [results, setResults] = useState([]);
  const [inputText, setInputText] = useState("");

  return (
    <div className="app">
      <div className="flex m-auto flex-col items-center max-w-[400px] w-[40%] pt-[20vh]">
        <SearchInput setResults={setResults} setInputText={setInputText} /> sdc
      </div>
    </div>
  );
}

export default App;
