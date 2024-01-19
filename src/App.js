import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState } from "react";

async function sendToAPI(dataToSend) {
  console.log("in function sendApi");
  // next xyz login here
  const info = {
    prompt: dataToSend,
  };
  const arg = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  };

  try {
    const response = await axios.post("http://localhost:5000/api/chatgpt", arg);

    const result = await response.data;
    console.log("success");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

function App() {
  const [data, fun] = useState("");

  const handleChange = (event) => {
    fun(event.target.value);
    // this.setState({ userName: this.props.dataFromParent });
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      sendToAPI(data);
    }
  };

  // sendToAPI();
  return (
    <div className="App">
      <input
        className="inputBar"
        type="text"
        placeholder="Type your message here"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="iconBtn">
        click me
      </button>
    </div>
  );
}

export default App;
