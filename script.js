
const images = [
  './assets/1.jpeg', 
  './assets/2.jpeg',
  './assets/3.jpeg', 
  './assets/4.jpeg', 
  './assets/5.jpeg',
  './assets/6.jpeg', 
  './assets/7.jpeg', 
  './assets/8.jpeg', 
];

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let timer ;
let seconds = 0;

function shuffleCards() {
  const list = images
    .map((value, index) => {
      console.log(value);
      return { value: index, image: value };
    })
    .sort(() => Math.random() - 0.5); // Embaralha as cartas

  console.log(list);
  return list;
}

function addCardsToScreen(cardsList) {
  const gameBoard = document.getElementById("gameBoard");
  cardsList.forEach(({ value, image }) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = value;

    const img = document.createElement("img");
    img.src = image;
    card.appendChild(img);

    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
    cards.push(card);
  });
}

function flipCard() {
  if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
    this.classList.add("flipped");
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
        alert("Você ganhou!");
      }
    } else {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
    }
    flippedCards = [];
  }, 1000);
}

function initGame() {
  const shuffledCards = [...shuffleCards(), ...shuffleCards()];
  console.log(shuffledCards);
  addCardsToScreen(shuffledCards);
}


initGame();

