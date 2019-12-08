import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilteredList from './FilteredList';
import SortedList from './SortedList';
import chick1 from './Chicks/Chick-01.png';
import chick2 from './Chicks/Chick-02.png';
import chick3 from './Chicks/Chick-03.png';
import chick4 from './Chicks/Chick-04.png';
import chick5 from './Chicks/Chick-05.png';
import chick6 from './Chicks/Chick-06.png';
import chick7 from './Chicks/Chick-07.png';
import chick8 from './Chicks/Chick-08.png';
import chick9 from './Chicks/Chick-09.png';
import chick10 from './Chicks/Chick-10.png';
import chick11 from './Chicks/Chick-11.png';
import chick12 from './Chicks/Chick-12.png';
import info1 from './Chicks/Info Card-01.png';
import info2 from './Chicks/Info Card-02.png';
import info3 from './Chicks/Info Card-03.png';
import info4 from './Chicks/Info Card-04.png';
import info5 from './Chicks/Info Card-05.png';
import info6 from './Chicks/Info Card-06.png';
import info7 from './Chicks/Info Card-07.png';
import info8 from './Chicks/Info Card-08.png';
import info9 from './Chicks/Info Card-09.png';
import info10 from './Chicks/Info Card-10.png';
import info11 from './Chicks/Info Card-11.png';
import info12 from './Chicks/Info Card-12.png';

const chicks = [
  {image: chick1, info: info1, age: 5, occ: "real", pers: "grumpy"},
  {image: chick2, info: info2, age: 8, occ: "fake", pers: "shy"},
  {image: chick3, info: info3, age: 4, occ: "fake", pers: "grumpy"}, 
  {image: chick4, info: info4, age: 2, occ: "real", pers: "grumpy"},
  {image: chick5, info: info5, age: 9, occ: "real", pers: "vain"},
  {image: chick6, info: info6, age: 6, occ: "real", pers: "shy"},
  {image: chick7, info: info7, age: 11, occ: "fake", pers: "shy"},
  {image: chick8, info: info8, age: 3, occ: "real", pers: "shy"},
  {image: chick9, info: info9, age: 1, occ: "fake", pers: "vain"},
  {image: chick10, info: info10, age: 10, occ: "fake", pers: "shy"},
  {image: chick11, info: info11, age: 12, occ: "fake", pers: "grumpy"},
  {image: chick12, info: info12, age: 7, occ: "fake", pers: "shy"},
];

function App() {
  return (
    <div className="App">
      {/*TODO (FilteredList): create an instance of the FilteredList Component with a variable named items that takes in your produce list*/}
      {/* <FilteredList items={produce}/> */}
      <FilteredList items={chicks}/>
    </div>
  );
}

export default App;
