// Datei: src/App.js
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Alert,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import { grammatik, wortschatz } from "../utils/words";

const allSentences = {
  grammatik,
  wortschatz,
};

function SentenceFillGame() {
  const [category, setCategory] = useState(""); // Ausgewählte Kategorie
  const [sentences, setSentences] = useState([]); // Fragen der ausgewählten Kategorie
  const [currentSentence, setCurrentSentence] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [explanation, setExplanation] = useState("");
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setSentences(allSentences[selectedCategory]);
    setCurrentSentence(0);
    setUserAnswer("");
    setFeedback("");
    setExplanation("");
    setScore(0);
    setResults([]);
    setIsQuizFinished(false);
  };

  const handleSubmit = () => {
    const current = sentences[currentSentence];
    const isCorrect =
      userAnswer.toLowerCase() === current.correct.toLowerCase();

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setResults((prevResults) => [
      ...prevResults,
      {
        question: current.text,
        correctAnswer: current.correct,
        userAnswer,
        isCorrect,
      },
    ]);

    setFeedback(isCorrect ? "Richtige Antwort! 🎉" : "Falsche Antwort. 😞");
    setExplanation(current.explanation);
  };

  const handleNext = () => {
    if (currentSentence + 1 === sentences.length) {
      setIsQuizFinished(true);
    } else {
      setCurrentSentence((prev) => prev + 1);
    }
    setFeedback("");
    setExplanation("");
    setUserAnswer("");
  };

  const handleRestart = () => {
    setCategory("");
    setSentences([]);
    setCurrentSentence(0);
    setUserAnswer("");
    setFeedback("");
    setExplanation("");
    setScore(0);
    setResults([]);
    setIsQuizFinished(false);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "auto",
        textAlign: "center",
        padding: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Lückentext-Übungen
      </Typography>

      {!category ? (
        <Box>
          <Typography variant="h5" gutterBottom>
            Wähle eine Kategorie:
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: 1 }}
            onClick={() => handleCategorySelect("grammatik")}
          >
            Grammatik
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ margin: 1 }}
            onClick={() => handleCategorySelect("wortschatz")}
          >
            Wortschatz
          </Button>
        </Box>
      ) : isQuizFinished ? (
        <Box>
          <Typography variant="h5" gutterBottom>
            Quiz beendet! Dein Ergebnis: {score} / {sentences.length}
          </Typography>

          {/* Tabelle mit den Ergebnissen */}
          <TableContainer component={Paper} sx={{ marginTop: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Frage</TableCell>
                  <TableCell>Richtige Antwort</TableCell>
                  <TableCell>Deine Antwort</TableCell>
                  <TableCell>Ergebnis</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results.map((result, index) => (
                  <TableRow key={index}>
                    <TableCell>{result.question}</TableCell>
                    <TableCell>{result.correctAnswer}</TableCell>
                    <TableCell>{result.userAnswer}</TableCell>
                    <TableCell>{result.isCorrect ? "✔️" : "❌"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Button
            variant="contained"
            color="primary"
            onClick={handleRestart}
            sx={{ marginTop: 2 }}
          >
            Quiz erneut starten
          </Button>
        </Box>
      ) : (
        <Box>
          <Typography variant="h6" gutterBottom>
            Aktuelles Ergebnis: {score} / {sentences.length}
          </Typography>

          <Typography variant="h6" gutterBottom>
            {sentences[currentSentence].text.replace("___", "______")}
          </Typography>

          {/* Antwortmöglichkeiten */}
          <FormControl component="fieldset">
            <RadioGroup
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            >
              {sentences[currentSentence].options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ marginRight: 1 }}
            disabled={!userAnswer}
          >
            Überprüfen
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            onClick={handleNext}
            disabled={!feedback}
          >
            Nächste Frage
          </Button>

          {/* Feedback */}
          {feedback && (
            <Alert
              severity={feedback.includes("Richtige") ? "success" : "error"}
              sx={{ marginTop: 3 }}
            >
              {feedback}
            </Alert>
          )}

          {/* Erklärung */}
          {explanation && (
            <Card sx={{ marginTop: 3 }}>
              <CardContent>
                <Typography variant="body1">
                  <InfoIcon sx={{ marginRight: 1 }} />
                  {explanation}
                </Typography>
              </CardContent>
            </Card>
          )}
        </Box>
      )}
    </Box>
  );
}

export default SentenceFillGame;
