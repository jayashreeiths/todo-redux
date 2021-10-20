import React from "react";
import DisplayTodos from "./components/DisplayTodos";
import  Todos  from "./components/Todos";
import "./css/main.css";

function App() {
  return (
    <div className="App">
    <Todos/>
    <DisplayTodos/>
    </div>
  );
}

export default App;
