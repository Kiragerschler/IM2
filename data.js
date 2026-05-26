const CARD_BACK_IMAGE = "Cards/Deckblatt 1.png";

const tarotCards = [
  {
    name: "The Fool",
    type: "major",
    image: "Cards/Fool.png",
    funny: "Hat keinen Plan, aber dafür sehr viel Enthusiasmus."
  },
  {
    name: "The Magician",
    type: "major",
    image: "Cards/Magician.png",
    funny: "Auf gut Deutsch gesagt: „Der Typ hat so viel Selbstvertrauen, dass er wahrscheinlich sogar IKEA-Möbel ohne Anleitung aufbauen kann"
  },
  {
    name: "The High Priestess",
    type: "major",
    image: "Cards/High_Priestess.png",
    funny: "Sie weiss alles – sagt aber nur die Hälfte. Wie deine Mutter, wenn sie schon längst merkt, dass du Mist gebaut hast."
  },
  {
    name: "The Empress",
    type: "major",
    image: "Cards/Empress.png",
    funny: "Die Energie von: Pflanzen leben länger als du, alle fühlen sich wohl bei ihr und sie hat garantiert Snacks dabei."
  },
  {
    name: "The Emperor",
    type: "major",
    image: "Cards/Emperor.png",
    funny: "Der Mensch macht sogar Excel-Tabellen freiwillig – und findet das entspannend."
  },
  {
    name: "The Hierophant",
    type: "major",
    image: "Cards/Hierophant.png",
    funny: "Der Typ sagt dir nicht nur, wie man’s macht – sondern auch, warum man’s schon immer so gemacht hat."
  },
  {
    name: "The Lovers",
    type: "major",
    image: "Cards/Lovers.png",
    funny: "Romantik, Leidenschaft und die ewige Frage: ‘Schreiben wir zuerst oder warten wir cool 2 Stunden?’"
  },
  {
    name: "The Chariot",
    type: "major",
    image: "Cards/Chariot.png",
    meaning: "An erect and princely figure carrying a drawn sword and corresponding, broadly speaking, to the traditional description which I have given in the first part. On the shoulders of the victorious hero are supposed to be the Urim and Thummim. He has led captivity captive; he is conquest on all planes--in the mind, in science, in progress, in certain trials of initiation. He has thus replied to the sphinx, and it is on this account that I have accepted the variation of Éliphas Lévi; two sphinxes thus draw his chariot. He is above all things triumph in the mind.\nIt is to be understood for this reason (a) that the question of the sphinx is concerned with a Mystery of Nature and not of the world of Grace, to which the charioteer could offer no answer; (b) that the planes of his conquest are manifest or external and not within himself; (c) that the liberation which he effects may leave himself in the bondage of the logical understanding; (d) that the tests of initiation through which he has passed in triumph are to be understood physically or rationally; and (e) that if he came to the pillars of that Temple between which the High Priestess is seated, he could not open the scroll called Tora, nor if she questioned him could he answer. He is not hereditary royalty and he is not priesthood.",
    funny: "Volle Energie, null Bremsen. Die Karte schreit basically: ‘Ich zieh das jetzt einfach durch.’"
  },
  {
    name: "Strength",
    type: "major",
    image: "Cards/Strenght.png",
    funny: "Lueg uf de Bode!: Du wirsch hüt 3 Panini-Bildli-Päckli ufem Trottioire finde. (Hoffentlich kei Doppelti!)"
  },
  {
    name: "The Hermit",
    type: "major",
    image: "Cards/Hermit.png",
    funny: "Braucht erstmal Abstand von allem. Wahrscheinlich Handy auf Flugmodus und irgendwo in einer Berghütte."
  },
  {
    name: "Wheel of Fortune",
    type: "major",
    image: "Cards/Wheel_of_Fortune.png",
    funny: "Heute Jackpot, morgen Existenzkrise. Willkommen im Leben."
  },
  {
    name: "Justice",
    type: "major",
    image: "Cards/Justice.png",
    funny: "Karma macht heute Überstunden."
  },
  {
    name: "The Hanged Man",
    type: "major",
    image: "Cards/Hanged_Man.png",
    funny: "Vielleicht liegt das Problem nicht an der Welt… sondern daran, dass du alles komplett falsch anschaust."
  },
  {
    name: "Death",
    type: "major",
    image: "Cards/Death.png",
    funny: "Keine Panik – du stirbst wahrscheinlich nicht. Aber irgendwas in deinem Leben bekommt definitiv ein Software-Update."
  },
  {
    name: "Temperance",
    type: "major",
    image: "Cards/Temperance.png",
    meaning: "A winged angel, with the sign of the sun upon his forehead and on his breast the square and triangle of the septenary. I speak of him in the masculine sense, but the figure is neither male nor female. It is held to be pouring the essences of life from chalice to chalice. It has one foot upon the earth and one upon waters, thus illustrating the nature of the essences. A direct path goes up to certain heights on the verge of the horizon, and above there is a great light, through which a crown is seen vaguely. Hereof is some part of the Secret of Eternal Life, as it is possible to man in his incarnation. All the conventional emblems are renounced herein.\nSo also are the conventional meanings, which refer to changes in the seasons, perpetual movement of life and even the combination of ideas. It is, moreover, untrue to say that the figure symbolizes the genius of the sun, though it is the analogy of solar light, realized in the third part of our human triplicity. It is called Temperance fantastically, because, when the rule of it obtains in our consciousness, it tempers, combines and harmonises the psychic and material natures. Under that rule we know in our rational part something of whence we came and whither we are going.",
    funny: "Die Karte sagt basically: ‘Beruhig dich mal und trink vielleicht erstmal einen Tee.’"
  },
  {
    name: "The Devil",
    type: "major",
    image: "Cards/Devil.png",
    funny: "Du weisst genau, dass es keine gute Idee ist… machst es aber trotzdem."
  },
  {
    name: "The Tower",
    type: "major",
    image: "Cards/Tower.png",
    funny: "Das Universum hat beschlossen: ‘Wir reissen jetzt erstmal alles ein.’"
  },
  {
    name: "The Star",
    type: "major",
    image: "Cards/Star.png",
    meaning: "A great, radiant star of eight rays, surrounded by seven lesser stars--also of eight rays. The female figure in the foreground is entirely naked. Her left knee is on the land and her right foot upon the water. She pours Water of Life from two great ewers, irrigating sea and land. Behind her is rising ground and on the right a shrub or tree, whereon a bird alights. The figure expresses eternal youth and beauty. The star is l'étoile flamboyante, which appears in Masonic symbolism, but has been confused therein. That which the figure communicates to the living scene is the substance of the heavens and the elements. It has been said truly that the mottoes of this card are \"Waters of Life freely\" and \"Gifts of the Spirit.\"\nThe summary of several tawdry explanations says that it is a card of hope. On other planes it has been certified as immortality and interior light. For the majority of prepared minds, the figure will appear as the type of Truth unveiled, glorious in undying beauty, pouring on the waters of the soul some part and measure of her priceless possession. But she is in reality the Great Mother in the Kabalistic Sephira Binah, which is supernal Understanding, who communicates to the Sephiroth that are below in the measure that they can receive her influx.",
    funny: "Endlich mal eine Karte, die nicht klingt wie eine emotionale Achterbahnfahrt."
  },
  {
    name: "The Moon",
    type: "major",
    image: "Cards/Moon.png",
    funny: "Du denkst nachts um 2 Uhr plötzlich über dein ganzes Leben nach. Genau diese Energie."
  },
  {
    name: "The Sun",
    type: "major",
    image: "Cards/Sun.png",
    funny: "Main Character Energy. Alles läuft plötzlich verdächtig gut."
  },
  {
    name: "Judgement",
    type: "major",
    image: "Cards/Judgement.png",
    funny: "Das Universum ruft an und fragt: ‘Und? Was machen wir jetzt aus deinem Leben?’"
  },
  {
    name: "The World",
    type: "major",
    image: "Cards/World.png",
    funny: "Quest abgeschlossen. Achievement freigeschaltet."
  }
];