import React, { useState, useEffect } from "react";
import "../src/styles/css/App.css";
import "../src/styles/css/index.css";
import Card from "./card.js";
import Nav from "./Nav.js";
import artist from "./assets/artist.jpg";
import baronness from "./assets/baronness.jpg";
import botanist from "./assets/botanist.jpg";
import carthusian from "./assets/carthusian.jpg";
import cleric from "./assets/cleric.jpg";
import comtesse from "./assets/comtesse.jpg";
import countess from "./assets/countess.jpg";
import daughter from "./assets/daughter.jpg";
import engineer from "./assets/engineer.jpg";
import guitarist from "./assets/guitarist.jpg";
import importer from "./assets/importer.jpg";
import king from "./assets/king.jpg";
import lawyer from "./assets/lawyer.jpg";
import monarch from "./assets/monarch.jpg";
import playright from "./assets/playright.jpg";
import merchant from "./assets/merchant.jpg";
import missionary from "./assets/missionary.png";
import model from "./assets/model.jpg";
import thinker from "./assets/thinker.jpg";
import president from "./assets/president.jpg";
import queen from "./assets/queen.jpg";
import sculptor from "./assets/sculptor.jpg";

const App = () => {
  const [score, setScore] = useState(-1);
  const [lossOrWin, setResult] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const [guessedCharactersList, setGuess] = useState([]);
  const [items, setList] = useState([
    { name: "Artist", image: artist },
    { name: "Baronness", image: baronness },
    { name: "Botanist", image: botanist },
    { name: "Carthusian", image: carthusian },
    { name: "Cleric", image: cleric },
    { name: "Comtesse", image: comtesse },
    { name: "Daughter", image: daughter },
    { name: "Engineer", image: engineer },
    { name: "Guitarist", image: guitarist },
    { name: "Importer", image: importer },
    { name: "King", image: king },
    { name: "Lawyer", image: lawyer },
    { name: "Monarch", image: monarch },
    { name: "Playright", image: playright },
    { name: "Merchant", image: merchant },
    { name: "Missionary", image: missionary },
    { name: "Model", image: model },
    { name: "Thinker", image: thinker },
    { name: "President", image: president },
    { name: "Queen", image: queen },
    { name: "Sculptor", image: sculptor },
  ]);

  function shuffle(newArr) {
    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }
  useEffect(() => {
    const mountArray = shuffle([...items]);
    setList(mountArray);
  }, []);

  let handleShuffle = () => {
    const changes = shuffle([...items]);
    setList(changes);
  };

  let handleGuess = (e) => {
    if (
      e.target.parentNode.parentNode.className === "card-wrapper" ||
      e.target.parentNode.className === "img-wrapper" ||
      e.target.parentNode.className === "clickable-all"
    ) {
      let chosenCharacter =
        e.target.parentNode.parentNode.childNodes[1].innerText;
      const changes = guessedCharactersList.concat(chosenCharacter);

      setGuess(changes);
    }
  };

  useEffect(() => {
    setScore(0);
  }, [lossOrWin]);

  let checkForHighScore = (original, newScore) => {
    if (newScore > original) {
      setHighScore(newScore);
    }
  };

  useEffect(() => {
    let mostRecent = guessedCharactersList[guessedCharactersList.length - 1];
    let spliced = guessedCharactersList.slice(
      0,
      guessedCharactersList.length - 1
    );

    if (spliced.includes(mostRecent)) {
      checkForHighScore(highScore, score);

      setScore(-1);
      setResult(!lossOrWin);

      setGuess([]);
    } else {
      handleShuffle();
      setScore(score + 1);
    }
  }, [guessedCharactersList]);

  return (
    <div className="App">
      <Nav score={score} highScore={highScore} />
      <div className="all-cards-container" onClick={handleGuess}>
        <Card title={items[0].name} source={items[0].image} />
        <Card title={items[1].name} source={items[1].image} />
        <Card title={items[2].name} source={items[2].image} />
        <Card title={items[3].name} source={items[3].image} />
        <Card title={items[4].name} source={items[4].image} />
        <Card title={items[5].name} source={items[5].image} />
        <Card title={items[6].name} source={items[6].image} />
        <Card title={items[7].name} source={items[7].image} />
        <Card title={items[8].name} source={items[8].image} />
        <Card title={items[9].name} source={items[9].image} />
        <Card title={items[10].name} source={items[10].image} />
        <Card title={items[11].name} source={items[11].image} />
        <Card title={items[12].name} source={items[12].image} />
        <Card title={items[13].name} source={items[13].image} />
        <Card title={items[14].name} source={items[14].image} />
        <Card title={items[15].name} source={items[15].image} />
        <Card title={items[16].name} source={items[16].image} />
        <Card title={items[17].name} source={items[17].image} />
        <Card title={items[18].name} source={items[18].image} />
        <Card title={items[19].name} source={items[19].image} />
        <Card title={items[20].name} source={items[20].image} />
      </div>
    </div>
  );
};

export default App;
