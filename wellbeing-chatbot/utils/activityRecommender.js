function recommendActivity(score) {
    if (score >= 4) {
        return {
            activity: "Deep Breathing",
            message: "Let's pause for a moment 🌿 Try a 2-minute deep breathing exercise."
        };
    }

    if (score >= 2) {
        return {
            activity: "Tiny Mission Game",
            message: "You're doing okay, but a quick 1-minute fun task might refresh your mind 🎮"
        };
    }

    return {
        activity: "Continue Learning",
        message: "You're doing great! Keep going 🚀"
    };
}

module.exports = recommendActivity;