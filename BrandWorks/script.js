document.addEventListener("DOMContentLoaded", function() {
    // Emoji List
    const emojis = ["✨", "🌟", "💫", "🌈", "❤️", "✝️", "🙏", "🌿", "🍃", "☀️"];
    const emojiContainer = document.getElementById('emoji-container');

    // Function to create multiple emojis at random positions
    function createEmojis() {
        const emojiCount = 5; // Number of emojis generated at once
        for (let i = 0; i < emojiCount; i++) {
            const emoji = document.createElement('div');
            emoji.className = 'emoji neon';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + 'vw';
            emoji.style.animationDuration = 2 + Math.random() * 3 + 's';
            emojiContainer.appendChild(emoji);

            // Remove emoji after animation ends
            setTimeout(() => {
                emoji.remove();
            }, 5000);
        }
    }

    // Generate emojis every 400ms
    setInterval(createEmojis, 400);

    // Fetch a random image from Unsplash
    const imageUrl = 'https://source.unsplash.com/random/1080x1920/?nature,landscape,bible';
    const container = document.querySelector('.container');
    container.style.backgroundImage = `url(${imageUrl})`;

    // Example verse, explanation, and reference
    const verseText = "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.";
    const referenceText = "Jeremiah 29:11";
    const explanationText = "This verse reminds us that God has a plan for our lives, one that is filled with hope and a future. Trusting in His plan brings peace and purpose.";

    // Set verse, reference, and explanation
    document.getElementById("verse").textContent = verseText;
    document.getElementById("reference").textContent = referenceText;
    document.getElementById("explanation").textContent = explanationText;

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const content = document.getElementById('content');

        loader.classList.add('hidden'); // Fade out loader
        setTimeout(() => {
            content.style.display = 'block'; // Show content after loader fades out
        }, 1000); // Wait for the fade-out transition to complete
    }, 5000); // Simulate a 1.5-second loading time
});
