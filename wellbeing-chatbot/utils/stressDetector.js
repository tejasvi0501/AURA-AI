function detectStress(message) {
    const stressKeywords = [
        "tired",
        "stress",
        "overwhelmed",
        "sad",
        "anxious",
        "can't focus",
        "exhausted",
        "frustrated"
    ];

    let score = 0;

    const lowerMessage = message.toLowerCase();

    // keyword matching
    stressKeywords.forEach(word => {
        if (lowerMessage.includes(word)) {
            score += 2;
        }
    });

    // message length check (long messages = possible stress)
    if (message.length > 80) {
        score += 1;
    }

    // punctuation tone (!!! or ...)
    if (message.includes("!") || message.includes("...")) {
        score += 1;
    }

    return score; // higher score = more stress
}

module.exports = detectStress;