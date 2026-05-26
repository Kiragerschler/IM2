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
  const response = await fetch("https://tarotapi.dev/api/v1/cards");

  if (!response.ok) {
    throw new Error("API Fehler");
  }

  const data = await response.json();

  const majorCards = data.cards
    .filter((apiCard) => apiCard.type === "major")
    .map((apiCard) => {
      const localCard = findLocalCard(apiCard.name);
      if (!localCard) return null;

      return {
        name: apiCard.name,
        meaning: apiCard.desc || "No description available.",
        image: localCard.image,
        funny: localCard.funny || "Uf guet Dütsch: Erklärung folgt."
      };
    })
    .filter(Boolean);

  return majorCards
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);
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
  const firstCard = cardContainer.querySelector(".tarot-card");

  const cardWidth = firstCard ? firstCard.offsetWidth : 245;
  const cardHeight = firstCard ? firstCard.offsetHeight : 390;
  const containerWidth = cardContainer.offsetWidth;

  const isTwoRows = containerWidth < cardWidth * 4.3;

  if (isTwoRows && cardCount === 4) {
    const gapX = Math.max(8, cardWidth * 0.08);
    const gapY = Math.max(10, cardHeight * 0.04);

    return [
      { x: -(cardWidth / 2 + gapX / 2), y: 0, rotate: -2 },
      { x: cardWidth / 2 + gapX / 2, y: 0, rotate: 1 },
      { x: -(cardWidth / 2 + gapX / 2), y: cardHeight + gapY, rotate: -1 },
      { x: cardWidth / 2 + gapX / 2, y: cardHeight + gapY, rotate: 2 }
    ];
  }

  const gap = Math.max(10, cardWidth * 0.08);

  return [
    { x: -(cardWidth * 1.5 + gap * 1.5), y: 0, rotate: -2 },
    { x: -(cardWidth * 0.5 + gap * 0.5), y: 0, rotate: 1 },
    { x: cardWidth * 0.5 + gap * 0.5, y: 0, rotate: -1 },
    { x: cardWidth * 1.5 + gap * 1.5, y: 0, rotate: 2 }
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
          transform: `translate(-50%, -220px) scale(0.65) rotate(-10deg)`
        },
        {
          opacity: 1,
          transform: `translate(-50%, -120px) scale(0.75) rotate(4deg)`,
          offset: 0.22
        },
        {
          opacity: 1,
          transform: `translate(-50%, -40px) scale(0.85) rotate(0deg)`,
          offset: 0.45
        },
        {
          opacity: 1,
          transform: `translate(calc(-50% + ${target.x}px), ${target.y}px) scale(1) rotate(${target.rotate}deg)`
        }
      ],
      {
        duration: 900,
        delay: index * 170,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
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

function updateCardPositionsInstantly() {
  const cards = [...document.querySelectorAll(".card-container .tarot-card")];

  if (cards.length === 0) return;
  if (readingView && !readingView.classList.contains("hidden")) return;

  const finalPositions = getResponsiveCardPositions(cards.length);

  cards.forEach((card, index) => {
    const target = finalPositions[index];

    card.getAnimations().forEach((animation) => animation.cancel());

    card.style.opacity = "1";
    card.style.transform = `
      translate(calc(-50% + ${target.x}px), ${target.y}px)
      scale(1)
      rotate(${target.rotate}deg)
    `;
  });
}

let resizeTimer;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    updateCardPositionsInstantly();
  }, 80);
});