const pokemons = [
    {
      name: "Bulbasaur",
      type: "Grass",
      image:
        "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
      description: "It uses the nutrients that are stored in the seed on its back in order to grow. The reception of Bulbasaur has been largely positive and it often appears in 'top Pokémon lists'.[3][4] Its English name is a portmanteau of 'bulb' and 'dinosaur'."
    },
    {
      name: "Ivysaur",
      type: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
      description: "When it's exposed to sunlight, the seed, now a bud, grows so much that it apparently loses the ability to stand on its hind legs. It grows by drawing in energy and when a wafting scent fills the area and it spends more time in the sun, it's ready to evolve. To support this weight, its legs grow thicker in size and strength. Ivysaur is a playable character in Super Smash Bros. Brawl and Super Smash Bros. Ultimate as a part of the Pokémon Trainer fighter. Its English name is a portmanteau of ivy and dinosaur."
    },
    {
      name: "Venosaur",
      type: "Grass",
      image:
        "https://upload.wikimedia.org/wikipedia/en/2/20/Pok%C3%A9mon_Venusaur_art.png",
      description: "Its English name is a portmanteau of Venus (relating to the Venus flytrap) and dinosaur. It is based on the Pareiasaur. It is the mascot of Pokémon Green and LeafGreen.[7] It's always on the move to seek sunlight so it can absorb it for energy. When it does this, it tends to lay still. The aroma from the flower it now has on its back can sooth and calm people down. It's said that if a Venusaur gets enough sunlight, its flower will take on vivid coloration. As a result, it's way more powerful in the summer time. After a rainy day, its flower will smell stronger. The scent attracts other Pokemon."
    },
    {
      name: "Charmander",
      type: "Fire",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Pok%C3%A9mon_Charmander_art.png/220px-Pok%C3%A9mon_Charmander_art.png",
      description: "Charmander is a bipedal, salamander-like creature with a flame at the tip of its tail. Its English name is a portmanteau of char and salamander. Preferring hot places, there is a flame at the tip of is tail. Even newborns have a flame, though, unfamiliar with fire, they sometimes accidentally burn themselves. When it rains, you can see smoke coming from it, and it makes a sound too, though you'll have to be in a quiet place to hear it. The flame determines its vitality and emotions, the brighter it is, the healthier it is. Similarly when its tail is wavering, it is happy and when blazing, it is angry. If its flame were to ever go out, it would die."
    },
    {
      name: "Charmeleon",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
      description: "Charmeleon is similar to Charmander yet larger. Its English name is a portmanteau of char and chameleon. It's a very feisty pokemon, and fights can excite it, causing bluish white flames to spew. It swings its tail around causing unbearable temperatures. It also uses its razor sharp claws to attack as well. It constantly seeks tough opponents and it calms down only when it wins. In rocky mountains where they live, the night sky looks like stars due to their fiery tails."
    },
    {
      name: "Charizard",
      type: "Fire",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Pok%C3%A9mon_Charizard_art.png/220px-Pok%C3%A9mon_Charizard_art.png",
      description: "It is a playable character as a part of the Pokémon Trainer fighter in Super Smash Bros. Brawl and Super Smash Bros. Ultimate, as well as a standalone fighter in Super Smash Bros. for Nintendo 3DS and Wii U. It is also the mascot of Pokémon Red and FireRed. Its fire is hot enough to melt boulders, and it's been known to start forest fires accidentally. When breathing fire which reaches great temperatures, it inflicts terrible pain on its foes, and the flame at the end of its tail burns more fiercely, though it will never use its fiery breath on foes weaker than itself. It quickly melt glaciers weighing more than 10,000 tons. If it becomes furious, its flames become bluish-white, and its wings can let it soar up to 4,600 feet as it flies in search of stronger opponents. It's said that it fire burns hotter if it has experienced harsher battles. It gains the Dragon type upon Mega Evolving into Mega Charizard X. Its English name is a portmanteau of char and lizard."
    },
    {
      name: "Squirtle",
      type: "Water",
      image:
        "https://upload.wikimedia.org/wikipedia/en/5/59/Pok%C3%A9mon_Squirtle_art.png",
      description: "It is a playable character in Super Smash Bros. Brawl and Super Smash Bros. Ultimate as a part of the Pokémon Trainer fighter. Its English name is a portmanteau of squirt and turtle. It is one of the Kanto starter Pokémon.[9] When born, its back swells into a shell which after some time will become resilient, and it takes time for the shell to harden. When it feels threatened, it tucks in its limbs and hides in its shell. Squirtle's shell is not merely used for protection as the shell's rounded shape and the grooves on its surface help minimize water resistance, enabling this Pokémon to swim at high speeds. It can spray a powerful foam from its mouth by retracting its long neck and vigorously shooting water out."
    },
    {
      name: "Wartortle",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
      description: "Its English name is a portmanteau of wart, tortoise, and turtle. Its tail is large and covered with a rich, thick fur. Its tail becomes increasingly deeper in color as Wartortle ages. Legends say it can live up to 1,000 years old. Wartortle was originally intended to have an entirely different final evolution that shared a closer design."
    },
    {
      name: "Blastoise",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
      description: "Its English name is a portmanteau of blast and tortoise. It is the mascot of Pokémon Blue.[13] In early stages of Red and Green's development, Blastoise was originally separate from the Squirtle line and was called Caravaggio. A Blastoise trading card, which was originally made as a test print before the commercial English cards, was sold for $360,000 in 2021.[14] The rocket cannons on its shell fire jets of water capable of punching holes through thick steel."
    },
    {
      name: "Caterpie",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
      description: "To avoid predators, it releases an odor that makes bird-type Pokémon hesitant to hunt it. Its appearance is based on the Eastern Tiger Swallowtail."
    },
    {
      name: "Metapod",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
      description: "The outer shell of Metapod is extremely hard, but the insides are soft due to the changes that it is undergoing. It may not move for more than two weeks. Ume Aoki, a Japanese cartoonist who is famous for her work on the manga Hidamari Sketch and the anime Puella Magi Madoka Magica, utilizes a likeness of herself cosplaying as a Metapod in her drawn works."
    },
    {
      name: "Butterfree",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
      description: "It rubs honey onto the hairs on its legs to carry it back to its nest. In battle, it flaps its wings at great speed to release spores and powders onto opponents. Its Gigantamax form is a tremendous size with huge, turquoise wings and resembles Mothra of the Godzilla franchise. It sheds toxic flakes of crystallized Gigantamax energy."
    },
    {
      name: "Weedle",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
      description: "Its stinger is poisonous. While it does not like to fight, Weedle can protect itself, if only for a short while."
    },
    {
      name: "Kakuna",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
      description: "Similar to Metapod, its shell is extremely hard, but the insides are soft due to its metamorphosis. Kakuna also doesn't move as much. Kakuna typically attach to trees in clusters and feel hot to the touch."
    },
    {
      name: "Beedrill",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
      description: "Beedrill are highly aggressive and will violently swarm and sting anyone who approaches their hive. Beedrill appear as large hornets with spikes on their forearms."
    },
    {
      name: "Pidgey",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
      description: "Pidgey is the common bird of Kanto. It hunts bug Pokémon until they scurry away. It is considered as an alternative version of Spearow and a rival to it."
    },
    {
      name: "Pidgeotto",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
      description: "Pidgeotto was the second Pokémon that Ash Ketchum caught on his journey in the anime. It constantly flies around its large territory in search of prey and often squabbles with other Pidgeotto over territory."
    },
    {
      name: "Pidgeot",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
      description: "Most trainers choose Pidgeot as their Pokémon due to their striking, beautiful feathers. Pidgeots tend to be very large in size. Its highly decorated plumage is used to intimidate enemies. It races through the skies at Mach-2 speed."
    },
    {
      name: "Rattata",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
      description: "Its teeth grow long overtime, so it has to gnaw on logs, houses, telephone poles, and more, so it is often seen as a pest. Rattata has an Alolan form that is a Dark/Normal type."
    },
    {
      name: "Raticate",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
      description: "Raticate commands groups of Rattatas to gather food. Like Rattata, it has to whittle its teeth down, but as its teeth are much stronger, it requires harder objects such as steel and rocks. Like Rattata, Raticate has an Alolan form that is a Dark/Normal type."
    },
    {
      name: "Spearow",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
      description: "It eats bugs in grasslands and has to flap its short wings at high-speed to stay airborne. Spearows have short temperaments, and tend to swarm perceived enemies in large flocks. Ash Ketchum attempted to catch a Spearow without the help of his Pikachu, leading to a rather disastrous start of his journey."
    },
    {
      name: "Fearow",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
      description: "Fearow is a lanky and awkward bird. Its English name is a portmanteau of fear and sparrow. Fearow are large birds that can fly at extremely high altitudes for long periods of time."
    },
    {
      name: "Ekans",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
      description: "Its English name is snake spelled backwards. Ekans tends to coil itself, for protection while it sleeps Ekans was Team Rocket member Jessie's starter Pokémon."
    },
    {
      name: "Arbok",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
      description: "Jessie, a member of Team Rocket, owned an Arbok for the Kanto, Johto, and a small portion of the Advanced Generation series of the Pokémon anime. The pattern on its chest is changes everywhere it lives. It is hard to escape from its coil as it is so strong, it can crush a steel drum by constricting it. Its English name is kobra (which is pronounced the same as cobra) spelled backwards."
    },
    {
      name: "Pikachu",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      description: "Pikachu is the primary mascot of the Pokémon franchise, as well as Pokémon Yellow and Let's Go, Pikachu!. It is also playable in every Super Smash Bros. game. Its Gigantamax form looks like its old sprite from Red and Blue with a glowing, whitish tail. Pikachu raises its tail to check its surroundings and it might get struck by lightning in this pose. When groups gather and do this, the lightning shock would be very dangerous to be around. That's why the forests they inhabitat away from cities are very dangerous to be in. Pikachu are now adept at storing electricity and will discharge it at foes and they recharge when sleeping. Pikachu with the stretchiest and softest cheeks are more powerful, but when their tail is yanked, they'll try and bite you. It'll intelligently roast berries to cook and eat them, and it'll occasionally shock a fellow Pikachu that's a weakened state. A plan was recently announced to gather up many Pikachu and make an electric power plant. When Pikachu meet, they'll touch their tails together and exchange electricity through them as a form of greeting. If it gives off crackling power from the electric sacs on its cheeks, it is being wary."
    },
    {
      name: "Raichu",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
      description: "Its long tail serves as a ground to protect itself from electrocuting itself. That's why you'll see black patches near its nest. If enough electricity is built inside it, its muscles are stimulated, its ears will perk up, it becomes feisty and glows in the dark. Some say building up electricity stressess it out. If its cheek pouches are empty, it'll raise its tail to gather electricity from the atmosphere. Its discharges reach 100,000 volts. Careless touching can cause an elephant to faint. Raichu has an Alolan form that is an Electric/Psychic type. Raichu and Alolan Raichu were created by Atsuko Nishida."
    },
    {
      name: "Sandshrew",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
      description: "Based on the Chinese pangolin, Sandshrew is known to curl into a ball to defend itself. It burrows nests into the ground. Sandshrew has an Alolan form that is a Steel/Ice type."
    },
    {
      name: "Sandslash",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
      description: "Sandslash has the ability to curl into a spiny ball to attack or escape other Pokemon. Like Sandshrew, Sandslash has an Alolan form that is a Steel/Ice type. It climbs trees with its sharp claws. Sandslash shares the berries it gathers, dropping them down to Sandshrew."
    },
    {
      name: "Nidoran",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",
      description: "It is related to the Nidoran♂ line and can produce eggs that contain either Nidoran♀ or Nidoran♂. It is less aggressive than its male counterpart, with a less threatening horn."
    },
    {
      name: "Nidorina",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
      description: "If a group is threatened, these Pokémon will band together to assault enemies with ultrasonic waves. The horn on its head has atrophied."
    },
    {
      name: "Nidoqueen",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png",
      description: "It pacifies offspring by placing them in the gaps between the spines on its back. The spines will never secrete poison while young are present. Its hide is so strong, not much can hurt it. It can only evolve using a Moon Stone."
    },
    {
      name: "Nidoran",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png",
      description: "It was the third Pokémon to be created, after Rhydon and Kangaskhan were created. This version of Nidoran (and its evolutions) are more aggressive and have larger spines than their female counterpart."
    },
    {
      name: "Nidorino",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png",
      description: "The evolution of the Nidoran♂. It is most famous for being the first Pokemon seen when a Generation I game is played, appearing in the opening cut scene."
    },
  
    {
      name: "Nidoking",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png",
      description: "Based on Baragon from the Godzilla franchise, it uses its powerful tail in battle to easily smash, constrict, then break the prey's bones and spine. Its recognized by its rock-hard hide that is worn like armor. The long horn on its head is sharp and highly venomous. Nidoking prides itself on its strength. It's forceful and spirited in battle, making use of its thick tail and diamond-crushing horn. One swing of its mighty tail can snap a telephone pole as if it were a matchstick. Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower and once it goes on a rampage, there is no stopping it. It swings its big tail around during battle, but if its foe flinches, it will charge with its sturdy body. But in the presence of a Nidoqueen it's lived with for a long time, Nidoking calms down."
    },
    {
      name: "Clefairy",
      type: "Fairy",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
      description: "Clefairy was originally proposed to be joint mascot of the Pokémon franchise alongside Pikachu, but was quickly overshadowed by the latter's popularity. Timid creatures, they rarely come, only appearing under a full moon. People love Clefairy for its cuteness but it's too rare to be found often."
    },
    {
      name: "Clefable",
      type: "Fairy",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
      description: "It is rarely seen by people. Clefable walks around on moonlit nights, skipping lightly as if in flight, allowing it to walk on water. It has an extremely sharp sense of hearing; its sensitive ears allow it to detect a pin drop from a mile away."
    },
    {
      name: "Vulpix",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
      description: "When it's born, it has one white tail that sprouts into 6 beautiful curled ones at the tip as it gets older if it gets enough love from its Trainer. If it gets attacked by a stronger foe, it'll fake injuries to get away. Inside it is a flame that never goes out. When it's hot outside, it temperature rises, and it spews flames out of its mouth to cool down. It can freely control fire, spewing embers all over the place. Just before it evolves, its tails glow hot as if on fire. Its tails have made it really popular. Though if not brushed, it'll be a tangled mess before you know it. If you raise it young, it'll follow you like a puppy. It manipulates balls of fire to catch prey. Vulpix has an Alolan form that is an Ice type. Vulpix has also been selected as a mascot for Hokkaido, and is featured in the livery of an Air Do Boeing 767 aircraft."
    },
    {
      name: "Ninetales",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
      description: "Its design is inspired by the nine-tailed fox of East Asian myth.[18] Like Vulpix, Ninetales has an Alolan form, granting it the Ice/Fairy typing. Its very smart, very vengeful, and very vindictive. Grabbing one of its 9 golden like tails could result in a 1000-year curse as a joke if not careful. According to an enduring legend, 9 noble saints were united and reincarnated as Ninetales by a wizard. It is said to have a mysterious energy in its tails to allow it to live a thousand years, and each of its tails is loaded with supernatural powers. Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. It's highly intelligent - it can understand human speech. It can burn its prey to a crisp as it pleases. The flickering flames it spews from its mouth leave its opponents hypnotized, then it attacks."
    },
    {
      name: "Jigglypuff",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
      description: "It is a playable character in every Super Smash Bros. game. Jigglypuff appears in the anime frequently as a running gag where it always tries to sing for an audience but puts everyone to sleep with Sing instead. When this happens, it uses the marker that is part of the microphone it carries around to draw silly faces on people."
    },
    {
      name: "Wigglytuff",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png",
      description: "Wigglytuff's body is very flexible. By inhaling deeply, it can inflate itself seemingly without end. Once inflated, Wigglytuff bounces along lightly with the wind."
    },
    {
      name: "Zubat",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png",
      description: "Zubat is blind and uses echolocation to see. Zubats are part of a popular meme within the franchise main due to the fact Zubat is the most commonly encountered Pokémon, being present in almost every cave or underground area."
    },
    {
      name: "Golbat",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png",
      description: "Golbat loves to drink blood, it can drink so much that it becomes unable fly. Unlike Zubat, Golbat have eyes, feet, and a large gaping mouth."
    },
    {
      name: "Oddish",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png",
      description: "It buries itself in the soil to absorb the nutrients. The more water it drinks, the glossier it becomes. Oddish are nocturnal by nature and mainly wander at night to spread their seeds."
    },
    {
      name: "Gloom",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png",
      description: "If it senses danger it produces a horrific stench from the leaves on its head. Glooms always have a line of drool oozing from their mouths. Using the Leaf Stone evolves Gloom into Vileplume, and using the Sun Stone evolves it into Bellossom."
    },
    {
      name: "Vileplume",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png",
      description: "Vileplume has the world's largest petals. They are used to attract prey that are then doused with toxic spores. These toxic spores will leave you sick for days. Vileplume is based on the rafflesia, the world's smelliest flower."
    },
    {
      name: "Paras",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png",
      description: "Paras is a Bug-type Pokémon that is the host to a parasitic mushroom. As it ages, the mushroom begins to completely take over its body, evolving it into Parasect. Most of the nutrients Paras gets from feeding on plant roots are absorbed instead by the mushrooms. These mushrooms can be removed and used for medicines, however more always will grow on Paras' back later on."
    },
    {
      name: "Parasect",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png",
      description: "Parasects are the endpoint of a Paras' life stage, where the mushroom has fully engulfed its body, completely taking it over. It requires more energy from trees due to its larger size. It was originally called Fungus in early development."
    },
    {
      name: "Venonat",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png",
      description: "It is based on the gnat. Venonats are nocturnal predators which use their radar-like compound eyes to see in the dark."
    },
    {
      name: "Venomoth",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png",
      description: "Venomoths are large violet/fuchsia-coloured moths. Its wings shed poisonous scales. These powdery scales are hard to remove from skin and contain poison that leaks out on contact."
    },
    {
      name: "Diglett",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
      description: "Farmers like to use Digletts to plough the soil for crops to grow plentifully. Diglett has an Alolan form that is a Ground/Steel type. No one has ever seen the full body of a Diglett."
    },
    {
      name: "Dugtrio",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png",
      description: "Dugtrio is a tripled Diglett. Like Diglett, Dugtrio has an Alolan form that is a Ground/Steel type. Like Diglett, no one has ever seen the full body of a Dugtrio. Occasionally, they will fight over which head gets to eat first."
    },
    {
      name: "Meowth",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
      description: "One of the main members of Team Rocket in the Pokémon anime series. Team Rocket's Meowth can speak human language as well as converse with other Pokémon. Meowth love anything shiny and will steal whatever it can. Murkrow and Meowth will loot each other's hoards of treasure. Meowth's Alolan form is a Dark type and its Galarian form is a Steel type. Its Gigantamax form is a tall, thin, long cat that has glowing eyes and a mark on its coin."
    },
    {
      name: "Persian",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png",
      description: "Persian will sneak up behind a foe silently by retracting its claws. It will then pounce and rip them to shreds. Persian's Alolan form is a Dark type and its Galarian counterpart Perrserker is a Steel type. While Meowth has a gold coin on its forehead, Persian has a red jewel. A Persian is owned by Team Rocket's leader, Giovanni in the Pokémon anime series."
    },
    {
      name: "Psyduck",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
      description: "It has constant headaches. When Psyduck's headache gets severe, it unleashes its psychic powers. Psyduck was originally intended to have a currently unnamed middle evolution, but it was scrapped. Psyduck in the anime series first appears belonging to Misty, and was seen as unreliable and a nuisance until it begins using its Psychic abilities."
    },
    {
      name: "Golduck",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
      description: "It was almost hunted to extinction by hunters wanting the precious jewel on its forehead. Its capabilities are superior compared to Psyduck. It swims effortlessly, even in rough, stormy seas. It is known to rescue people from wrecked ships."
    },
    {
      name: "Mankey",
      type: "Fighting",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png",
      description: "Mankey is a snub-nosed monkey-esque Pokémon that specialises in physical fighting and is very aggressive and short-tempered. Its extremely easy to anger, just one look can set it and the whole colony off. It'll fight anything and anyone at all. When Mankey starts shaking and its nasal breathing turns rough, it's a sure sign that it is becoming angry. However, because it goes into a towering rage almost instantly, it is impossible for anyone to flee its wrath. It lives on treetops in colonies. It's usually unsafe to approach because most of the time it can't tell friend from foe. At that point everyone around it leaves, and the loneliness angers it more."
    },
    {
      name: "Primeape",
      type: "Fighting",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png",
      description: "It's always angry and it won't abandon the chase until it's caught, even if its till the end of the world. It will never forgive or forget those who angered it. It stop getting angry when it's alone. It's very difficult to view. Even if asleep, anything that awakens it will get a half groggy chase. When angry, its blood starts pumping, making it stronger, yet dumber. It's been known to get so angry, that it dies, though it looks rather peaceful in death. Some researchers say it's still angry even when caught. Primeape is based on the baboon."
    },
    {
      name: "Growlithe",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
      description: "Fiercely protective and loyal to its Trainer, it barks and bites at any intruders in its space, even though it usually has a friendly and brave nature. It will remain motionless unless given an order from its Trainer. Carelessly approaching it however can result in a bite. It tends to stand up to bigger foes, and if it detects a strange scent, it loudly roars to protect its Trainer from harm. It had a superb sense of smell, as once it smells anything, it won't forget it. It can even use its nose to sense emotions. While it's quite friendly toward humans once it's grown used to them, in the wild it must be quite fierce to defend its territory from Rockruff. It has lived alongside humans since ages ago. Its bones have been found in excavations of ruins from the Stone Age. Growlithe are popular throughout the Pokémon world as both guard dogs and police dogs. They are based on the Ryukyuan Shisa and Japanese Komainu lion-dog statues."
    },
    {
      name: "Arcanine",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png",
      description: "Arcanine is a fan-favourite Pokémon and among the strongest non-legendary Pokémon and has been described as having the mane of a lion... the stripes of a tiger [and] the speed of a panther. It has been admired since the past for its beauty and it runs agilely as if on wings. Though it is not a Legendary Pokemon here, it is in China. Its magnificent bark conveys a sense of majesty. Anyone hearing it can't help but grovel before it. An ancient picture scroll shows that people were attracted to its movement as it ran through prairies. Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pokémon's body is its source of power. Legends tell of its fighting alongside a general and conquering a whole country. There are so many old tales about them that say that they're called Legendary Pokémon, but there are way more of them around than you'd expect."
    },
    {
      name: "Poliwag",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
      description: "Poliwag is Satoshi Tajiri (the creator of the Pokémon franchise)'s favourite Pokémon. Its appearance is similar to that of which it is named, a polliwog and a tadpole. It only has a tail and two legs for movement, and the swirl on its belly is its intestines visible through its thin skin."
    },
    {
      name: "Poliwhirl",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png",
      description: "Poliwhirl is among the most-marketed Pokémon, being used in a line of chewable vitamins as well as a line of toothbrushes. Poliwhirl appears as a humanoid-shaped Pokémon that has a similar appearance to Poliwag, except of having arms and no tail. It evolves into Poliwrath after using a Water Stone. It also evolves into Politoed after being traded while it holds a King's Rock.[23][24]"
    },
    {
      name: "Poliwrath",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png",
      description: "It is capable of swimming the length of the Pacific Ocean tirelessly. It evolves from Poliwhirl after using a Water Stone. The swirl on its belly is reversed from its pre-evolutions."
    },
    {
      name: "Abra",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png",
      description: "Abra sleeps all of the time. Even when it is sleeping, which it does most of its life, it can sense danger with its highly potent Psychic power. When it is in danger, it will teleport to safety. Abra's teleportation is usually faster than the player's Pokémon, requiring a higher Speed stat in order to disable it before it teleports."
    },
    {
      name: "Kadabra",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png",
      description: "Kadabra has been the source of various controversies. The symbols on its body have been associated to those used by Nazi Germany's Waffen-SS. Furthermore, in November 2000, Israeli magician Uri Gellar sued Nintendo, claiming Kadabra embodies an unauthorized appropriation of his identity.[25][26][27] However, in 2020, he released a claim that Nintendo could use Kadabra again."
    },
    {
      name: "Alakazam",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",
      description: "Due to its brain drastically growing, causing its head to be too heavy, it actually uses its psychic power to hold its head up. Its 5000 IQ makes it a very intelligent Pokémon. It can affect nearby technology using its brainwaves. Kadabra and Alakazam were the direct counters to the Gastly line of Ghost-type Pokémon since they were dual types with Poison-type, hence weak to psychic-type moves. Throughout the series, the Abra and Gastly lines were considered rivals."
    },
    {
      name: "Machop",
      type: "Fighting",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png",
      description: "The best thing about Machop is that its muscles never get sore. It can hurl around 100 adult humans before it gets tired."
    },
    {
      name: "Machoke",
      type: "Fighting",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png",
      description: "Machoke is typically used for heavy lifting jobs due to its super strength. Its appearance is similar to a WWE-style wrestler, with what appears to be exercise shorts."
    },
    {
      name: "Machamp",
      type: "Fighting",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png",
      description: "Machamp has four arms. It can throw around 1000 punches in two seconds and move mountains with one arm. It evolves from Machoke after being traded. Its Gigantamax form has glowing, orange eyes and hands and a bigger body."
    },
    {
      name: "Bellsprout",
      type: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png",
      description: "It is a Grass-type Pokémon with a bell-shaped head, and a vine-like body ending in root-like feet, with leaves for arms. It can plant itself into the ground to negate Electric-type moves as seen in the anime."
    },
    {
      name: "Weepinbell",
      type: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png",
      description: "It has a hook on its rear-end that it hooks on trees with and sleeps. When it wakes up, it might find itself on the ground because of the wind."
    },
    {
      name: "Victreebel",
      type: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png",
      description: "It was the last Generation I Pokémon to be created. All of Bellsprout's evolutions are based on various fly-catcher plants, with Victreebel the closest-looking one. Team Rocket's James has a Victreebel that has a habit of chewing on him."
    },
    {
      name: "Tentacool",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png",
      description: "If Tentacool isn't in the water, it will shrivel up because it is mostly water. Tentacool is a jellyfish-esque Pokémon, which later on in the franchise, is said to be fluid-filled. This fluid is toxic and damages opponents who use HP draining attacks instead of healing them."
    },
    {
      name: "Tentacruel",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png",
      description: "Tentacruel is a large, multi-tentacled jellyfish Pokémon that has two claws or beaks and two large, red jewels on its head."
    },
    {
      name: "Geodude",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",
      description: "Sometimes mistaken as ordinary rocks, people mistakenly step on them resulting in them getting hurt. Geodude has an Alolan form that is a Rock/Electric type, and has metal spines. It appears as an armed rock."
    },
    {
      name: "Graveler",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png",
      description: "Graveler has an Alolan form that is a Rock/Electric type. It appears as a large rock that has two large arms and two small arms. This appearance suggests that the smaller arms are the old Geodude arms and the new ones emerged as it grew larger."
    },
    {
      name: "Golem",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png",
      description: "Golem is known for rolling down from mountains. To prevent them from rolling into the homes of people downhill, grooves have been dug into the sides of mountains to serve as guideways for diverting this Pokémon's course. Golem has an Alolan form that is a Rock/Electric type. It appears as a large boulder that has a head, arms, and legs. It can roll up into a perfectly round rock. Its Alolan form is magnetic and has a rock cannon on its shoulders."
    },
    {
      name: "Ponyta",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png",
      description: "Its Galarian form is a Psychic type. When born, it cannot stand and runs with its parents to strengthen its legs. It can choose when its flames can burn people or not."
    },
    {
      name: "Rapidash",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png",
      description: "As a popular Pokémon, Rapidash is considered universally appealing to fans of cute and cool Pokémon alike. Both Ponyta and Rapidash can enable their body's flames to be harmful or harmless as seen in the anime. Its Galarian form is a Psychic/Fairy type, and is pinkish purple in color instead. It just loves to run. It can't help itself when it see a car or anything fast. A very competitive pokemon, if it sees anything faster than it, it will go full speed in 10 steps to out run it at 150mph. At that point, its hooves barely touch the ground because it's moving so fast, it can traverse all of Hisui in a day and a half. The faster it goes, the longer its fiery mane becomes. Otherwise it can be seen cantering in fields."
    },
    {
      name: "Slowpoke",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png",
      description: "It's really slow-witted, oblivious and likes to loll about. It takes 5 seconds for it to feel pain when attacked. Slowpoke uses its tail to catch prey by dipping it in water at the side of a river. However, this Pokémon often forgets what it's doing and often spends entire days just loafing at water's edge. Even if its tail is bitten off, it won't feel it or notice. Although not nutritious, its tail is pleasant to chew on. When soaked in water, a sweet sap leaks from the tip of its tail. It can be added to stews for a nice flavor. Alolan homes often cook by simmering dried Slowpoke tails into a salty stew. Its tail naturally falls off, but don't worry though, it regenerates its tail back quickly. There are some places where it's worshipped because of a long standing belief that when a Slowpoke yawns, it rains. Its Galarian form is a Psychic type. Trading Slowpoke while it holds a King's Rock evolves it into Slowking."
    },
    {
      name: "Slowbro",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png",
      description: "Slowpoke has fished up a Shellder with its tail, which shocked it into evolving and made it stand on two legs. The Shellder apparently likes the taste of its tail so much it feels like it a dream, and now refuses to let go, which has metamorphosed into a spiral shaped shell. If the Shellder were to detach itself from Slowbro in any way, it will devolve back to Slowpoke. The Shellder is said to feed off of Slowbro's leftover scraps as it lives lazily by the sea. Being slow witted to begin with, it doesn't feel anything because of Shellders seeping poison. Since its tail has been bit by Shellder, it now has to grudgingly swim for prey instead. Whenever Shellder bites down on its tail, it gives Slowbro a flash of inspiration, which it forgets a moment later. Its Galarian form is a Poison/Psychic type. The appearance of the Shellder is different than how they normally look. In the Gold and Silver demo, the Shellder was its own Pokemon, named Turban, before it was scrapped."
    },
    {
      name: "Magnemite",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png",
      description: "It was a pure Electric type in Kanto, but had the Steel type added in Gold and Silver. It tends to appear without warning and uses anti gravity to float around. The two units on its side are like magnets and used for discharging attacks. It's attracted to electromagnetic waves from devices such as using your Pokegear, and it attaches itself to power breakers. If you experience a power outage that isn't from a storm, it could be Magnemites feeding on it. It becomes incapable of flight if it out of electricity. When that happens, giving it a battery should help it out. The two magnets on its side are powerful enough to draw in iron objects from 300 feet away. The faster they rotate, the greater the magnetic field it generates. Touching it while it's eating electricity will give you a full body shock. Radio towers and power plants are great sources of food for them. The reason why the numbers have been decreasing is because most power lines are buried these days."
    },
    {
      name: "Magneton",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png",
      description: "Formed when several Magnemites fuse together, it tends to raise the temperature up by 3.6°F within 3,600 ft. It generates strange radio signals and they tend to gather where sun flares happen. Earaches can occur if you get close to one. Its magnetism is so powerful it dries up moisture in its vicinity, and it's fatal to devices if it were to go near one as devices like TVs will stop playing correctly. When many Magneton gather, it disrupts radio signals. As a result, large cities have sirens to warn their citizens of this occurrence and some even warn people to keep it inside their Pokeballs. When it evolves, their brains link up too, though they don't become three times smarter. When rain clouds form, they like to gather in high spots where lightning could strike. It seems that Sandy Shocks is a futuristic relative of it. It evolves into Magnezone while in range of a special magnetic field or a Thunder Stone in later games."
    },
    {
      name: "Farfetch'd",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png",
      description: "Farfetch'd is a duck-like Pokémon that carries around a green onion stalk much like a sword. It apparently knows where the best ones are and will battle over them. It will eat them in emergencies, then it'll run off to find a new one. They were so rare at one point that people bred them to regrow the population, and it worked. There are good stalks and bad stalks, and since it can't live with out them, it will defend it with its life. It was originally called Okupan in early development and was intended to have an evolution named Madame in Generation II's early development. Its Galarian form is a Fighting type, appears to resemble a feudal Japan-style samurai or ronin, and uses a larger onion-stalk. In Pokémon Go, it is exclusive to certain regions of Asia."
    },
    {
      name: "Doduo",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png",
      description: "This 2 headed bird leaves giant footprints. Its short wings make flying difficult. Instead, it runs at high speed on well-developed legs at over 60 mph. It races through grassy plains with powerful strides, leaving footprints up to four inches deep. By alternately raising and lowering its two heads, it balances itself to be more stable while running. Doduo's two heads never sleep or eat at the same time. Its two heads take turns to sleep or eat, so one head can always keep watch for enemies while the other one sleeps. Doduo's two heads contain completely identical brains. A scientific study reported that on rare occasions, there will be examples of Doduo possessing different sets of brains. The brains in its two heads appear to communicate emotions to each other with telepathic power. It was originally intended to have a pre-evolution in Generation II. It appears to resemble a two-headed ostrich or emu, mixed with a roadrunner."
    },
    {
      name: "Dodrio",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png",
      description: "The three heads express joy, sorrow, and anger as they plan strategy together. When it sleeps, one head remains awake. Dodrio are extremely fast runners. The three heads have colored feathers, which also appear as tail-feathers."
    },
    {
      name: "Seel",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png",
      description: "It loves swimming around in 14°F waters. Its horn is really hard, and it uses it to bash its way through ice. It has a thick hide covered in warm fur. It even goes in waters that can be up to -40°F. Though it's not a great walker, it is a skilled swimmer. It closes its nostrils when it swims and in the daytime, it can be found sleeping on the seabed of shallow waters. Therefore, them being in Alola is quite a mystery. Its design is based on the real-life seal."
    },
    {
      name: "Dewgong",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png",
      description: "A fisherman once saw a Dewgong on an iceberg and thought it was a mermaid. Its design is based on the real-life dugong."
    },
    {
      name: "Grimer",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png",
      description: "It eats sewer waste for food. Its body is very slippery, so it can slip through almost any opening. It was one of the earliest Pokémon to be created, and was originally supposed to have a pre-evolution, Betobebi, in Generation II. Grimer has an Alolan form that is a Poison/Dark type. It appears as a purple sludge, while its Alolan form is multiple colours."
    },
    {
      name: "Muk",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png",
      description: "Muk's English name comes from the word muck. It could be based on Dorotabō, a one-eyed, three-fingered yōkai that rises from the mud of neglected, overgrown rice fields.[citation needed] It's covered in a toxic filthy sludge that is so vile, that plants die wherever it walks due to there being poison it is footprints. Just a drop of its body fluid can turn a pool rancid or leave a person bed ridden for days from poisoning. Its nose has devolved, so it can't really smell anything. It feeds on anything repugnant and filthy, like sewer water. It prefers warm and humid environments. Its numbers have started declining since people have began cleaning up towns,and because some people think it may go extinct, sludge pools are being built to prevent this. Muk has an Alolan form that is a Poison/Dark type. Like Grimer, Alolan Muk has multiple colours, and now bears razor-sharp poisonous crystal-esque teeth."
    },
    {
      name: "Shellder",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png",
      description: "When it sleeps, it will still stick its tongue out. It appears as a typical clam or bivalve with a long, pink tongue."
    },
    {
      name: "Cloyster",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png",
      description: "It swims by pushing water out through its valves. It is similar to Shellder, but rotated 180 degrees. Its body looks like a black ball inside a clam's shell. It has no tongue though."
    },
    {
      name: "Gastly",
      type: "Ghost",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png",
      description: "It is a Ghost-type Pokémon based on the will-o'-the-wisp and the yokai, Sōgenbi. It hides under structures to stop the wind from blowing away its gaseous matter. Though it is part-Poison, it typically doesn't learn Poison type moves naturally. It uses its signature tongue when it attacks with the Lick move."
    },
    {
      name: "Haunter",
      type: "Ghost",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png",
      description: "By licking, it saps the victim's life. It causes shaking that won't stop until the victim's demise. It appears as a menacing shadow with eyes, a mouth, and two unattached hands."
    },
    {
      name: "Gengar",
      type: "Ghost",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
      description: "Gengar is a Ghost type Pokemon that seeps into the shadows of people and Pokemon to scare them for fun. The Leer in the darkness belongs to a Gengar. If you feel an attacking sudden chill of 10°F cooler, its trying to curse you. If it does this, there's no escape. Give up. Even your home isn't safe. Gengar will lurk in whatever dark corner of a room it can find and wait for its chance to catch its prey. It likes to attack people in the mountains. Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It's actually a Gengar running past you, pretending to be your shadow. It often tries to steal the life force of people. It apparently wishes for a traveling companion. Since it was once human itself, it tries to create one by taking the lives of other humans. If your shadow begins to laugh, you must take hold of a protective charm immediately! Initially created by Satoshi Tajiri and Ken Sugimori,[32][33] it has become one of the most popular Pokémon, placing tenth on the Google Pokémon of the Year 2020 poll.[34] Kotaku's Zack Zwiezen said Gengar was one of their favorite gen 1 designs, calling it a great design because it is simple, yet not boring or generic. Gengar has appeared in many Pokémon spin-offs or crossovers, including Pokkén Tournament and Pokémon Unite."
    },
    {
      name: "Onix",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",
      description: "Onix is a large rock snake with a spike on its head. It usually lives underground. As it grows, the stone portions of its body harden to become similar to a diamond, but colored black. It burrows at high speed in search of food, and the tunnels it leaves are used as homes by Diglett. Its large body is over 26 feet long, yet despite its size, it can squirm its way through the ground at 50 mph. The thunderous roar of its tunneling echoes a long way. As it digs through the ground, it absorbs many hard objects and this is what makes its body so solid. It even eats boulders while digging. Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother. It evolves into Steelix when traded while holding a Metal Coat."
    },
    {
      name: "Drowzee",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png",
      description: "Drowzee's design is based on the dream-eating tapir, Baku. It puts people to sleep and then it likes to eat dreams. It can get sick from eating bad ones though. If you sleep by it a lot, it might show you dreams it ate in the past. It's said to have descended from a legendary beast called Baku. If you had a dream but can't remember it, Drowzee probably ate it. It remembers every dream it ate and it rarely eats the dreams of adults because children's are so much tastier. If your nose gets itchy while you're sleeping, dowzee is probably right above your bed eating your dream through your nostrils. It's skilled in hypnotism. It can tell what your dreaming by smelling it. Drowzee appears as a half-yellow-half-brown Pokémon that stands on two legs, and its size varies. In later generations, it is given the Insomnia trait, making it immune to Sleep status inflicting moves."
    },
    {
      name: "Hypno",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png",
      description: "Hypno's design is based on the dream-eating tapir, Baku and a hypnotist. It polishes its pendulum to more effectively put people to sleep. Try not to look at it. There is a myth within the franchise that Hypno preys on human children. This has led to Hypno becoming the subject of creepypastas. Hypno is purely yellow with a white fluffy collar mane."
    },
    {
      name: "Krabby",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png",
      description: "As its name states, it is a crab Pokémon that is half white/tan and half orange. In the anime, it doesn't speak its name like other Pokémon and instead makes a unique noise."
    },
    {
      name: "Kingler",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png",
      description: "Because its pincer is so heavy, it has a hard time fighting. When it does hit, it is very powerful. Only Kingler can use Crabhammer, due to its large claw. It shares a similarity to real life fiddler crabs. Its Gigantamax form is bigger with a beard made of bubbles. It also uses acid bubbles to dissolve its prey or foes."
    },
    {
      name: "Voltorb",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png",
      description: "Voltorb is a spherical Pokémon that resembles a Poké Ball with eyes and minus the button. The top half is red, while the bottom half is white. Because of its resemblance to Poké Balls, it is thought that it was created when one was exposed to an energy pulse."
    },
    {
      name: "Electrode",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png",
      description: "Electrode is a round Pokémon resembling an upside-down Poké Ball with a mouth and eyes. Its top half is white, while its lower half is red. For this reason, many Trainers try to pick it up, mistaking it for an item."
    },
    {
      name: "Exeggcute",
      type: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png",
      description: "Six of them together form a full-fledged Pokémon. It is often hunted by Crabrawler, but uses psychokinesis to drive it off. Despite technically being several different lifeforms, they are never seen alone. There is also one that appears to be broken with yolk visible. It evolves into Exeggutor using a Leaf Stone. Despite the name, they are actually seeds."
    },
    {
      name: "Exeggutor",
      type: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png",
      description: "It is a coconut tree-esque Pokémon based on the Jinmenju and the favorite Pokémon of Tsunekazu Ishihara, president and CEO of The Pokémon Company, having used it throughout the debugging phase of Pokémon Red and Green. Its 3 heads think independently of one another, but if they want to go in different directions, they'll be unable to move. That's why they use telepathy to make a joint decision. Sometimes one of the heads grows so big, due to the sun, that they tend to fall off and become an Exeggcute. Its cries are very noisy because each head thinks about what it likes. Surprisingly, they're very friendly and only engage their enemies with psychic power when it needs to. It originally came from the tropics, so it's known as the Walking Forest and each head doesn't seem to be interested in one another. Cloudy days make it sluggish. Exeggutor has an Alolan form that is a Grass/Dragon type and has a really long trunk-esque neck."
    },
    {
      name: "Cubone",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png",
      description: "Because it never removes its skull helmet, no one has ever seen this Pokémon's real face. It wears the skull of its deceased mother that it lost. If it's sad or lonely, its skull shakes and its cries echo inside the skull and come out as a sad melody. It cries mournfully in the moonlight. Cubone pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pokémon wears are made by the tears it sheds. When it thinks of its deceased mother, it weeps loudly. Mandibuzz, its natural enemy, that hear its cries will attack it from the air. According to some, it will evolve when it comes to terms with the pain of her death. Sometimes Cubone's dreams make it cry, but each tear Cubone sheds makes it stronger."
    },
    {
      name: "Marowak",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png",
      description: "Marowak appears as an older Cubone with the skull becoming the head. It wields a bone that it uses as a boomerang. This is the only Pokémon that can use the Bonemurang attack. It also has an Alolan form that is a Ghost/Fire type that uses its mothers spirit as a flame at the end of its bones."
    },
    {
      name: "Hitmonlee",
      type: "Fighting",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png",
      description: "Hitmonlee's design is based on Headless men, from Greco-Roman mythology. It may also be based on Kabandha, a demon from Hindu mythology. Its English name is derived from actor and martial artist Bruce Lee. When it's in a hurry, its legs strengthen progressively. It smoothly runs with extra long strides. When kicking, the soles of its feet turn as hard as diamond as its legs freely stretch to destroy its foes. It has amazing balance, able to attack from any stance. Some people call it the Kicking Master. After a battle it rubs down its springy legs to overcome fatigue. Its legs can stretch to double its length, so first time fighters are amazed by its extendable reach. Hitmonlee and Hitmonchan didn't have a distinct evolutionary line until Tyrogue and Hitmontop were conceived. Hitmonlee evolves from Tyrogue if it has higher attack stats."
    },
    {
      name: "Hitmonchan",
      type: "Fighting",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png",
      description: "Its English name is derived from actor and martial artist Jackie Chan. It can punch so fast, while one might think it's just standing there, it actually can punch foes in lightning fast attacks that can slice air, faster than the eye can see. Though it needs to rest for a couple minutes after doing so as it moves around. It winds it arms to punch harder and it does it punches in a corkscrew fashion, hard enough to break through concrete walls like a drill. Even a slight graze can cause a burn. A Hitmonchan is said to possess the spirit of a boxer who had been working towards a world championship. It has an indomitable spirit and will never give up when things get tough. It evolves from Tyrogue if it has higher defence stats."
    },
    {
      name: "Lickitung",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png",
      description: "Instead of its hands, it uses its adept long tongue. It uses its tongue to paralyze bug pokemon to eat them whole. If it licks you, it will leave a tingling sensation. If you don't wash it off immediately, it will break out into a itchy rash that won't go away. Its tongue can stretch up to 6'6 and when it does, its tail quivers and contracts. It has nerves that run through its tongue so it can use it quite freely. It licks filthy things clean but whatever it clean always stinks afterwards so it's really questionable whether or not it's truly clean. Whenever Lickitung cones across something new, it always gives it a lick to memorize the taste and texture of that thing. It doesn't care for sour things. If you boil its viscous saliva down, it becomes quite a strong adhesive. It evolves into Lickilicky while knowing Rollout."
    },
    {
      name: "Koffing",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png",
      description: "Koffing is based on air pollution and meteorites. Sometimes, it can over-inflate itself and explode. It appears as a floating space-rock with several gas vent holes that expel its fumes. It also has a skull and crossbones style marking on its chest. Koffing was Team Rocket member James' starting Pokémon."
    },
    {
      name: "Weezing",
      type: "Poison",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png",
      description: "Weezing belonged to James of Team Rocket in the Kanto and Johto series of the Pokémon anime and for a small portion of the Advanced Generation series. It likes to raid trash can for food. To make its poison more toxic, it pushes its gas through its two heads. Its Galarian form is a Poison/Fairy type. It appears as three different sized Koffing rocks merged, with a face on both of the bigger ones."
    },
    {
      name: "Rhyhorn",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png",
      description: "Its tackles can demolish skyscrapers but its memory isn't the best. Once it starts going, it sometimes cannot remember why it started. It appears as a rhinoceros-like creature made of diamond hard rock."
    },
    {
      name: "Rhydon",
      type: "Ground",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png",
      description: "Rhydon was the first Pokémon created by Game Freak. Its hide is very tough. Unlike Rhyhorn, it stands bipedal. It eventually gained an evolution, Rhyperior, after being traded with a Protector."
    },
    {
      name: "Chansey",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png",
      description: "In generation II, Blissey was added, and in generation IV, Happiny was added, however Chansey was initially a stand-alone Pokémon. It appears as a pink oblong shaped creature with stubby arms and feet. It carries eggs in its pouch and is typically used by Pokémon Centres for the egg's healing properties."
    },
    {
      name: "Tangela",
      type: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png",
      description: "Blue plant vines cloak the Pokémon's identity in a tangled mass. It entangles anything that gets close. It also resembles the severed head of the gorgon, Medusa. It gained an evolution, Tangrowth, in Generation IV and was going to have a pre-evolution in Generation II."
    },
    {
      name: "Kangaskhan",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png",
      description: "Kangaskhan in Pokémon Go is exclusively available to Australia. It was the second Pokémon created by Game Freak after Rhydon. It carries a baby Kangaskhan in its pouch until it grows up. In the anime series, they live in groups."
    },
    {
      name: "Horsea",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png",
      description: "They swim with dance-like motions and cause whirlpools to form. Horsea compete to see which of them can generate the biggest whirlpool. Horsea makes its home in oceans with gentle currents. If this Pokémon is under attack, it spits out pitch-black ink and escapes."
    },
    {
      name: "Seadra",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png",
      description: "Seadra's mouth is slender, but its suction power is strong. In an instant, Seadra can suck in food that's larger than the opening of its mouth. It's the males that raise the offspring. While Seadra are raising young, the spines on their backs secrete thicker and stronger poison."
    },
    {
      name: "Goldeen",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png",
      description: "Its dorsal and pectoral fins are strongly developed like muscles. It can swim at a speed of five knots. Its dorsal, pectoral, and tail fins wave elegantly in water. That is why it is known as the Water Dancer."
    },
    {
      name: "Seaking",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png",
      description: "Seaking can have the ability Swift Swim or the ability Water Veil. Swift Swim increases Seaking's Speed when it is raining. Water Veil causes Seaking to be immune to burns. Its horn can function like a drill and it is known to be very territorial."
    },
    {
      name: "Staryu",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png",
      decription: "An enigmatic Pokémon that can effortlessly regenerate any appendage it loses in battle. If its body is torn, it can grow back if the red core remains. The core flashes at midnight. At night, the center of its body slowly flickers with the same rhythm as a human heartbeat."
    },
    {
      name: "Starmie",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png",
      description: "Starmie swims by spinning its body at high speed. As this Pokémon cruises through the ocean, it absorbs tiny plankton. This Pokémon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers."
    },
    {
      name: "Mr. Mime",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png",
      description: "Mr. Mime is a bipedal, humanoid Pokémon. Blue growths resembling clown hair extend from the sides of its pale pink head, and there is a magenta circle on each cheek. Its jaw is curved inward, resembling the mouth of a wooden dummy."
    },
    {
      name: "Scyther",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png",
      description: "Scyther is a dual-type Bug/Flying Pokémon introduced in Generation I. It evolves into Scizor when traded while holding a Metal Coat. In Pokémon Legends: Arceus, it evolves into Scizor when exposed to a Metal Coat instead. In Hisui, it evolves into Kleavor when exposed to a Black Augurite."
    },
    {
      name: "Jynx",
      type: "Ice",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png",
      description: "Jynx is a bipedal, humanoid Pokémon that resembles a woman. It has a purple face, pink lips, saucer-like eyes, and long blonde hair."
    },
    {
      name: "Electabuzz",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png",
      description: "Electabuzz is an Electric-type Pokémon introduced in Generation I. It evolves from Elekid starting at level 30 and evolves into Electivire when traded while holding an Electirizer. In Pokémon Legends: Arceus, it evolves into Electivire when exposed to an Electirizer instead."
    },
    {
      name: "Magmar",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png",
      description: "Born in the spout of a volcano, its body is covered by flames that shimmer like the sun. In battle, Magmar blows out intensely hot flames from all over its body to intimidate its opponent. This Pokémon's fiery bursts create heat waves that ignite grass and trees in its surroundings."
    },
    {
      name: "Pinsir",
      type: "Bug",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png",
      description: "This Pokémon clamps its pincers down on its prey and then either splits the prey in half or flings it away. These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender."
    },
    {
      name: "Tauros",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png",
      description: "This Pokémon has a muscular body and excels at close-quarters combat. It uses its short horns to strike the opponent's weak spots. People call this kind of Tauros the Blaze Breed due to the hot air it snorts from its nostrils. Its three tails are intertwined."
    },
    {
      name: "Magikarp",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
      description: "A feeble, pitiful imbecile of a Pokémon that is nonetheless very hardy. Unperturbed by turbid water, it can be found living in all sorts of places."
    },
    {
      name: "Gyarados",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
      description: "Gyarados is a piscine, draconic Pokémon with a long serpentine body covered in slightly overlapping scales. It is mostly blue with a yellow underbelly, and it has a row of yellow spots down each side."
    },
    {
      name: "Lapras",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png",
      description: "A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it. It surrounds itself with a huge ring of gathered ice particles. It uses the ring to smash any icebergs that might impede its graceful swimming. Over 5,000 people can ride on its shell at once."
    },
    {
      name: "Ditto",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
      description: "Ditto is capable of transforming into any Pokémon that it comes across. It was originally intended to have an evolution in Generation II called Animon which it would have evolved from a Metal Coat. Fan speculation is that Ditto and Mew are related as Mew can also use Transform, a move exclusive to Ditto. In the anime, Ditto belonging to Duplica had an issue with accurately mimicking appearances where its face always looked like Ditto's own. It appears as a pink blob or amoeba."
    },
    {
      name: "Eevee",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
      description: "Eevee has brown eyes, big ears, and pink paw pads. Eevee is said to have an irregularly shaped genetic structure, enabling it to evolve into multiple Pokémon. Eevee are quite rare in the games, but are canonically able to live almost anywhere, as they may evolve to suit their surroundings."
    },
    {
      name: "Vaporeon",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
      description: "Vaporeon, the Bubble Jet Pokémon. Vaporeon love fresh, clean water and can make their bodies melt away into water as well. Vaporeon, the Bubble Jet Pokémon, and an evolved form of Eevee. The composition of its cells is similar to molecules of water, and as such, can melt in water."
    },
    {
      name: "Jolteon",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png",
      description: "A sensitive Pokémon that easily becomes sad or angry. Every time its mood changes, it charges power. Locations: Jolteon doesn't appear in the wild. To get it, use a Thunder Stone on Eevee at any time."
    },
    {
      name: "Flareon",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",
      description: "Flareon is the evolved form of Eevee. The air it inhales is ignited by a flame inside its body and expelled as fire. Flareon, the Flame Pokémon, and an evolved form of Eevee. It stores some of the air it breathes in its internal flame sac, which heats its body to over 3,000 degrees."
    },
    {
      name: "Porygon",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png",
      description: "A Pokémon that consists entirely of programming code. It is capable of moving freely in cyberspace. Porygon is capable of reverting itself entirely back to program data and entering cyberspace. This Pokémon is copy-protected so it cannot be duplicated by copying."
    },
    {
      name: "Omanyte",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png",
      description: "This Pokémon is a member of an ancient, extinct species. Omanyte paddles through water with its 10 tentacles, looking like it's just drifting along. Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem."
    },
    {
      name: "Omastar",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png",
      description: " Omastar's sharp fangs could crush rock, but the Pokémon can attack only the prey that come within reach of its tentacles. Weighed down by a large and heavy shell, Omastar couldn't move very fast. Some say it went extinct because it was unable to catch food."
    },
    {
      name: "Kabuto",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png",
      description: "Kabuto is a small arthropod Pokémon resembling a horseshoe crab. It is mostly flat with a protective, brown shell covering its body."
    },
    {
      name: "Kabutops",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png",
      description: "A slim and fast swimmer. It slices its prey with its sharp sickles and drinks the body fluids. Locations: Kabutops doesn't appear in the wild in any of the three Pokemon games."
    },
    {
      name: "Aerodactyl",
      type: "Rock",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png",
      description: "Aerodactyl's sawlike fangs can shred skin to tatters—even the skin of Steel-type Pokémon. This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen. The power of Mega Evolution has completely restored its genes."
    },
    {
      name: "Snorlax",
      type: "Normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
      description: "Terrifyingly strong, this Pokémon is the size of a mountain—and moves about as much as one as well. Gigantamax energy has affected stray seeds and even pebbles that got stuck to Snorlax, making them grow to a huge size."
    },
    {
      name: "Articuno",
      type: "Ice",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png",
      description: "This Pokémon can control ice at will. Articuno is said to live in snowy mountains riddled with permafrost. It's said that this Pokémon's beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it."
    },
    {
      name: "Zapdos",
      type: "Electric",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png",
      description: "Zapdos is a legendary bird Pokémon. It's said that when Zapdos rubs its feathers together, lightning will fall immediately after. This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds."
    },
    {
      name: "Moltres",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png",
      description: "It's one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow. The sinister aura that blazes like molten fire around this Pokémon is what inspired the name Moltres. This Pokémon's sinister, flame-like aura will consume the spirit of any creature it hits."
    },
    {
      name: "Dratini",
      type: "Dragon",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png",
      description: "This Pokémon is full of life energy. It continually sheds its skin and grows steadily larger. Dratini continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels."
    },
    {
      name: "Dragonair",
      type: "Dragon",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png",
      description: "It is called the divine Pokémon. When its entire body brightens slightly, the weather changes. They say that if it emits an aura from its whole body, the weather will begin to change instantly."
    },
    {
      name: "Dragonite",
      type: "Dragon",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
      description: "Dragonite is a draconic, bipedal reptilian Pokémon with light orange skin. It has large, grayish-green eyes and a round snout with small nostrils."
    },
    {
      name: "Mewtwo",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
      description: "A Pokémon created by recombining Mew's genes. It's said to have the most savage heart among Pokémon. Because its battle abilities were raised to the ultimate level, it thinks only of defeating its foes. It usually remains motionless to conserve energy, so that it may unleash its full power in battle."
    },
    {
      name: "Mew",
      type: "Psychic",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
      description: "Mew is a pink, bipedal Pokémon with mammalian features. It has a rounded, wide snout; triangular ears; and large, blue eyes."
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
  