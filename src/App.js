
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
  };

  const wordCount = text.split(/\s+/).filter((word) => word !== '').length;

  return (
    <div className="container">
      <div className="text-center card mt-5">
        <div className="card-body">
          <h2 className="font-weight-bold">Responsive Paragraph Word Counter</h2>
          <textarea
            className="form-control"
            rows="5"
            value={text}
            onChange={handleTextChange}
            placeholder="Type your text here"
          ></textarea>
          <p className="mt-3">Word Count: {wordCount}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

