const allCardsContainer = document.getElementById("allCardsContainer");

if (allCardsContainer) {
  const fragment = document.createDocumentFragment();

  tarotCards.forEach((card, index) => {
    const cardElement = document.createElement("article");
    cardElement.className = "gallery-card";
    cardElement.style.setProperty("--card-index", index);

    cardElement.innerHTML = `
      <div class="gallery-card-inner">
        <div class="gallery-card-face gallery-card-back">
          <img src="${CARD_BACK_IMAGE}" alt="Tarot Kartenrückseite">
        </div>

        <div class="gallery-card-face gallery-card-front">
          <img src="${card.image}" alt="${card.name}">
        </div>
      </div>
    `;

    fragment.appendChild(cardElement);
  });

  allCardsContainer.appendChild(fragment);
}