import React from 'react';
import Form from './components/Form'
import Table from './components/Table'
import "./App.css";


const App = (props) => {
  return (
    <div className="body">      
      <Form />
      <Table />
    </div>
      
  );
}

export default App;