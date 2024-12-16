import React from "react";
import { useParams } from "react-router-dom";
import WordGuessGame from "../components/WordGuessGame";
import SentenceFillGame from "../components/SentenceFillGame";

const GamePage = () => {
  const { type } = useParams();

  return (
    <div>
      {type === "gender" && <WordGuessGame />}
      {type === "sentences" && <SentenceFillGame />}
      {type === "possessives" && <div>Dolazi uskoro!</div>}
    </div>
  );
};

export default GamePage;
