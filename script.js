const page = document.getElementById("page");
const shuffleBtn = document.getElementById("shuffleBtn");
const cardContainer = document.getElementById("cardContainer");
const readingView = document.getElementById("readingView");
const selectedCardWrap = document.getElementById("selectedCardWrap");
const meaningTitle = document.getElementById("meaningTitle");
const meaningText = document.getElementById("meaningText");
const funnyText = document.getElementById("funnyText");
const backBtn = document.getElementById("backBtn");

const API_URL = "https://tarotapi.dev/api/v1/cards/random";

const apiNameAliases = {
  "The Last Judgment": "Judgement"
};

shuffleBtn.addEventListener("click", async () => {
  if (page) {
    page.classList.remove("start-screen");
    page.classList.add("cards-screen");
  }

  if (readingView) readingView.classList.add("hidden");
  if (selectedCardWrap) selectedCardWrap.innerHTML = "";

  shuffleBtn.disabled = true;
  shuffleBtn.textContent = "SHUFFLING...";

  cardContainer.innerHTML = "";

  try {
    const cards = await fetchFourMajorCardsFromApi();
    const fragment = document.createDocumentFragment();

    cards.forEach((card) => {
      fragment.appendChild(createSmallCard(card));
    });

    cardContainer.appendChild(fragment);

    requestAnimationFrame(() => {
      dealCardsSmoothly();
    });
  } catch (error) {
    console.error(error);
    cardContainer.innerHTML = "<p>Karten konnten nicht geladen werden.</p>";
  } finally {
    shuffleBtn.disabled = false;
    shuffleBtn.textContent = "SHUFFLE";
  }
});

if (backBtn) {
  backBtn.addEventListener("click", () => {
    readingView.classList.add("hidden");

    document.querySelectorAll(".card-container .tarot-card").forEach((card) => {
      card.classList.remove("flipped");
    });
  });
}

async function fetchFourMajorCardsFromApi() {
  const cards = [];
  const usedNames = new Set();
  let attempts = 0;

  while (cards.length < 4 && attempts < 120) {
    attempts++;

    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("API Fehler");

    const data = await response.json();
    const apiCard = data.cards?.[0];

    if (!apiCard) continue;
    if (apiCard.type !== "major") continue;

    const localCard = findLocalCard(apiCard.name);
    if (!localCard) continue;

    const localName = localCard.name;

    if (usedNames.has(localName)) continue;
    usedNames.add(localName);

    cards.push({
      name: apiCard.name,
      meaning: apiCard.desc || "No description available.",
      image: localCard.image,
      funny: localCard.funny || "Uf guet Dütsch: Erklärung folgt."
    });
  }

  if (cards.length < 4) {
    throw new Error("Nicht genug Major Karten gefunden.");
  }

  return cards;
}

function findLocalCard(apiName) {
  const localName = apiNameAliases[apiName] || apiName;
  return tarotCards.find((card) => card.name === localName);
}

function createSmallCard(card) {
  const cardEl = document.createElement("article");
  cardEl.className = "tarot-card";

  cardEl.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-back">
        <img src="${CARD_BACK_IMAGE}" alt="Tarot Kartenrückseite">
      </div>

      <div class="card-face card-front">
        <img src="${card.image}" alt="${card.name}">
      </div>
    </div>
  `;

  cardEl.addEventListener("click", () => {
    cardEl.classList.add("flipped");

    setTimeout(() => {
      cardEl.classList.remove("flipped");
      showReading(card);
    }, 450);
  });

  return cardEl;
}

function getResponsiveCardPositions(cardCount) {
  const containerWidth = cardContainer.offsetWidth;
  const firstCard = cardContainer.querySelector(".tarot-card");
  const cardWidth = firstCard ? firstCard.offsetWidth : 245;
  const cardHeight = firstCard ? firstCard.offsetHeight : 390;

  const isSmall = window.innerWidth <= 820;

  if (isSmall && cardCount === 4) {
    const gap = Math.max(12, cardWidth * 0.1);

    const x = cardWidth / 2 + gap / 2;
    const y = cardHeight * 0.88;

    return [
      { x: -x, y: 0, rotate: -2 },
      { x: x, y: 0, rotate: 1 },
      { x: -x, y: y, rotate: -1 },
      { x: x, y: y, rotate: 2 }
    ];
  }

  const gap = Math.max(12, cardWidth * 0.12);
  const x1 = cardWidth * 1.5 + gap * 1.5;
  const x2 = cardWidth * 0.5 + gap * 0.5;

  return [
    { x: -x1, y: 0, rotate: -2 },
    { x: -x2, y: 0, rotate: 1 },
    { x: x2, y: 0, rotate: -1 },
    { x: x1, y: 0, rotate: 2 }
  ];
}



function dealCardsSmoothly() {
  const cards = [...document.querySelectorAll(".card-container .tarot-card")];
  const finalPositions = getResponsiveCardPositions(cards.length);

  cards.forEach((card, index) => {
    const target = finalPositions[index];

    card.getAnimations().forEach((animation) => animation.cancel());

    card.animate(
      [
        {
          opacity: 0,
          transform: `
            translate(-50%, -170px)
            scale(0.68)
            rotate(-8deg)
          `
        },
        {
          opacity: 1,
          transform: `
            translate(-50%, -95px)
            scale(0.78)
            rotate(6deg)
          `,
          offset: 0.18
        },
        {
          opacity: 1,
          transform: `
            translate(calc(-50% + ${target.x * 0.45}px), -35px)
            scale(0.9)
            rotate(${target.rotate * 2}deg)
          `,
          offset: 0.45
        },
        {
          opacity: 1,
          transform: `
            translate(calc(-50% + ${target.x}px), 18px)
            scale(1.03)
            rotate(${target.rotate}deg)
          `,
          offset: 0.82
        },
        {
          opacity: 1,
          transform: `
            translate(calc(-50% + ${target.x}px), ${target.y}px)
            scale(1)
            rotate(${target.rotate}deg)
          `
        }
      ],
      {
        duration: 1050,
        delay: index * 90,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "forwards"
      }
    );
  });
}

function showReading(card) {
  if (!readingView) return;

  selectedCardWrap.innerHTML = "";

  const bigCard = document.createElement("article");
  bigCard.className = "tarot-card flipped";

  bigCard.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-back">
        <img src="${CARD_BACK_IMAGE}" alt="Tarot Kartenrückseite">
      </div>

      <div class="card-face card-front">
        <img src="${card.image}" alt="${card.name}">
      </div>
    </div>
  `;

  selectedCardWrap.appendChild(bigCard);

  meaningTitle.textContent = card.name;
  meaningText.textContent = card.meaning;
  funnyText.textContent = card.funny;

  readingView.classList.remove("hidden");
}

window.addEventListener("resize", () => {
  const cards = document.querySelectorAll(".card-container .tarot-card");

  if (cards.length > 0 && !readingView.classList.contains("hidden")) return;
  if (cards.length > 0) dealCardsSmoothly();
});