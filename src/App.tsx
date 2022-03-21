import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Valeriu Bahov",
      age: 27,
      img: "https://valeriubahov.ml/static/media/Photo.d1739cd7f425968362dc.jpg",
      note: "Coding while sleeping",
    },
    {
      name: "Steve Jobs",
      age: 56,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/800px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
      note: "Doing things that cost a lot"
    },
  ]);

  return (
    <div className="App">
      <h1>List of people</h1>
      <List people={people} />
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );
}

export default App;
