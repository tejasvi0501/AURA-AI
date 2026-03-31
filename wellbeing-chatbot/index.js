const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

// ✅ THIS LINE WAS MISSING
app.use(express.static(path.join(__dirname, 'public')));

app.post('/chat', (req, res) => {
    const msg = req.body.message.toLowerCase();

    let reply = "I'm here for you 💙 Tell me what's on your mind.";

    if (msg.includes("stress")) {
        reply = "I understand... try a deep breath with me 🌿";
    } else if (msg.includes("sad")) {
        reply = "It's okay to feel sad 💙 I'm here with you.";
    } else if (msg.includes("hi") || msg.includes("hello")) {
        reply = "Hello 😊 How are you feeling today?";
    }

    res.json({ reply });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});