
import List from './List';
import data from './data';
import { useState } from 'react';
function App() {

const [people, setpeople] = useState(data);
const clearBirthday =()=>{
  setpeople([])
}

  return (
  <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={clearBirthday}>clear all</button>
    </section>

  </main>
  );
}

export default App;
