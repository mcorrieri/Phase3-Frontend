import './App.css';
import React, { useState } from "react";
import Header from './Header';
import National from './National';
import Search from './Search'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  
  function handleUpdatedSearch(newSearch){
    setSearchTerm(newSearch);
  }
  
  return (
    <div>
      <h1>Howdy still</h1>
      <Search searchTerm={searchTerm} onUpdatedSearch={handleUpdatedSearch}/>
    </div>
  );
}

export default App;
