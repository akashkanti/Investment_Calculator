import { useState } from 'react';

import Header from './Components/Header.jsx';
import UserInput from './Components/UserInput.jsx';
import Results from './Components/Results.jsx';

function App(){
    const[userInput, setUserInput] = useState({
         initialInvestment: 10000,
         annualInvestment: 1200,
         expectedReturn: 6,
         duration: 10
     });

     const inputIsValid = userInput.duration >= 1

     function handleChange(inputIdentifier, newValue){
      setUserInput(prevUserInput =>{
          return {
              ...prevUserInput,
              [inputIdentifier]: +newValue,
          }
      });
  }

  return(
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className='center'>Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput}></Results>}
    </>
  )
}

export default App;

