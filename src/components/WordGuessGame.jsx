import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Box,
  Stack,
  MenuItem,
  Select,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { words, kleidungWords } from "../utils/words";

const WordGuessGame = () => {
  const [numWords, setNumWords] = useState(10);
  const [selectedWords, setSelectedWords] = useState([]);
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [bestScorePercentage, setBestScorePercentage] = useState(0);
  const [attempted, setAttempted] = useState(false);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const savedBestPercentage = parseFloat(
      localStorage.getItem("bestScorePercentage")
    );
    if (!isNaN(savedBestPercentage)) {
      setBestScorePercentage(savedBestPercentage);
    }
  }, []);

  const handleStartGame = (isKleidung = false) => {
    const shuffledWords = isKleidung
      ? [...kleidungWords].sort(() => Math.random() - 0.5)
      : [...words].sort(() => Math.random() - 0.5);

    setSelectedWords(shuffledWords.slice(0, numWords));
    setIndex(0);
    setScore(0);
    setResult("");
    setAttempted(false);
    setTotalAttempts(0);
    setGameStarted(true);
  };

  const handleGuess = (guess) => {
    const correct = selectedWords[index].gender === guess;
    setTotalAttempts(totalAttempts + 1);

    if (correct) {
      setScore(score + 1);
      setResult("Richtig! 🎉");
      setAttempted(true);
    } else {
      setResult("Falsch! 😞");
    }

    if (index === selectedWords.length - 1) {
      const percentage =
        ((score + (correct ? 1 : 0)) / (totalAttempts + 1)) * 100;
      if (percentage > bestScorePercentage) {
        setBestScorePercentage(percentage);
        localStorage.setItem("bestScorePercentage", percentage.toFixed(2));
      }
    }
  };

  const nextWord = () => {
    setResult("");
    setAttempted(false);
    setIndex((prevIndex) => prevIndex + 1);
  };

  const handleNumWordsChange = (event) => {
    setNumWords(event.target.value);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 5,
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      {!gameStarted ? (
        <Card
          sx={{
            maxWidth: 500,
            margin: "auto",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            padding: 3,
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{ mb: 3, fontSize: { xs: "1.5rem", md: "2.5rem" } }}
            >
              Willkommen beim Spiel „Artikel erraten“!
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Wählen Sie die Anzahl der Wörter für das Spiel:
            </Typography>
            <Select
              value={numWords}
              onChange={handleNumWordsChange}
              sx={{
                mb: 3,
                width: { xs: "120px", md: "150px" },
                backgroundColor: "white",
                borderRadius: "4px",
              }}
            >
              <MenuItem value={10}>10 Wörter</MenuItem>
              <MenuItem value={20}>20 Wörter</MenuItem>
              <MenuItem value={30}>30 Wörter</MenuItem>
              <MenuItem value={50}>50 Wörter</MenuItem>
            </Select>
            <br />
            <Button
              onClick={handleStartGame}
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                px: { xs: 2, md: 4 },
                py: { xs: 1, md: 2 },
                fontSize: { xs: "0.8rem", md: "1rem" },
              }}
            >
              Spiel starten
            </Button>
            <Button
              onClick={() => handleStartGame(true)}
              variant="contained"
              color="secondary"
              sx={{
                mt: 3,
                px: { xs: 2, md: 4 },
                py: { xs: 1, md: 2 },
                fontSize: { xs: "0.8rem", md: "1rem" },
              }}
            >
              Kleidung Wortschatz spielen
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card
          sx={{
            maxWidth: 700,
            margin: "auto",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            padding: 3,
          }}
        >
          <CardContent>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Aktueller Status:{" "}
                  <strong>
                    {index + 1}/{numWords}
                  </strong>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Gesamtversuche: <strong>{totalAttempts}</strong>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Bester Prozentsatz:{" "}
                  <strong>{bestScorePercentage.toFixed(2)}%</strong>
                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant="h4"
              sx={{ mb: 3, fontSize: { xs: "1.2rem", md: "2rem" } }}
            >
              Welcher Artikel passt zu:{" "}
              <strong>{selectedWords[index].word}</strong>?
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ flexWrap: "wrap", gap: { xs: 1, md: 2 } }}
            >
              <Button
                onClick={() => handleGuess("der")}
                variant="contained"
                color="primary"
                disabled={attempted}
                sx={{
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  px: { xs: 2, md: 3 },
                }}
              >
                Der
              </Button>
              <Button
                onClick={() => handleGuess("die")}
                variant="contained"
                color="secondary"
                disabled={attempted}
                sx={{
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  px: { xs: 2, md: 3 },
                }}
              >
                Die
              </Button>
              <Button
                onClick={() => handleGuess("das")}
                variant="contained"
                color="success"
                disabled={attempted}
                sx={{
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  px: { xs: 2, md: 3 },
                }}
              >
                Das
              </Button>
            </Stack>
            {result && (
              <Typography
                variant="h6"
                sx={{
                  mt: 3,
                  color: result.includes("Richtig") ? "green" : "red",
                }}
              >
                {result}
              </Typography>
            )}
            {index < selectedWords.length - 1 && attempted ? (
              <Button
                onClick={nextWord}
                variant="outlined"
                sx={{
                  mt: 3,
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  px: { xs: 2, md: 3 },
                }}
              >
                Nächstes Wort
              </Button>
            ) : index === selectedWords.length - 1 && attempted ? (
              <Button
                onClick={() => setGameStarted(false)}
                variant="contained"
                color="primary"
                sx={{
                  mt: 3,
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  px: { xs: 2, md: 3 },
                }}
              >
                Noch einmal spielen
              </Button>
            ) : null}
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default WordGuessGame;
