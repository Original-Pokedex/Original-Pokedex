const pokemons = [
    {
      name: "Bulbasaur",
      type: "Grass",
      image:
        "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
    },
    {
      name: "Ivysaur",
      type: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    },
    {
      name: "Venosaur",
      type: "Grass",
      image:
        "https://upload.wikimedia.org/wikipedia/en/2/20/Pok%C3%A9mon_Venusaur_art.png",
    },
    {
      name: "Charmander",
      type: "Fire",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Pok%C3%A9mon_Charmander_art.png/220px-Pok%C3%A9mon_Charmander_art.png",
    },
    {
      name: "Charmeleon",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    },
    {
      name: "Charizard",
      type: "Fire",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Pok%C3%A9mon_Charizard_art.png/220px-Pok%C3%A9mon_Charizard_art.png",
    },
    {
      name: "Squirtle",
      type: "Water",
      image:
        "https://upload.wikimedia.org/wikipedia/en/5/59/Pok%C3%A9mon_Squirtle_art.png",
    },
    {
      name: "Wartortle",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    },
    {
      name: "Blastoise",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    },
    {
      name: "Caterpie",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    },
    {
      name: "Metapod",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    },
    {
      name: "Butterfree",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    },
    {
      name: "Weedle",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    },
    {
      name: "Kakuna",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
    },
    {
      name: "Beedrill",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
    },
    {
      name: "Pidgey",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    },
    {
      name: "Pidgeotto",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
    },
    {
      name: "Pidgeot",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
    },
    {
      name: "Rattata",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    },
    {
      name: "Raticate",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
    },
    {
      name: "Spearow",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
    },
    {
      name: "Fearow",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
    },
    {
      name: "Ekans",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    },
    {
      name: "Arbok",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    },
    {
      name: "Pikachu",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    },
    {
      name: "Raichu",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
    },
    {
      name: "Sandshrew",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
    },
    {
      name: "Sandslash",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
    },
    {
      name: "Nidoran",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",
    },
    {
      name: "Nidorina",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
    },
    {
      name: "Nidoqueen",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png",
    },
    {
      name: "Nidoran",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png",
    },
    {
      name: "Nidorino",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png",
    },
  
    {
      name: "Nidoking",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png",
    },
    {
      name: "Clefairy",
      type: "Fairy",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
    },
    {
      name: "Clefable",
      type: "Fairy",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
    },
    {
      name: "Vulpix",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
    },
    {
      name: "Ninetales",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
    },
    {
      name: "Jigglypuff",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    },
    {
      name: "Wigglytuff",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png",
    },
    {
      name: "Zubat",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png",
    },
    {
      name: "Golbat",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png",
    },
    {
      name: "Oddish",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png",
    },
    {
      name: "Gloom",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png",
    },
    {
      name: "Vileplume",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png",
    },
    {
      name: "Paras",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png",
    },
    {
      name: "Parasect",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png",
    },
    {
      name: "Venonat",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png",
    },
    {
      name: "Venomoth",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png",
    },
    {
      name: "Diglett",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
    },
    {
      name: "Dugtrio",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png",
    },
    {
      name: "Meowth",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
    },
    {
      name: "Persian",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png",
    },
    {
      name: "Psyduck",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
    },
    {
      name: "Golduck",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
    },
    {
      name: "Mankey",
      type: "Fighting",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png",
    },
    {
      name: "Primeape",
      type: "Fighting",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png",
    },
    {
      name: "Growlithe",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
    },
    {
      name: "Arcanine",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png",
    },
    {
      name: "Poliwag",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
    },
    {
      name: "Poliwhirl",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png",
    },
    {
      name: "Poliwrath",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png",
    },
    {
      name: "Abra",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png",
    },
    {
      name: "Kadabra",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png",
    },
    {
      name: "Alakazam",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",
    },
    {
      name: "Machop",
      type: "Fighting",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png",
    },
    {
      name: "Machoke",
      type: "Fighting",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png",
    },
    {
      name: "Machamp",
      type: "Fighting",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png",
    },
    {
      name: "Bellsprout",
      type: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png",
    },
    {
      name: "Weepinbell",
      type: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png",
    },
    {
      name: "Victreebel",
      type: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png",
    },
    {
      name: "Tentacool",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png",
    },
    {
      name: "Tentacruel",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png",
    },
    {
      name: "Geodude",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",
    },
    {
      name: "Graveler",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png",
    },
    {
      name: "Golem",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png",
    },
    {
      name: "Ponyta",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png",
    },
    {
      name: "Rapidash",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png",
    },
    {
      name: "Slowpoke",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png",
    },
    {
      name: "Slowbro",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png",
    },
    {
      name: "Magnemite",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png",
    },
    {
      name: "Magneton",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png",
    },
    {
      name: "Farfetch'd",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png",
    },
    {
      name: "Doduo",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png",
    },
    {
      name: "Dodrio",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png",
    },
    {
      name: "Seel",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png",
    },
    {
      name: "Dewgong",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png",
    },
    {
      name: "Grimer",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png",
    },
    {
      name: "Muk",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png",
    },
    {
      name: "Shellder",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png",
    },
    {
      name: "Cloyster",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png",
    },
    {
      name: "Gastly",
      type: "Ghost",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png",
    },
    {
      name: "Haunter",
      type: "Ghost",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png",
    },
    {
      name: "Gengar",
      type: "Ghost",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
    },
    {
      name: "Onix",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",
    },
    {
      name: "Drowzee",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png",
    },
    {
      name: "Hypno",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png",
    },
    {
      name: "Krabby",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png",
    },
    {
      name: "Kingler",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png",
    },
    {
      name: "Voltorb",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png",
    },
    {
      name: "Electrode",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png",
    },
    {
      name: "Exeggcute",
      type: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png",
    },
    {
      name: "Exeggutor",
      type: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png",
    },
    {
      name: "Cubone",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png",
    },
    {
      name: "Marowak",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png",
    },
    {
      name: "Hitmonlee",
      type: "Fighting",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png",
    },
    {
      name: "Hitmonchan",
      type: "Fighting",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png",
    },
    {
      name: "Lickitung",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png",
    },
    {
      name: "Koffing",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png",
    },
    {
      name: "Weezing",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png",
    },
    {
      name: "Rhyhorn",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png",
    },
    {
      name: "Rhydon",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png",
    },
    {
      name: "Chansey",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png",
    },
    {
      name: "Tangela",
      type: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png",
    },
    {
      name: "Kangaskhan",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png",
    },
    {
      name: "Horsea",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png",
    },
    {
      name: "Seadra",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png",
    },
    {
      name: "Goldeen",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png",
    },
    {
      name: "Seaking",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png",
    },
    {
      name: "Staryu",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png",
    },
    {
      name: "Starmie",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png",
    },
    {
      name: "Mr. Mime",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png",
    },
    {
      name: "Scyther",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png",
    },
    {
      name: "Jynx",
      type: "Ice",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png",
    },
    {
      name: "Electabuzz",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png",
    },
    {
      name: "Magmar",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png",
    },
    {
      name: "Pinsir",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png",
    },
    {
      name: "Tauros",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png",
    },
    {
      name: "Magikarp",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    },
    {
      name: "Gyarados",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    },
    {
      name: "Lapras",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png",
    },
    {
      name: "Ditto",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
    },
    {
      name: "Eevee",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    },
    {
      name: "Vaporeon",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
    },
    {
      name: "Jolteon",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png",
    },
    {
      name: "Flareon",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",
    },
    {
      name: "Porygon",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png",
    },
    {
      name: "Omanyte",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png",
    },
    {
      name: "Omastar",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png",
    },
    {
      name: "Kabuto",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png",
    },
    {
      name: "Kabutops",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png",
    },
    {
      name: "Aerodactyl",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png",
    },
    {
      name: "Snorlax",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    },
    {
      name: "Articuno",
      type: "Ice",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png",
    },
    {
      name: "Zapdos",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png",
    },
    {
      name: "Moltres",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png",
    },
    {
      name: "Dratini",
      type: "Dragon",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png",
    },
    {
      name: "Dragonair",
      type: "Dragon",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png",
    },
    {
      name: "Dragonite",
      type: "Dragon",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
    },
    {
      name: "Mewtwo",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    },
    {
      name: "Mew",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    },
  ];
  
  const users = [
    {
      username: "brett",
      name: "Brett BePassed",
      password: "brettpass",
      email: "brett@example.com",
      isAdmin: false,
    },
    {
      username: "antonette",
      name: "Antonette Marie",
      password: "headfirst",
      email: "keepyourheadonstraight@example.com",
      isAdmin: false,
    },
    {
      username: "karianne",
      name: "Karianne Krum",
      password: "scarykary",
      email: "dontbefrightened@example.com",
      isAdmin: false,
    },
    {
      username: "dantestAdmin",
      name: "Daniel Wen",
      password: "AdminTest",
      email: "admindan@example.com",
      isAdmin: true,
    },
  ];
  
  module.exports = {
    pokemons,
    users,
  };
  