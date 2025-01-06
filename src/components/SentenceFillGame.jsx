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

// Importujemo nove rečenice za Adjektivdeklination
import {
  artiklundpronomen,
  possessivartikel,
  adjektivdeklination,
} from "../utils/words";

const allSentences = {
  artiklundpronomen,
  possessivartikel,
  adjektivdeklination, // Dodana nova kategorija
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
      {!category ? (
        <Box
          sx={{
            maxWidth: 600,
            margin: "auto",
            textAlign: "center",
            padding: 4,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", marginBottom: 3 }}
          >
            Wähle eine Kategorie:
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                padding: "12px 24px",
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                ":hover": {
                  backgroundColor: "#1565c0",
                },
              }}
              onClick={() => handleCategorySelect("artiklundpronomen")}
            >
              Artikelwörter und Pronomen
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#9c27b0",
                color: "#fff",
                padding: "12px 24px",
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                ":hover": {
                  backgroundColor: "#7b1fa2",
                },
              }}
              onClick={() => handleCategorySelect("possessivartikel")}
            >
              Possessivartikel
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#388e3c",
                color: "#fff",
                padding: "12px 24px",
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                ":hover": {
                  backgroundColor: "#2e7d32",
                },
              }}
              onClick={() => handleCategorySelect("adjektivdeklination")}
            >
              Adjektivdeklination
            </Button>
          </Box>
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
        <Box
          sx={{
            maxWidth: 600,
            margin: "auto",
            textAlign: "center",
            padding: 4,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >
            Lückentext-Übungen
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ mb: 3, fontSize: "1.2rem", color: "#555" }}
          >
            Aktuelles Ergebnis: {score} / {sentences.length}
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              mb: 3,
              fontSize: "1.5rem",
              fontWeight: "bold",
              backgroundColor: "#e3f2fd",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {sentences[currentSentence].text.replace("___", "______")}
          </Typography>

          <FormControl component="fieldset" sx={{ mt: 4 }}>
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
                  sx={{
                    mb: 1,
                    ".MuiFormControlLabel-label": {
                      fontSize: "1rem",
                    },
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <Box
            sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={!userAnswer}
              sx={{ px: 3, py: 1 }}
            >
              Überprüfen
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              onClick={handleNext}
              disabled={!feedback}
              sx={{ px: 3, py: 1 }}
            >
              Nächste Frage
            </Button>
          </Box>

          {/* Feedback */}
          {feedback && (
            <Alert
              severity={feedback.includes("Richtige") ? "success" : "error"}
              sx={{ mt: 3, fontSize: "1rem" }}
            >
              {feedback}
            </Alert>
          )}

          {/* Erklärung */}
          {explanation && (
            <Card
              sx={{
                mt: 3,
                backgroundColor: "#fff8e1",
                padding: 2,
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <InfoIcon sx={{ marginRight: 1, color: "#ffa000" }} />
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
