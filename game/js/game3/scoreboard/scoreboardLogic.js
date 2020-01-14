import { renderScore } from "./scoreboardRender";
import { removeKeySupport } from "../game";

export const playerName = document.getElementById("playerName");
export let currentPlayerName = '';

export const scoreboard = () => {
  const clearScoresBtn = document.getElementById("clearScores");
  const displayScoresBtn = document.getElementById("displayScores");
  const scoreboard = document.getElementById("scoreboard");
  const scoreboardHeading = document.querySelector("#modal__gameover .heading");
  const saveScoreBtn = document.getElementById("saveScore");

  const resetScore = () => {
    localStorage.setItem("gameScores", JSON.stringify([]));
    localStorage.setItem("highscore", JSON.stringify(0));
    return JSON.parse(localStorage.getItem("gameScores"))
  };
  const getScore = () => JSON.parse(localStorage.getItem("gameScores")) || resetScore();

  const setScore = (data=[]) =>
    localStorage.setItem("gameScores", JSON.stringify(data));
  const addScore = (arr, player, score) => {
    const scoreData = arr;
    const newScoreEntry = {
      name: player,
      score: score,
      date: new Date()
    };
    scoreData.push(newScoreEntry);
    return setScore(scoreData);
  };

  const sortScores = (arr) => {
    const sortedScores = arr.sort((a, b) => {
      if (a.score === b.score) {
        return new Date(b.date) - new Date(a.date);
      }
      if (a.score < b.score) {
        return 1
      } else {
        return -1
      }
    });
    return sortedScores
  };

  const checkScores = arr => {
    if (arr.length) {
      if (arr.length < 10) {
        const output = sortScores(arr);
        return renderScore(output, scoreboard);
      } else {
        const tenScoresArr = sortScores(arr).slice(0, 10);
        setScore(tenScoresArr);
        return renderScore(tenScoresArr, scoreboard);
      }
    }
  };

  const handleScores = () => {
    const keySupport = event => {
      removeKeySupport();
      if (event.key === 'Enter') {

      }
    };
    const scoreData = getScore();
    if (playerName.value !== '') {
      const currentScore = Number(localStorage.getItem('lastScore')) || 0;
      if (currentScore) {
    addScore(scoreData, playerName.value, currentScore);
    currentPlayerName = playerName.value;
    playerName.value = '';
    scoreboardHeading.innerHTML = "Najlepsze wyniki:";
    checkScores(scoreData);

  }}};
  const saveScore = () => {
    handleScores();
    document.getElementById('modalInputs').style.display = 'none';
  };
  const keySupport = event => {
    removeKeySupport();
      if (event.key === 'Enter') {
        saveScore()
      }
  };
  document.addEventListener("keydown", keySupport);
  saveScoreBtn.addEventListener("click", () => {
    saveScore()
  });

  clearScoresBtn.addEventListener("click", () => {
    resetScore()
  });

  displayScoresBtn.addEventListener("click", () => {
    checkScores(getScore());
    displayScoresBtn.style.display = 'none';
    clearScoresBtn.style.display = 'inline';
    scoreboardHeading.innerHTML = "Najlepsze wyniki:";
  });
};
