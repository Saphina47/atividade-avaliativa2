const cardValues = [
    'A', 'A', 
    'B', 'B', 
    'C', 'C', 
    'D', 'D', 
    'E', 'E', 
    'F', 'F', 
    'G', 'G', 
    'H', 'H'
];

const images = [
    'images/image1.png',
    'images/image1.png',
    'images/image2.png',
    'images/image2.png',
    'images/image3.png',
    'images/image3.png',
    'images/image4.png',
    'images/image4.png',
    'images/image5.png',
    'images/image5.png',
    'images/image6.png',
    'images/image6.png',
    'images/image7.png',
    'images/image7.png',
    'images/image8.png',
    'images/image8.png'
];

let cards = [];
let flippedCards = [];
let matchedPairs = 0;

function initGame() {
    const gameBoard = document.getElementById('gameBoard');
    const shuffledCards = cardValues.map((value, index) => {
        return { value, image: images[index] };
    }).sort(() => Math.random() - 0.5); // Embaralha as cartas

    shuffledCards.forEach(({ value, image }) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;

        const img = document.createElement('img');
        img.src = image;
        card.appendChild(img);

        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
        cards.push(card);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
}

function checkForMatch() {
    setTimeout(() => {
        const [firstCard, secondCard] = flippedCards;

        if (firstCard.dataset.value === secondCard.dataset.value) {
            matchedPairs++;
            if (matchedPairs === cardValues.length / 2) {
                alert('Você ganhou!');
            }
        } else {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
        }
        flippedCards = [];
    }, 1000);
}

window.onload = initGame;