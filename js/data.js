const CARD_BACK_IMAGE = "Cards/Deckblatt 1.png";

const tarotCards = [
  {
    name: "The Fool",
    type: "major",
    image: "Cards/Fool.png",
    funny: "Du laufsch hüt so verpeilt dur d’Gegend, dass voll de Pfoste küssisch, wils uf dis Handy luegsch."
  },
  {
    name: "The Magician",
    type: "major",
    image: "Cards/Magician.png",
    funny: "Hüt fallt dir alles spielerisch liecht, du würdsch hütsogar s IKEA-Regal ohni Ahleitig chöne zemebaue."
  },
  {
    name: "The High Priestess",
    type: "major",
    image: "Cards/High_Priestess.png",
    funny: "Dis Buchgfühl seit: 'Iss es nöd.' Du issisch es trotzdem. S'WC wird hüt din beste Kolleg."
  },
  {
    name: "The Empress",
    type: "major",
    image: "Cards/Empress.png",
    funny: "Mega Tag: Du chasch hüt 5 flauschigi Chatze strichle und alli schnurred so richtig luut."
  },
  {
    name: "The Emperor",
    type: "major",
    image: "Cards/Emperor.png",
    funny: "Du gsehsch hüt öpper, wo du absolut nöd willsch treffe, und muesch dich im Supermarkt extrem unuffällig hinter de Müesli-Schachtle verstecke."
  },
  {
    name: "The Hierophant",
    type: "major",
    image: "Cards/Hierophant.png",
    funny: "En wildfremde Rentner wird dich im Bus 10 Minute lang belehre, worum d'Jugend vo hüt nüt meh chan."
  },
  {
    name: "The Lovers",
    type: "major",
    image: "Cards/Lovers.png",
    funny: "Du triffsch hüt öpper, wo du mega süss findsch aber denn findsch use, dass die Person Ananas uf d Pizza tuet. Viel Glück bim Entscheide, ob das dini Zuekunft isch!’"
  },
  {
    name: "The Chariot",
    type: "major",
    image: "Cards/Chariot.png",
    meaning: "An erect and princely figure carrying a drawn sword and corresponding, broadly speaking, to the traditional description which I have given in the first part. On the shoulders of the victorious hero are supposed to be the Urim and Thummim. He has led captivity captive; he is conquest on all planes--in the mind, in science, in progress, in certain trials of initiation. He has thus replied to the sphinx, and it is on this account that I have accepted the variation of Éliphas Lévi; two sphinxes thus draw his chariot. He is above all things triumph in the mind.\nIt is to be understood for this reason (a) that the question of the sphinx is concerned with a Mystery of Nature and not of the world of Grace, to which the charioteer could offer no answer; (b) that the planes of his conquest are manifest or external and not within himself; (c) that the liberation which he effects may leave himself in the bondage of the logical understanding; (d) that the tests of initiation through which he has passed in triumph are to be understood physically or rationally; and (e) that if he came to the pillars of that Temple between which the High Priestess is seated, he could not open the scroll called Tora, nor if she questioned him could he answer. He is not hereditary royalty and he is not priesthood.",
    funny: "Du fühlsh dich hüt unschlagbar, wie de Main Character imene Actionfilm. Du chöntsch Bäum usriisse…oder zumindest s'Glas Essiggurke ganz ellei ufmache, ohni d'Hilf vo dim Mitbewohner. "
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
    funny: "Du hocksch wiedermol de ganz Obig allei dihei, will du zu spot erst umegfrögt hesch ob wer ziit het. Sälber tschuld."
  },
  {
    name: "Wheel of Fortune",
    type: "major",
    image: "Cards/Wheel_of_Fortune.png",
    funny: "De Automat git dir hüt usem nüt zwei Packige Gummibärli statt nur einere. Gönn dir!"
  },
  {
    name: "Justice",
    type: "major",
    image: "Cards/Justice.png",
    funny: "Achtung, Achtung! Karma macht hüt Überstunde!"
  },
  {
    name: "The Hanged Man",
    type: "major",
    image: "Cards/Hanged_Man.png",
    funny: "Dis Internet wird sich hüt de ganz Abig ufhänke. Und zwor genau denn, wenn d'Serie am spannendste isch."
  },
  {
    name: "Death",
    type: "major",
    image: "Cards/Death.png",
    funny: "Kei Panik, du sterbsch nöd gad. Aber dini Lieblings-Zimmerpflanze gibt hüt wohl endgültig dä Geist uf. Ziit für en würdevolle Abschied im Kompost."
  },
  {
    name: "Temperance",
    type: "major",
    image: "Cards/Temperance.png",
    meaning: "A winged angel, with the sign of the sun upon his forehead and on his breast the square and triangle of the septenary. I speak of him in the masculine sense, but the figure is neither male nor female. It is held to be pouring the essences of life from chalice to chalice. It has one foot upon the earth and one upon waters, thus illustrating the nature of the essences. A direct path goes up to certain heights on the verge of the horizon, and above there is a great light, through which a crown is seen vaguely. Hereof is some part of the Secret of Eternal Life, as it is possible to man in his incarnation. All the conventional emblems are renounced herein.\nSo also are the conventional meanings, which refer to changes in the seasons, perpetual movement of life and even the combination of ideas. It is, moreover, untrue to say that the figure symbolizes the genius of the sun, though it is the analogy of solar light, realized in the third part of our human triplicity. It is called Temperance fantastically, because, when the rule of it obtains in our consciousness, it tempers, combines and harmonises the psychic and material natures. Under that rule we know in our rational part something of whence we came and whither we are going.",
    funny: "Hüt isch din 'Slow-Motion'-Tag. Fahr mal en Gang abe, mach der en Tee und ignorier d'Wält. Aber pass uf: Wenn no meh abefahrsch, wirsch eins mit em Sofa und muesch det übernachte."
  },
  {
    name: "The Devil",
    type: "major",
    image: "Cards/Devil.png",
    funny: "Du wirsch hüt schwach und chaufsch öppis huere Düürs und Unnötigs, wo dänn nur im Egge staubt."
  },
  {
    name: "The Tower",
    type: "major",
    image: "Cards/Tower.png",
    funny: "Dis Gonfibrot wird dir heute leider mit der Gonfi-Siite nach abe uf de Tisch flüüge. Soooorryyy."
  },
  {
    name: "The Star",
    type: "major",
    image: "Cards/Star.png",
    meaning: "A great, radiant star of eight rays, surrounded by seven lesser stars--also of eight rays. The female figure in the foreground is entirely naked. Her left knee is on the land and her right foot upon the water. She pours Water of Life from two great ewers, irrigating sea and land. Behind her is rising ground and on the right a shrub or tree, whereon a bird alights. The figure expresses eternal youth and beauty. The star is l'étoile flamboyante, which appears in Masonic symbolism, but has been confused therein. That which the figure communicates to the living scene is the substance of the heavens and the elements. It has been said truly that the mottoes of this card are \"Waters of Life freely\" and \"Gifts of the Spirit.\"\nThe summary of several tawdry explanations says that it is a card of hope. On other planes it has been certified as immortality and interior light. For the majority of prepared minds, the figure will appear as the type of Truth unveiled, glorious in undying beauty, pouring on the waters of the soul some part and measure of her priceless possession. But she is in reality the Great Mother in the Kabalistic Sephira Binah, which is supernal Understanding, who communicates to the Sephiroth that are below in the measure that they can receive her influx.",
    funny: "Du häsch hüt en richtige Geischtesblitz für es Projekt, wo dich scho lang blockiert het."
  },
  {
    name: "The Moon",
    type: "major",
    image: "Cards/Moon.png",
    funny: "Du findsch hüt d’Antwort uf e wichtigi Frog i dim Traum – aber wenn ufwachsch, weisch nur no, dass es öpis mit emne Pinguin z'tue het."
  },
  {
    name: "The Sun",
    type: "major",
    image: "Cards/Sun.png",
    funny: "Du bechunsch hüt es Kompliment, wo dich so richtig zum Strahle bringt und dir de ganz Tag rettet."
  },
  {
    name: "Judgement",
    type: "major",
    image: "Cards/Judgement.png",
    funny: "Du findsch hüt öpis mega Wichtigs wieder, wo du eigentlich scho lang abgschriebe häsch."
  },
  {
    name: "The World",
    type: "major",
    image: "Cards/World.png",
    funny: "Du hesch s'Gfühl, du hegsch alles im Griff – bis am obet mörksch, dass d'Wösch sit zwei Täg nass i de Maschine liit und stinkt."
  }
];