import React from 'react';
import Form from "./Form"

function App() {
  return (
    <div className="App">
      <Form onSubmit={()=>window.alert(`SUCCESS`)}/>
    </div>
  );
}

export default App;
