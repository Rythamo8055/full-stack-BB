document.addEventListener('DOMContentLoaded', () => {
    const changeImageBtn = document.getElementById('changeImageBtn');
    const emojiDisplay = document.getElementById('emoji-display');

    const emojis = [
        '😊',
        '😂',
        '😍'
    ];

    let currentIndex = 0;

    changeImageBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % emojis.length;
        emojiDisplay.textContent = emojis[currentIndex];
    });
});