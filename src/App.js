import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [images, setImages] = useState([])

  // useEffect(() => {
  //   console.log("useEffect called");
  // });

  console.log("Component rendering");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        setImages(data.message)
      })
  }, [])

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been Clicked {count} times
      </button>
      <input type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}>
      </input>
      <div>
        {images.map(image => (
          <img src={image} key={image}></img>
        ))}
      </div>
    </>
  )
}

export default App;
