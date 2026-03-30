function generateResponse(userMessage, activityData) {
    
    const empatheticReplies = [
        "Hey, I understand how you're feeling 💙",
        "That sounds a bit overwhelming 😕",
        "I hear you, and it's completely okay to feel this way 🤝",
        "Looks like you're going through a lot right now 💭"
    ];

    // pick random reply
    const randomReply = empatheticReplies[Math.floor(Math.random() * empatheticReplies.length)];

    return `${randomReply}\n${activityData.message}`;
}

module.exports = generateResponse;