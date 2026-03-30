const express = require("express");
const path = require("path");
require("dotenv").config();

const detectStress = require("../utils/stressDetector");
const recommendActivity = require("../utils/activityRecommender");
const generateResponse = require("../utils/chatbotResponse");

const app = express();

app.use(express.json());

// FIXED
// Serve static files correctly
app.use(express.static(path.resolve(__dirname)));

// Serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.post("/chat", (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.json({ error: "Message is required" });
    }

    const stressScore = detectStress(message);
    const activity = recommendActivity(stressScore);
    const reply = generateResponse(message, activity);

    res.json({
        userMessage: message,
        stressScore,
        activity: activity.activity,
        botReply: reply
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});