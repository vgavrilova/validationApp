import React, { useState } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';



const App = props => {
  // initialize text lenth of an input and the text itself as a state
  const [stateTextLength, setStateTextLength] = useState({
    textLength: 0,
    text: ''
  
  });


  // show the number of characters in a paragraph
  const changeNumber = (event) => {
    const input = event.target.value;
    setStateTextLength({
      textLength: input.length,
      text: input
  });

  };

  // delete a particular character
  // firstly, an array should be created again
  // after removing, an array should be converted to a string with join('') method
  // lastly, update the state
  const deleteChar = (indexOfElement) => {
    const textInput = [...stateTextLength.text.split('')];
    textInput.splice(indexOfElement, 1);
    const updatedText = textInput.join('');
    setStateTextLength({
      textLength: updatedText.length,
      text: updatedText
    });
  }

// split a String into an array of elments
// by using a map() method
  const charList = stateTextLength.text.split('').map((char, index) =>
    {
      return <Char ownChar={char} 
      key={index}
      click={() => deleteChar(index)}/>
    });

  return (
    <div className="App">
      <input 
      onChange={event => changeNumber(event)}
      type='text'
      value={stateTextLength.text}
      />
      <div className="messages">
        <p>Number of characters entered: {stateTextLength.textLength}</p>
        <Validation 
        length={stateTextLength.textLength}/>
        <p>In order to delete a character, click on it.</p>
      </div>
      {charList}

    </div>
  );
}

export default App;
