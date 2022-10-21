import React from "react";

function ToyCard({ toy, onDelete, onLike }) {
  const { id, name, image, likes } = toy;

  function handleClick () {
    console.log(toy)
    console.log(id)
    console.log(`http://localhost:3001/toys/${id}`)



    const updatedLikes = {
      "likes": parseInt(likes + 1)
    };

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedLikes)
    })
      .then((r) => r.json())
      .then(onLike)

  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={()=>handleClick()}>Like {"<3"}</button>
      <button className="del-btn" onClick={()=>onDelete(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
