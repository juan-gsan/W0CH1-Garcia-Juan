const cards = [
  { card: "2◆", value: 1, type: "diamonds" },
  { card: "3◆", value: 2, type: "diamonds" },
  { card: "4◆", value: 3, type: "diamonds" },
  { card: "5◆", value: 4, type: "diamonds" },
  { card: "6◆", value: 5, type: "diamonds" },
  { card: "7◆", value: 6, type: "diamonds" },
  { card: "8◆", value: 7, type: "diamonds" },
  { card: "9◆", value: 8, type: "diamonds" },
  { card: "10◆", value: 9, type: "diamonds" },
  { card: "Jack◆", value: 10, type: "diamonds" },
  { card: "Queen◆", value: 11, type: "diamonds" },
  { card: "King◆", value: 12, type: "diamonds" },
  { card: "Ace◆", value: 13, type: "diamonds" },
  { card: "2♥", value: 1, type: "hearts" },
  { card: "3♥", value: 2, type: "hearts" },
  { card: "4♥", value: 3, type: "hearts" },
  { card: "5♥", value: 4, type: "hearts" },
  { card: "6♥", value: 5, type: "hearts" },
  { card: "7♥", value: 6, type: "hearts" },
  { card: "8♥", value: 7, type: "hearts" },
  { card: "9♥", value: 8, type: "hearts" },
  { card: "10♥", value: 9, type: "hearts" },
  { card: "Jack♥", value: 10, type: "hearts" },
  { card: "Queen♥", value: 11, type: "hearts" },
  { card: "King♥", value: 12, type: "hearts" },
  { card: "Ace♥", value: 13, type: "hearts" },
  { card: "2♠", value: 1, type: "spades" },
  { card: "3♠", value: 2, type: "spades" },
  { card: "4♠", value: 3, type: "spades" },
  { card: "5♠", value: 4, type: "spades" },
  { card: "6♠", value: 5, type: "spades" },
  { card: "7♠", value: 6, type: "spades" },
  { card: "8♠", value: 7, type: "spades" },
  { card: "9♠", value: 8, type: "spades" },
  { card: "10♠", value: 9, type: "spades" },
  { card: "Jack♠", value: 10, type: "spades" },
  { card: "Queen♠", value: 11, type: "spades" },
  { card: "King♠", value: 12, type: "spades" },
  { card: "Ace♠", value: 13, type: "spades" },
  { card: "2♣", value: 1, type: "clubs" },
  { card: "3♣", value: 2, type: "clubs" },
  { card: "4♣", value: 3, type: "clubs" },
  { card: "5♣", value: 4, type: "clubs" },
  { card: "6♣", value: 5, type: "clubs" },
  { card: "7♣", value: 6, type: "clubs" },
  { card: "8♣", value: 7, type: "clubs" },
  { card: "9♣", value: 8, type: "clubs" },
  { card: "10♣", value: 9, type: "clubs" },
  { card: "Jack♣", value: 10, type: "clubs" },
  { card: "Queen♣", value: 11, type: "clubs" },
  { card: "King♣", value: 12, type: "clubs" },
  { card: "Ace♣", value: 13, type: "clubs" },
];

const getRandomCard = () => {
  document.querySelector(".next-card").addEventListener("click", () => {
    randomCard = cards[Math.floor(Math.random() * cards.length)];
    previousCard = randomCard;
    firstCard.textContent = previousCard.card;
    secondCard.textContent = "Higher or Lower?";
    return previousCard.value;
  });
};

const getCurrentHigherCard = () => {
  document.querySelector(".higher").addEventListener("click", () => {
    if (firstCard.textContent !== "Next Card?") {
      currentCard = cards[Math.floor(Math.random() * cards.length)];
      secondCard.textContent = currentCard.card;
      clickHigher = true;
      if (currentCard.value < previousCard.value && clickLower === true) {
        points++;
        return (document.querySelector(".counter").textContent =
          Number(document.querySelector(".counter").textContent) + 1);
      }

      if (currentCard.value < previousCard.value && clickLower === false) {
        return;
      }

      if (currentCard.value > previousCard.value && clickHigher === true) {
        points++;
        return (document.querySelector(".counter").textContent =
          Number(document.querySelector(".counter").textContent) + 1);
      }

      if (currentCard.value > previousCard.value && clickHigher === false) {
        return;
      }
      return currentCard.value;
    }
  });
};

const getCurrentLowerCard = () => {
  document.querySelector(".lower").addEventListener("click", () => {
    if (firstCard.textContent !== "Next Card?") {
      currentCard = cards[Math.floor(Math.random() * cards.length)];
      secondCard.textContent = currentCard.card;
      clickLower = true;
      if (currentCard.value < previousCard.value && clickLower === true) {
        points++;
        return (document.querySelector(".counter").textContent =
          Number(document.querySelector(".counter").textContent) + 1);
      }

      if (currentCard.value < previousCard.value && clickLower === false) {
        return;
      }

      if (currentCard.value > previousCard.value && clickHigher === true) {
        points++;
        return (document.querySelector(".counter").textContent =
          Number(document.querySelector(".counter").textContent) + 1);
      }

      if (currentCard.value > previousCard.value && clickHigher === false) {
        return;
      }
      return currentCard.value;
    }
  });
};

let randomCard;
let currentCard;
let previousCard;
let question;
let points = 0;
let newRound;
let rounds = 0;
let clickLower = false;
let clickHigher = false;

let firstCard = document.querySelector(".card-1");
let secondCard = document.querySelector(".card-2");

getRandomCard();
getCurrentHigherCard();
getCurrentLowerCard();
