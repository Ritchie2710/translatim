import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [from, setFrom] = useState("ar");
  const [to, setTo] = useState("ar");
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [image, setImage] = useState("");

  async function handleTranslate(event) {
    event.preventDefault();
    const API = `https://translatim.onrender.com/translate?word=${word}&from=${from}&to=${to}`;
    const res = await axios.get(API);
    setTranslation(res.data.translation);
    setImage(res.data.image);
  }

  return (
    <>
      <h1>Choose a word any word see what comes out</h1>
      <form onSubmit={handleTranslate}>
        <div className="container">
          <select onChange={(event) => setFrom(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          <input
            placeholder="Translate"
            onChange={(event) => setWord(event.target.value)}
          />
        </div>

        <div className="container">
          <select onChange={(event) => setTo(event.target.value)}>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="pl">Polish</option>
            <option value="es">Spanish</option>
            <option value="tr">Turkish</option>
          </select>
          <div className="output"> {translation}</div>
        </div>
        <button>submit</button>
      </form>
      <img src={image} />
    </>
  );
}
export default App;
