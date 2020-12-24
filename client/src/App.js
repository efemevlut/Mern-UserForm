import React, { createContext, useState } from "react";
import Table from "./components/Table";
import "./App.css";
import Form from './components/Form';

export const UserContext = createContext();

const App = () => {

  const [isAdded, setAdded] = useState(true);
  const tableTriger=()=>{
    setAdded(!isAdded)
  }

  return (
    <UserContext.Provider value={{isAdded, tableTriger}}>
      <div className="body">
        <Form />
        <Table />
      </div>
    </UserContext.Provider>
  );
};

export default App;
