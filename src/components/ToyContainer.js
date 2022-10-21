import React, { useState, useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDelete, onLike }) {

  const updatedList = toys.map((toy, index) => {
    return <ToyCard key={`Toy-${index}`} toy={toy} onDelete={onDelete} onLike={onLike} />
  })

  return (
    <div id="toy-collection">
      {updatedList}
    </div>
  );
}

export default ToyContainer;
