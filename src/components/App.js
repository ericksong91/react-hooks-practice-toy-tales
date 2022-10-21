import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((data) => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToy) {
    console.log("New Toy:", newToy)
    setToys([...toys, newToy])
  }

  function handleDelete(deletedItem) {
    console.log(deletedItem);

    fetch(`http://localhost:3001/toys/${deletedItem}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("Deleted!"))

    const updatedToys = toys.filter((toy) => {
      return toy.id !== deletedItem
    })

    setToys(updatedToys);
  }

  function handleLikes(updatedToy) {
    console.log(updatedToy)

    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    
    setToys(updatedToys);

  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={handleDelete} onLike={handleLikes} />
    </>
  );
}

export default App;
