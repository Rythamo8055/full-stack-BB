document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const timerDisplay = document.querySelector('.timer');
    const movesDisplay = document.querySelector('.moves');
    const starsDisplay = document.querySelector('.stars');
    const resetButton = document.querySelector('.reset-button');
    const difficultyButtons = document.querySelectorAll('.difficulty-btn');
    const modal = document.getElementById('winModal');
    const closeButton = document.querySelector('.close-button');
    const playAgainBtn = document.getElementById('playAgainBtn');
    const finalTime = document.getElementById('finalTime');
    const finalMoves = document.getElementById('finalMoves');
    const finalStars = document.getElementById('finalStars');

    let cards = [];
    let cardValues = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;
    let timer = 0;
    let timerInterval;
    let currentDifficulty = 'easy'; 
    let isLocked = false;

    // --- IMPORTANT ---
    // Use relative paths. These files MUST be in an 'assets' folder.
    // You need 10 unique images for all difficulty levels.
    const allCardTypes = [
        'assets/image-1.png', 'assets/image-2.png', 'assets/image-3.png',
        'assets/image-4.png', 'assets/image-5.png', 'assets/image-6.png',
        'assets/image-7.png', 'assets/image-8.png', 'assets/image-9.png',
        'assets/image-10.png'
    ];

    const difficultySettings = {
        easy: { pairs: 6, class: 'easy' },
        medium: { pairs: 8, class: 'medium' },
        hard: { pairs: 10, class: 'hard' }
    };

    function generateCardValues(pairs) {
        const values = [];
        const shuffledTypes = shuffleArray([...allCardTypes]);
        // Ensure we don't request more pairs than available images
        const numPairs = Math.min(pairs, allCardTypes.length);
        for (let i = 0; i < numPairs; i++) {
            values.push(shuffledTypes[i], shuffledTypes[i]);
        }
        return values;
    }
    
    function initializeGame() {
        isLocked = false;
        const settings = difficultySettings[currentDifficulty];
        gameBoard.className = 'game-board ' + settings.class;
        cardValues = generateCardValues(settings.pairs);
        cards = shuffleArray([...cardValues]);

        gameBoard.innerHTML = '';
        flippedCards = [];
        matchedPairs = 0;
        moves = 0;
        
        resetTimer();
        movesDisplay.textContent = `Moves: ${moves}`;
        updateStarRating();

        cards.forEach(value => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.value = value;

            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front"></div>
                    <div class="card-back">
                        <img src="${value}" alt="Card Image">
                    </div>
                </div>
            `;
            card.addEventListener('click', () => handleCardClick(card));
            gameBoard.appendChild(card);
        });
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function handleCardClick(clickedCard) {
        if (isLocked || clickedCard.classList.contains('flipped') || clickedCard.classList.contains('matched')) {
            return;
        }

        if (moves === 0 && flippedCards.length === 0) {
            startTimer();
        }

        clickedCard.classList.add('flipped');
        flippedCards.push(clickedCard);

        if (flippedCards.length === 2) {
            incrementMoves();
            checkForMatch();
        }
    }

    function checkForMatch() {
        isLocked = true;
        const [card1, card2] = flippedCards;

        if (card1.dataset.value === card2.dataset.value) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedPairs++;
            flippedCards = [];
            isLocked = false;
            if (matchedPairs === cardValues.length / 2) {
                endGame();
            }
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                flippedCards = [];
                isLocked = false;
            }, 1000);
        }
    }
    
    function startTimer() {
        if (!timerInterval) {
            timerInterval = setInterval(() => {
                timer++;
                timerDisplay.textContent = `Time: ${timer}s`;
            }, 1000);
        }
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        timer = 0;
        timerDisplay.textContent = `Time: ${timer}s`;
    }

    function incrementMoves() {
        moves++;
        movesDisplay.textContent = `Moves: ${moves}`;
        updateStarRating();
    }

    function updateStarRating() {
        const settings = difficultySettings[currentDifficulty];
        const highPerfMoves = settings.pairs * 1.5;
        const midPerfMoves = settings.pairs * 2.2;
        
        let stars = '⭐⭐⭐';
        if (moves > midPerfMoves) {
            stars = '⭐';
        } else if (moves > highPerfMoves) {
            stars = '⭐⭐';
        }
        starsDisplay.innerHTML = stars;
    }

    function endGame() {
        clearInterval(timerInterval);
        finalTime.textContent = timer;
        finalMoves.textContent = moves;
        finalStars.innerHTML = starsDisplay.innerHTML;
        modal.style.display = 'block';
    }

    function changeDifficulty(difficulty) {
        currentDifficulty = difficulty;
        difficultyButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.difficulty === difficulty);
        });
        initializeGame();
    }

    // Event Listeners
    resetButton.addEventListener('click', initializeGame);
    closeButton.addEventListener('click', () => modal.style.display = 'none');
    playAgainBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        initializeGame();
    });
    difficultyButtons.forEach(button => {
        button.addEventListener('click', () => changeDifficulty(button.dataset.difficulty));
    });

    // Initial game setup
    changeDifficulty('easy');
});