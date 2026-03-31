async function sendMessage() {
    const input = document.querySelector("input");
    const message = input.value;

    if (!message) return;

    addMessage(message, "user");

    input.value = "";

    const response = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    });

    const data = await response.json();

    addMessage(data.reply, "bot");
}

function addMessage(text, sender) {
    const chatBox = document.querySelector(".chat-box");

    const msg = document.createElement("div");
    msg.className = sender === "user" ? "user-msg" : "bot-msg";
    msg.innerText = text;

    chatBox.appendChild(msg);
}