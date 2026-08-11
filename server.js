// server.js
import express from "express";
import { textSummarization } from './textSummarization.js';
import { chatCompletion } from './chatCompletion.js';

const app = express();

app.use(express.static("public")); // serve your frontend files

app.get("/summarize", async (req, res) => {
  try {
    const text = await textSummarization();
    res.json({ text });
    console.log(text);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Chat summurization failed" });
  }
})

app.get("/chat", async (req, res) => {
     try {
    const text = await chatCompletion();
    const finalText = res.json({ text });
    console.log(text);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Chat completion failed" });
  }
})

app.listen(3000, () => console.log("Server running on localhost:3000"));