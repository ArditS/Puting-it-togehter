import React, {useState} from 'react';
import PersonCard from "./assets/Components/PersonCard";

function App() {

  const [janeAge, setjaneAge] = useState(45);
  const [johnAge, setjohnAge] = useState(88);

  return (
    <>
    <PersonCard lastName="Doe," firstName="Jane" age={janeAge}  hairColor="Black" setAge={setjaneAge}/>
      <PersonCard lastName="Smith," firstName="John" age={johnAge} hairColor="Brown" setAge={setjohnAge}/>
    </>
  )
}

export default App
