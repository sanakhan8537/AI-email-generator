const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");


dotenv.config();
const router = express.Router();

// Gemini ko initialize karo
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

//ek route banana jisme frontend se prompt aae aur gemini ko bhejkr output wapas mile
// Route: /api/generate-email
router.post("/generate-email", async (req, res) => {
  try {
    const { prompt } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ email: text });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});


module.exports = router;