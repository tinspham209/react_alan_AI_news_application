import React, { useEffect } from "react";
import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "73c57b3ea73e11319e1cca017e02a1bd2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log("articles", articles);
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
