const movies = [
  {
    title: "Nyckeln till frihet",
    year: "1994",
    genres: ["Crime", "Drama"],
    ratings: [
      8, 8, 6, 10, 2, 3, 4, 5, 4, 9, 3, 9, 6, 10, 4, 8, 10, 1, 2, 8, 1, 9, 5, 4,
      4, 2, 4, 6, 9, 10,
    ],
    poster:
      "MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg",
    contentRating: "15",
    duration: "PT142M",
    releaseDate: "1995-03-03",
    averageRating: 0,
    originalTitle: "The Shawshank Redemption",
    storyline:
      "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.                Written by\nJ-S-Golden",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    imdbRating: 9.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg",
  },
  {
    title: "Gudfadern",
    year: "1972",
    genres: ["Crime", "Drama"],
    ratings: [
      6, 10, 4, 10, 1, 3, 7, 2, 3, 3, 3, 4, 2, 5, 6, 9, 10, 8, 7, 4, 8, 9, 9,
      10, 4, 6, 2, 9, 7, 7,
    ],
    poster:
      "MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg",
    contentRating: "15",
    duration: "PT175M",
    releaseDate: "1972-09-27",
    averageRating: 0,
    originalTitle: "The Godfather",
    storyline:
      "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.                Written by\nJ. S. Golden",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    imdbRating: 9.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg",
  },
  {
    title: "Gudfadern del II",
    year: "1974",
    genres: ["Crime", "Drama"],
    ratings: [
      2, 5, 1, 1, 8, 4, 2, 3, 10, 10, 4, 9, 8, 9, 7, 6, 6, 9, 9, 4, 1, 8, 4, 5,
      7, 7, 7, 1, 10, 6,
    ],
    poster:
      "MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,351,500_AL_.jpg",
    contentRating: "15",
    duration: "PT202M",
    releaseDate: "1975-07-28",
    averageRating: 0,
    originalTitle: "The Godfather: Part II",
    storyline:
      "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.                Written by\nKeith Loh <loh@sfu.ca>",
    actors: ["Al Pacino", "Robert De Niro", "Robert Duvall"],
    imdbRating: 9.0,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,351,500_AL_.jpg",
  },
  {
    title: "The Dark Knight",
    year: "2008",
    genres: ["Action", "Crime", "Drama"],
    ratings: [
      3, 6, 4, 1, 6, 10, 6, 3, 5, 9, 1, 3, 1, 7, 8, 10, 6, 2, 8, 6, 7, 1, 4, 3,
      8, 3, 10, 8, 10, 4,
    ],
    poster:
      "MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "PT152M",
    releaseDate: "2008-07-25",
    averageRating: 0,
    originalTitle: "",
    storyline:
      'Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman\'s struggle against the Joker becomes deeply personal, forcing him to "confront everything he believes" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.                Written by\nLeon Lombardi',
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    imdbRating: 9.0,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "12 edsvurna m\u00e4n",
    year: "1957",
    genres: ["Crime", "Drama"],
    ratings: [
      3, 5, 3, 3, 10, 3, 4, 1, 6, 10, 2, 8, 4, 6, 8, 6, 1, 10, 4, 5, 9, 3, 2, 4,
      8, 10, 10, 7, 9, 6,
    ],
    poster:
      "MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
    contentRating: "15",
    duration: "PT96M",
    releaseDate: "1957-07-29",
    averageRating: 0,
    originalTitle: "12 Angry Men",
    storyline:
      "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other. Based on the play, all of the action takes place on the stage of the jury room.                Written by\npjk <PETESID@VNET.IBM.COM>",
    actors: ["Henry Fonda", "Lee J. Cobb", "Martin Balsam"],
    imdbRating: 8.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
  },
  {
    title: "Schindler's List",
    year: "1993",
    genres: ["Biography", "Drama", "History"],
    ratings: [
      2, 6, 7, 8, 8, 6, 2, 4, 6, 2, 3, 3, 5, 9, 5, 10, 9, 5, 5, 2, 10, 4, 8, 7,
      4, 10, 2, 10, 4, 10,
    ],
    poster:
      "MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,333,500_AL_.jpg",
    contentRating: "15",
    duration: "PT195M",
    releaseDate: "1994-03-04",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Oskar Schindler is a vainglorious and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us.                Written by\nHarald Mayr <marvin@bike.augusta.de>",
    actors: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    imdbRating: 8.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,333,500_AL_.jpg",
  },
  {
    title: "Pulp Fiction",
    year: "1994",
    genres: ["Crime", "Drama"],
    ratings: [
      2, 9, 7, 7, 7, 2, 2, 4, 1, 9, 6, 3, 4, 10, 8, 6, 7, 5, 9, 4, 3, 5, 9, 3,
      8, 2, 6, 7, 4, 4,
    ],
    poster:
      "MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY500_CR0,0,336,500_AL_.jpg",
    contentRating: "15",
    duration: "PT154M",
    releaseDate: "1994-11-25",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his weight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.                Written by\nSoumitra",
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    imdbRating: 8.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY500_CR0,0,336,500_AL_.jpg",
  },
  {
    title: "Sagan om konungens \u00e5terkomst",
    year: "2003",
    genres: ["Adventure", "Drama", "Fantasy"],
    ratings: [
      6, 3, 2, 7, 5, 2, 10, 10, 4, 5, 7, 1, 8, 4, 8, 7, 2, 8, 5, 5, 6, 3, 3, 10,
      10, 2, 1, 8, 3, 5,
    ],
    poster:
      "MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SY500_SX334_AL_.jpg",
    contentRating: "11",
    duration: "PT201M",
    releaseDate: "2003-12-17",
    averageRating: 0,
    originalTitle: "The Lord of the Rings: The Return of the King",
    storyline:
      'The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Hobbits Frodo and Sam reach Mordor in their quest to destroy the "one ring", while Aragorn leads the forces of good against Sauron\'s evil army at the stone city of Minas Tirith.                Written by\nJwelch5742',
    actors: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    imdbRating: 8.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SY500_SX334_AL_.jpg",
  },
  {
    title: "Den gode, den onde, den fule",
    year: "1966",
    genres: ["Western"],
    ratings: [
      2, 7, 2, 2, 3, 2, 4, 7, 10, 7, 7, 7, 2, 3, 8, 8, 6, 3, 6, 4, 8, 7, 9, 1,
      10, 2, 4, 10, 3, 8,
    ],
    poster:
      "MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SY500_CR0,0,328,500_AL_.jpg",
    contentRating: "",
    duration: "PT161M",
    releaseDate: "1968-04-10",
    averageRating: 0,
    originalTitle: "Il buono, il brutto, il cattivo",
    storyline:
      "Blondie (The Good) is a professional gunslinger who is out trying to earn a few dollars. Angel Eyes (The Bad) is a hit man who always commits to a task and sees it through, as long as he is paid to do so. And Tuco (The Ugly) is a wanted outlaw trying to take care of his own hide. Tuco and Blondie share a partnership together making money off Tuco's bounty, but when Blondie unties the partnership, Tuco tries to hunt down Blondie. When Blondie and Tuco come across a horse carriage loaded with dead bodies, they soon learn from the only survivor (Bill Carson) that he and a few other men have buried a stash of gold in a cemetery. Unfortunately Carson dies and Tuco only finds out the name of the cemetery, while Blondie finds out the name on the grave. Now the two must keep each other alive in order to find the gold. Angel Eyes (who had been looking for Bill Carson) discovers that Tuco and Blondie met with Carson and knows they know the location of the gold. All he needs is for the two to ...                Written by\nJeremy Thomson",
    actors: ["Clint Eastwood", "Eli Wallach", "Lee Van Cleef"],
    imdbRating: 8.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SY500_CR0,0,328,500_AL_.jpg",
  },
  {
    title: "Fight Club",
    year: "1999",
    genres: ["Drama"],
    ratings: [
      6, 5, 10, 10, 6, 6, 6, 7, 2, 8, 10, 2, 3, 5, 1, 3, 10, 3, 6, 2, 6, 2, 10,
      4, 4, 8, 9, 10, 10, 5,
    ],
    poster:
      "MV5BZGY5Y2RjMmItNDg5Yy00NjUwLThjMTEtNDc2OGUzNTBiYmM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX290_CR0,0,290,429_AL_.jpg",
    contentRating: "15",
    duration: "PT139M",
    releaseDate: "1999-12-25",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power. When the narrator is exposed to the hidden agenda of Tyler's fight club, he must accept the awful truth that Tyler may not be who he says he is.                Written by\nRhiannon",
    actors: ["Brad Pitt", "Edward Norton", "Meat Loaf"],
    imdbRating: 8.8,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZGY5Y2RjMmItNDg5Yy00NjUwLThjMTEtNDc2OGUzNTBiYmM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX290_CR0,0,290,429_AL_.jpg",
  },
  {
    title: "Sagan om ringen: H\u00e4rskarringen",
    year: "2001",
    genres: ["Adventure", "Drama", "Fantasy"],
    ratings: [
      1, 2, 4, 3, 2, 4, 7, 5, 9, 3, 5, 1, 10, 4, 2, 2, 10, 7, 5, 9, 10, 4, 3, 5,
      8, 3, 2, 5, 5, 4,
    ],
    poster:
      "MV5BNmFmZDdkODMtNzUyMy00NzhhLWFjZmEtMGMzYjNhMDA1NTBkXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SY500_SX342_AL_.jpg",
    contentRating: "11",
    duration: "PT178M",
    releaseDate: "2001-12-19",
    averageRating: 0,
    originalTitle: "The Lord of the Rings: The Fellowship of the Ring",
    storyline:
      "An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!                Written by\nPaul Twomey <toomsp@hotmail.com>",
    actors: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    imdbRating: 8.8,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNmFmZDdkODMtNzUyMy00NzhhLWFjZmEtMGMzYjNhMDA1NTBkXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SY500_SX342_AL_.jpg",
  },
  {
    title: "Rymdimperiet sl\u00e5r tillbaka",
    year: "1980",
    genres: ["Action", "Adventure", "Fantasy"],
    ratings: [
      2, 3, 10, 2, 7, 8, 1, 4, 1, 5, 8, 5, 8, 2, 8, 4, 3, 6, 10, 3, 5, 2, 9, 7,
      3, 1, 10, 6, 7, 10,
    ],
    poster:
      "MV5BYmViY2M2MTYtY2MzOS00YjQ1LWIzYmEtOTBiNjhlMGM0NjZjXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,322,500_AL_.jpg",
    contentRating: "15",
    duration: "PT124M",
    releaseDate: "1980-08-15",
    averageRating: 0,
    originalTitle: "Star Wars: Episode V - The Empire Strikes Back",
    storyline:
      "Luke Skywalker, Han Solo, Princess Leia and Chewbacca face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi master's help will Luke survive when the dark side of the Force beckons him into the ultimate duel with Darth Vader.                Written by\nJwelch5742",
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    imdbRating: 8.8,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYmViY2M2MTYtY2MzOS00YjQ1LWIzYmEtOTBiNjhlMGM0NjZjXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,322,500_AL_.jpg",
  },
  {
    title: "Forrest Gump",
    year: "1994",
    genres: ["Comedy", "Drama", "Romance"],
    ratings: [
      9, 1, 10, 10, 10, 6, 3, 7, 1, 3, 4, 9, 2, 4, 10, 8, 7, 4, 8, 8, 9, 5, 4,
      2, 5, 5, 6, 3, 1, 4,
    ],
    poster:
      "MV5BYThjM2MwZGMtMzg3Ny00NGRkLWE4M2EtYTBiNWMzOTY0YTI4XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,378,500_AL_.jpg",
    contentRating: "11",
    duration: "PT142M",
    releaseDate: "1994-10-14",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.                Written by\naliw135",
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    imdbRating: 8.8,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYThjM2MwZGMtMzg3Ny00NGRkLWE4M2EtYTBiNWMzOTY0YTI4XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,378,500_AL_.jpg",
  },
  {
    title: "Inception",
    year: "2010",
    genres: ["Action", "Adventure", "Sci-Fi"],
    ratings: [
      4, 8, 10, 7, 3, 3, 1, 6, 4, 4, 6, 1, 5, 7, 4, 5, 2, 1, 2, 2, 2, 6, 10, 8,
      5, 6, 1, 4, 1, 5,
    ],
    poster:
      "MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "PT148M",
    releaseDate: "2010-07-23",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible - inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.                Written by\nWarner Bros. Pictures",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    imdbRating: 8.8,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Sagan om de tv\u00e5 tornen",
    year: "2002",
    genres: ["Adventure", "Drama", "Fantasy"],
    ratings: [
      8, 2, 2, 3, 10, 9, 1, 8, 4, 7, 1, 7, 5, 7, 9, 3, 9, 9, 10, 3, 4, 1, 10, 8,
      10, 1, 8, 10, 9, 8,
    ],
    poster:
      "MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SY256_SX175_AL_.jpg",
    contentRating: "11",
    duration: "PT179M",
    releaseDate: "2002-12-18",
    averageRating: 0,
    originalTitle: "The Lord of the Rings: The Two Towers",
    storyline:
      "While Frodo and Sam, now accompanied by a new guide, continue their hopeless journey towards the land of shadow to destroy the One Ring, each member of the broken fellowship plays their part in the battle against the evil wizard Saruman and his armies of Isengard.",
    actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
    imdbRating: 8.7,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SY256_SX175_AL_.jpg",
  },
  {
    title: "G\u00f6kboet",
    year: "1975",
    genres: ["Drama"],
    ratings: [
      2, 8, 4, 8, 7, 9, 2, 8, 5, 9, 3, 5, 6, 8, 7, 9, 2, 7, 9, 9, 7, 3, 7, 8, 7,
      1, 10, 10, 3, 3,
    ],
    poster:
      "MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,336,500_AL_.jpg",
    contentRating: "15",
    duration: "PT133M",
    releaseDate: "1976-02-26",
    averageRating: 0,
    originalTitle: "One Flew Over the Cuckoo's Nest",
    storyline:
      "McMurphy has a criminal past and has once again gotten himself into trouble and is sentenced by the court. To escape labor duties in prison, McMurphy pleads insanity and is sent to a ward for the mentally unstable. Once here, McMurphy both endures and stands witness to the abuse and degradation of the oppressive Nurse Ratched, who gains superiority and power through the flaws of the other inmates. McMurphy and the other inmates band together to make a rebellious stance against the atrocious Nurse.                Written by\nJacob Oberfrank",
    actors: ["Jack Nicholson", "Louise Fletcher", "Michael Berryman"],
    imdbRating: 8.7,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,336,500_AL_.jpg",
  },
  {
    title: "Maffiabr\u00f6der",
    year: "1990",
    genres: ["Biography", "Crime", "Drama"],
    ratings: [
      5, 9, 10, 10, 8, 4, 10, 4, 2, 1, 10, 9, 5, 5, 7, 7, 3, 7, 6, 5, 9, 6, 1,
      3, 3, 9, 9, 3, 5, 5,
    ],
    poster:
      "MV5BNThjMzczMjctZmIwOC00NTQ4LWJhZWItZDdhNTk5ZTdiMWFlXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,334,500_AL_.jpg",
    contentRating: "15",
    duration: "PT146M",
    releaseDate: "1990-09-14",
    averageRating: 0,
    originalTitle: "Goodfellas",
    storyline:
      "Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy?                Written by\nColin Tinto <cst@imdb.com>",
    actors: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
    imdbRating: 8.7,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNThjMzczMjctZmIwOC00NTQ4LWJhZWItZDdhNTk5ZTdiMWFlXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,334,500_AL_.jpg",
  },
  {
    title: "Matrix",
    year: "1999",
    genres: ["Action", "Sci-Fi"],
    ratings: [
      10, 10, 5, 1, 8, 8, 10, 9, 6, 2, 1, 9, 3, 1, 5, 1, 8, 5, 8, 8, 5, 7, 6, 5,
      8, 6, 3, 6, 6, 10,
    ],
    poster:
      "MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,332,500_AL_.jpg",
    contentRating: "15",
    duration: "PT136M",
    releaseDate: "1999-07-14",
    averageRating: 0,
    originalTitle: "The Matrix",
    storyline:
      "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.                Written by\nredcommander27",
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    imdbRating: 8.7,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,332,500_AL_.jpg",
  },
  {
    title: "De sju samurajerna",
    year: "1954",
    genres: ["Adventure", "Drama"],
    ratings: [
      1, 9, 9, 6, 6, 1, 3, 1, 6, 1, 9, 6, 1, 7, 7, 10, 5, 3, 9, 4, 6, 6, 9, 10,
      6, 10, 7, 1, 6, 10,
    ],
    poster:
      "MV5BMTc5MDY1MjU5MF5BMl5BanBnXkFtZTgwNDM2OTE4MzE@._V1_SY500_CR0,0,356,500_AL_.jpg",
    contentRating: "15",
    duration: "PT207M",
    releaseDate: "1965-09-20",
    averageRating: 0,
    originalTitle: "Shichinin no samurai",
    storyline:
      "A veteran samurai, who has fallen on hard times, answers a village's request for protection from bandits. He gathers 6 other samurai to help him, and they teach the townspeople how to defend themselves, and they supply the samurai with three small meals a day. The film culminates in a giant battle when 40 bandits attack the village.                Written by\nColin Tinto <cst@imdb.com>",
    actors: ["Toshir\u00f4 Mifune", "Takashi Shimura", "Keiko Tsushima"],
    imdbRating: 8.7,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDY1MjU5MF5BMl5BanBnXkFtZTgwNDM2OTE4MzE@._V1_SY500_CR0,0,356,500_AL_.jpg",
  },
  {
    title: "Stj\u00e4rnornas krig",
    year: "1977",
    genres: ["Action", "Adventure", "Fantasy"],
    ratings: [
      6, 3, 3, 4, 2, 10, 7, 4, 1, 5, 7, 8, 6, 4, 2, 7, 9, 3, 4, 4, 7, 7, 7, 4,
      8, 2, 7, 5, 2, 9,
    ],
    poster:
      "MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,332,500_AL_.jpg",
    contentRating: "11",
    duration: "PT121M",
    releaseDate: "1977-12-16",
    averageRating: 0,
    originalTitle: "Star Wars",
    storyline:
      "The Imperial Forces, under orders from cruel Darth Vader, hold Princess Leia hostage in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker and Han Solo, captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 and C-3PO to rescue the beautiful princess, help the Rebel Alliance and restore freedom and justice to the Galaxy.                Written by\nJwelch5742",
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    imdbRating: 8.7,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,332,500_AL_.jpg",
  },
  {
    title: "Guds stad",
    year: "2002",
    genres: ["Crime", "Drama"],
    ratings: [
      1, 2, 5, 10, 1, 2, 6, 10, 2, 9, 7, 9, 7, 9, 4, 8, 7, 7, 7, 7, 10, 9, 9, 2,
      6, 6, 6, 2, 1, 8,
    ],
    poster:
      "MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX200_CR0,0,200,296_AL_.jpg",
    contentRating: "15",
    duration: "PT130M",
    releaseDate: "2003-10-17",
    averageRating: 0,
    originalTitle: "Cidade de Deus",
    storyline:
      "Brazil, 1960s, City of God. The Tender Trio robs motels and gas trucks. Younger kids watch and learn well...too well. 1970s: Li'l Z\u00e9 has prospered very well and owns the city. He causes violence and fear as he wipes out rival gangs without mercy. His best friend Ben\u00e9 is the only one to keep him on the good side of sanity. Rocket has watched these two gain power for years, and he wants no part of it. Yet he keeps getting swept up in the madness. All he wants to do is take pictures. 1980s: Things are out of control between the last two remaining gangs...will it ever end? Welcome to the City of God.                Written by\nJeff Mellinger <jeffmellinger@astound.net>",
    actors: ["Alexandre Rodrigues", "Matheus Nachtergaele", "Leandro Firmino"],
    imdbRating: 8.7,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX200_CR0,0,200,296_AL_.jpg",
  },
  {
    title: "Seven",
    year: "1995",
    genres: ["Crime", "Drama", "Mystery"],
    ratings: [
      2, 5, 2, 3, 9, 1, 8, 2, 3, 4, 10, 7, 9, 7, 8, 2, 5, 6, 1, 5, 1, 2, 10, 5,
      1, 7, 4, 8, 9, 4,
    ],
    poster:
      "MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,319,500_AL_.jpg",
    contentRating: "15",
    duration: "PT127M",
    releaseDate: "1995-12-25",
    averageRating: 0,
    originalTitle: "Se7en",
    storyline:
      "A film about two homicide detectives' (Morgan Freeman and (Brad Pitt desperate hunt for a serial killer who justifies his crimes as absolution for the world's ignorance of the Seven Deadly Sins. The movie takes us from the tortured remains of one victim to the next as the sociopathic \"John Doe\" (Kevin Spacey) sermonizes to Detectives Somerset and Mills -- one sin at a time. The sin of Gluttony comes first and the murderer's terrible capacity is graphically demonstrated in the dark and subdued tones characteristic of film noir. The seasoned and cultured but jaded Somerset researches the Seven Deadly Sins in an effort to understand the killer's modus operandi while the bright but green and impulsive Detective Mills (Pitt) scoffs at his efforts to get inside the mind of a killer...                Written by\nMark Fleetwood <mfleetwo@mail.coin.missouri.edu>",
    actors: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,319,500_AL_.jpg",
  },
  {
    title: "N\u00e4r lammen tystnar",
    year: "1991",
    genres: ["Crime", "Drama", "Thriller"],
    ratings: [
      6, 10, 7, 5, 10, 10, 2, 3, 7, 7, 9, 10, 1, 4, 1, 9, 3, 1, 9, 4, 2, 6, 6,
      1, 9, 8, 7, 9, 2, 10,
    ],
    poster:
      "MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
    contentRating: "15",
    duration: "PT118M",
    releaseDate: "1991-03-22",
    averageRating: 0,
    originalTitle: "The Silence of the Lambs",
    storyline:
      "FBI trainee Clarice Starling works hard to advance her career, including trying to hide or put behind her West Virginia roots, of which if some knew would automatically classify her as being backward or white trash. After graduation, she aspires to work in the agency's Behavioral Science Unit under the leadership of Jack Crawford. While she is still a trainee, Crawford does ask her to question Dr. Hannibal Lecter, a psychiatrist imprisoned thus far for eight years in maximum security isolation for being a serial killer, he who cannibalized his victims. Clarice is able to figure out the assignment is to pick Lecter's brains to help them solve another serial murder case, that of someone coined by the media as Buffalo Bill who has so far killed five victims, all located in the eastern US, all young women who are slightly overweight especially around the hips, all who were drowned in natural bodies of water, and all who were stripped of large swaths of skin. She also figures that Crawford...                Written by\nHuggo",
    actors: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
  },
  {
    title: "Livet \u00e4r underbart",
    year: "1946",
    genres: ["Drama", "Family", "Fantasy"],
    ratings: [
      1, 4, 2, 1, 7, 1, 9, 8, 4, 9, 5, 7, 7, 7, 10, 9, 9, 1, 4, 10, 3, 6, 10, 7,
      3, 2, 2, 10, 2, 2,
    ],
    poster:
      "MV5BMTMzMzY5NDc4M15BMl5BanBnXkFtZTcwMzc4NjIxNw@@._V1_SY500_CR0,0,334,500_AL_.jpg",
    contentRating: "15",
    duration: "PT130M",
    releaseDate: "1947-08-04",
    averageRating: 0,
    originalTitle: "It's a Wonderful Life",
    storyline:
      "George Bailey has spent his entire life giving of himself to the people of Bedford Falls. He has always longed to travel but never had the opportunity in order to prevent rich skinflint Mr. Potter from taking over the entire town. All that prevents him from doing so is George's modest building and loan company, which was founded by his generous father. But on Christmas Eve, George's Uncle Billy loses the business's $8,000 while intending to deposit it in the bank. Potter finds the misplaced money and hides it from Billy. When the bank examiner discovers the shortage later that night, George realizes that he will be held responsible and sent to jail and the company will collapse, finally allowing Potter to take over the town. Thinking of his wife, their young children, and others he loves will be better off with him dead, he contemplates suicide. But the prayers of his loved ones result in a gentle angel named Clarence coming to earth to help George, with the promise of earning his ...                Written by\nalfiehitchie",
    actors: ["James Stewart", "Donna Reed", "Lionel Barrymore"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzMzY5NDc4M15BMl5BanBnXkFtZTcwMzc4NjIxNw@@._V1_SY500_CR0,0,334,500_AL_.jpg",
  },
  {
    title: "De misst\u00e4nkta",
    year: "1995",
    genres: ["Crime", "Drama", "Mystery"],
    ratings: [
      5, 8, 6, 6, 4, 2, 1, 9, 6, 2, 5, 1, 6, 10, 1, 8, 7, 6, 10, 3, 7, 7, 5, 1,
      8, 8, 6, 4, 10, 9,
    ],
    poster:
      "MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
    contentRating: "15",
    duration: "PT106M",
    releaseDate: "1995-11-03",
    averageRating: 0,
    originalTitle: "The Usual Suspects",
    storyline:
      "Following a truck hijack in New York, five conmen are arrested and brought together for questioning. As none of them are guilty, they plan a revenge operation against the police. The operation goes well, but then the influence of a legendary mastermind criminal called Keyser S\u00f6ze is felt. It becomes clear that each one of them has wronged S\u00f6ze at some point and must pay back now. The payback job leaves 27 men dead in a boat explosion, but the real question arises now: Who actually is Keyser S\u00f6ze?                Written by\nSoumitra",
    actors: ["Kevin Spacey", "Gabriel Byrne", "Chazz Palminteri"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
  },
  {
    title: "Livet \u00e4r underbart",
    year: "1997",
    genres: ["Comedy", "Drama", "War"],
    ratings: [
      4, 1, 9, 3, 3, 9, 3, 3, 6, 1, 4, 1, 1, 8, 3, 6, 10, 8, 4, 6, 2, 7, 2, 10,
      7, 5, 4, 3, 1, 10,
    ],
    poster:
      "MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_SX335_AL_.jpg",
    contentRating: "11",
    duration: "PT116M",
    releaseDate: "1999-01-22",
    averageRating: 0,
    originalTitle: "La vita \u00e8 bella",
    storyline:
      "In 1930s Italy, a carefree Jewish book keeper named Guido starts a fairy tale life by courting and marrying a lovely woman from a nearby city. Guido and his wife have a son and live happily together until the occupation of Italy by German forces. In an attempt to hold his family together and help his son survive the horrors of a Jewish Concentration Camp, Guido imagines that the Holocaust is a game and that the grand prize for winning is a tank.                Written by\nAnthony Hughes <husnock31@hotmail.com>",
    actors: ["Roberto Benigni", "Nicoletta Braschi", "Giorgio Cantarini"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_SX335_AL_.jpg",
  },
  {
    title: "L\u00e9on",
    year: "1994",
    genres: ["Crime", "Drama", "Thriller"],
    ratings: [
      2, 7, 5, 9, 7, 10, 5, 2, 7, 6, 10, 2, 6, 4, 1, 1, 7, 8, 1, 9, 7, 2, 10, 4,
      7, 9, 5, 6, 2, 8,
    ],
    poster:
      "MV5BMjdjMGU3MGYtN2Y5ZC00MTE4LWE4YWQtMTBhMjc3MTk0ZDUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_SX332_AL_.jpg",
    contentRating: "15",
    duration: "PT110M",
    releaseDate: "1995-02-24",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "After her father, mother, older sister and little brother are killed by her father's employers, the 12-year-old daughter of an abject drug dealer is forced to take refuge in the apartment of a professional hitman who at her request teaches her the methods of his job so she can take her revenge on the corrupt DEA agent who ruined her life by killing her beloved brother.                Written by\nJ. S. Golden",
    actors: ["Jean Reno", "Gary Oldman", "Natalie Portman"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjdjMGU3MGYtN2Y5ZC00MTE4LWE4YWQtMTBhMjc3MTk0ZDUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_SX332_AL_.jpg",
  },
  {
    title: "Spirited Away",
    year: "2001",
    genres: ["Animation", "Adventure", "Family"],
    ratings: [
      4, 8, 7, 6, 10, 9, 2, 5, 4, 5, 10, 2, 7, 1, 9, 4, 4, 6, 1, 4, 9, 10, 9, 3,
      3, 6, 6, 8, 3, 9,
    ],
    poster:
      "MV5BNmU5OTQ0OWQtOTY0OS00Yjg4LWE1NDYtNDRhYWMxYWY4OTMwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg",
    contentRating: "7",
    duration: "PT125M",
    releaseDate: "2003-09-19",
    averageRating: 0,
    originalTitle: "Sen to Chihiro no kamikakushi",
    storyline:
      "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town. When her parents see a restaurant with great-smelling food but no staff, they decide to eat and pay later. However, Chihiro refuses to eat and decides to explore the theme park a bit more. She meets a boy named Haku who tells her that Chihiro and her parents are in danger, and they must leave immediately. She runs to the restaurant and finds that her parents have turned into pigs. In addition, the theme park turns out to be a town inhabited by demons, spirits, and evil gods. At the center of the town is a bathhouse where these creatures go to relax. The owner of the bathhouse ...                Written by\nZachary Harper",
    actors: ["Daveigh Chase", "Suzanne Pleshette", "Miyu Irino"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNmU5OTQ0OWQtOTY0OS00Yjg4LWE1NDYtNDRhYWMxYWY4OTMwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg",
  },
  {
    title: "R\u00e4dda menige Ryan",
    year: "1998",
    genres: ["Drama", "War"],
    ratings: [
      9, 7, 9, 3, 1, 7, 7, 9, 8, 3, 8, 3, 3, 10, 4, 5, 8, 8, 10, 7, 5, 3, 2, 5,
      6, 5, 9, 6, 10, 6,
    ],
    poster:
      "MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,339,500_AL_.jpg",
    contentRating: "15",
    duration: "PT169M",
    releaseDate: "1998-10-09",
    averageRating: 0,
    originalTitle: "Saving Private Ryan",
    storyline:
      "Opening with the Allied invasion of Normandy on 6 June 1944, members of the 2nd Ranger Battalion under Cpt. Miller fight ashore to secure a beachhead. Amidst the fighting, two brothers are killed in action. Earlier in New Guinea, a third brother is KIA. Their mother, Mrs. Ryan, is to receive all three of the grave telegrams on the same day. The United States Army Chief of Staff, George C. Marshall, is given an opportunity to alleviate some of her grief when he learns of a fourth brother, Private James Ryan, and decides to send out 8 men (Cpt. Miller and select members from 2nd Rangers) to find him and bring him back home to his mother...                Written by\nJ.Zelman",
    actors: ["Tom Hanks", "Matt Damon", "Tom Sizemore"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,339,500_AL_.jpg",
  },
  {
    title: "Harmonica - En h\u00e4mnare",
    year: "1968",
    genres: ["Western"],
    ratings: [
      8, 4, 9, 3, 5, 7, 1, 4, 2, 7, 5, 7, 3, 9, 6, 1, 9, 10, 6, 6, 8, 10, 6, 3,
      4, 4, 1, 5, 3, 10,
    ],
    poster:
      "MV5BYjFiOTlmMzgtOGZlYi00NjY0LThmMzEtNmQ0OTgxNGViOTZmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,329,500_AL_.jpg",
    contentRating: "15",
    duration: "PT175M",
    releaseDate: "1969-08-04",
    averageRating: 0,
    originalTitle: "C'era una volta il West",
    storyline:
      "Story of a young woman, Mrs. McBain, who moves from New Orleans to frontier Utah, on the very edge of the American West. She arrives to find her new husband and family slaughtered, but by whom? The prime suspect, coffee-lover Cheyenne, befriends her and offers to go after the real killer, assassin gang leader Frank, in her honor. He is accompanied by Harmonica, a man already on a quest to get even.                Written by\nDrGoodBeat / edited by statmanjeff",
    actors: ["Henry Fonda", "Charles Bronson", "Claudia Cardinale"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYjFiOTlmMzgtOGZlYi00NjY0LThmMzEtNmQ0OTgxNGViOTZmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,329,500_AL_.jpg",
  },
  {
    title: "American History X",
    year: "1998",
    genres: ["Crime", "Drama"],
    ratings: [
      10, 4, 10, 1, 10, 6, 5, 5, 3, 1, 3, 1, 9, 5, 3, 9, 7, 8, 5, 9, 6, 8, 1, 4,
      3, 3, 10, 9, 1, 7,
    ],
    poster:
      "MV5BY2E2MWU5ZDktOTQ0OS00NGIzLTg4YTgtYjFhNTRlMjA1NzFjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY500_SX340_AL_.jpg",
    contentRating: "15",
    duration: "PT119M",
    releaseDate: "1999-02-26",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Derek Vineyard is paroled after serving 3 years in prison for brutally killing two black men who tried to break into/steal his truck. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.                Written by\nNitesh D.(nmxpa7@msn.com)",
    actors: ["Edward Norton", "Edward Furlong", "Beverly D'Angelo"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BY2E2MWU5ZDktOTQ0OS00NGIzLTg4YTgtYjFhNTRlMjA1NzFjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY500_SX340_AL_.jpg",
  },
  {
    title: "Interstellar",
    year: "2014",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    ratings: [
      7, 9, 10, 9, 2, 10, 10, 3, 9, 4, 1, 7, 9, 8, 4, 6, 7, 6, 7, 9, 9, 4, 6, 8,
      2, 8, 3, 10, 2, 5,
    ],
    poster:
      "MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY500_CR0,0,320,500_AL_.jpg",
    contentRating: "11",
    duration: "PT169M",
    releaseDate: "2014-11-07",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.",
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY500_CR0,0,320,500_AL_.jpg",
  },
  {
    title: "Casablanca",
    year: "1942",
    genres: ["Drama", "Romance", "War"],
    ratings: [
      2, 10, 7, 10, 9, 1, 10, 2, 10, 6, 6, 5, 9, 1, 10, 2, 6, 9, 7, 3, 5, 6, 7,
      4, 2, 10, 5, 6, 10, 10,
    ],
    poster:
      "MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY377_SX250_AL_.jpg",
    contentRating: "PG",
    duration: "PT102M",
    releaseDate: "1943-10-11",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "In World War II Casablanca, Rick Blaine, exiled American and former freedom fighter, runs the most popular nightspot in town. The cynical lone wolf Blaine comes into the possession of two valuable letters of transit. When Nazi Major Strasser arrives in Casablanca, the sycophantic police Captain Renault does what he can to please him, including detaining a Czechoslovak underground leader Victor Laszlo. Much to Rick's surprise, Lazslo arrives with Ilsa, Rick's one time love. Rick is very bitter towards Ilsa, who ran out on him in Paris, but when he learns she had good reason to, they plan to run off together again using the letters of transit. Well, that was their original plan....                Written by\nGary Jackson <garyjack5@cogeco.ca>",
    actors: ["Humphrey Bogart", "Ingrid Bergman", "Paul Henreid"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY377_SX250_AL_.jpg",
  },
  {
    title: "Psycho",
    year: "1960",
    genres: ["Horror", "Mystery", "Thriller"],
    ratings: [
      1, 6, 3, 4, 9, 5, 7, 1, 4, 7, 10, 4, 3, 9, 5, 2, 2, 7, 2, 8, 8, 10, 10, 4,
      3, 5, 8, 5, 1, 1,
    ],
    poster:
      "MV5BMDI3OWRmOTEtOWJhYi00N2JkLTgwNGItMjdkN2U0NjFiZTYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,331,500_AL_.jpg",
    contentRating: "",
    duration: "PT109M",
    releaseDate: "1960-10-31",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Phoenix officeworker Marion Crane is fed up with the way life has treated her. She has to meet her lover Sam in lunch breaks and they cannot get married because Sam has to give most of his money away in alimony. One Friday Marion is trusted to bank $40,000 by her employer. Seeing the opportunity to take the money and start a new life, Marion leaves town and heads towards Sam's California store. Tired after the long drive and caught in a storm, she gets off the main highway and pulls into The Bates Motel. The motel is managed by a quiet young man called Norman who seems to be dominated by his mother.                Written by\nCol Needham <col@imdb.com>",
    actors: ["Anthony Perkins", "Janet Leigh", "Vera Miles"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMDI3OWRmOTEtOWJhYi00N2JkLTgwNGItMjdkN2U0NjFiZTYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,331,500_AL_.jpg",
  },
  {
    title: "Stadens ljus",
    year: "1931",
    genres: ["Comedy", "Drama", "Romance"],
    ratings: [
      1, 5, 5, 10, 4, 10, 6, 6, 4, 5, 7, 1, 6, 3, 3, 9, 10, 2, 7, 9, 3, 3, 4, 5,
      1, 4, 8, 7, 10, 6,
    ],
    poster:
      "MV5BZDRjMmI3ZjgtMGE3Mi00NjY5LTg0NWMtMmU3YzgyMjhmMjIzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY500_CR0,0,330,500_AL_.jpg",
    contentRating: "Btl",
    duration: "PT87M",
    releaseDate: "1931-04-20",
    averageRating: 0,
    originalTitle: "City Lights",
    storyline:
      "A tramp falls in love with a beautiful blind girl. Her family is in financial trouble. The tramp's on-and-off friendship with a wealthy man allows him to be the girl's benefactor and suitor.                Written by\nJohn J. Magee <magee@helix.mgh.harvard.edu>",
    actors: ["Charles Chaplin", "Virginia Cherrill", "Florence Lee"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZDRjMmI3ZjgtMGE3Mi00NjY5LTg0NWMtMmU3YzgyMjhmMjIzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY500_CR0,0,330,500_AL_.jpg",
  },
  {
    title: "Den gr\u00f6na milen",
    year: "1999",
    genres: ["Crime", "Drama", "Fantasy"],
    ratings: [
      3, 3, 5, 2, 3, 4, 7, 6, 7, 1, 10, 10, 9, 8, 9, 4, 5, 8, 1, 9, 3, 2, 8, 8,
      6, 9, 7, 10, 4, 2,
    ],
    poster:
      "MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SY370_SX250_AL_.jpg",
    contentRating: "15",
    duration: "PT189M",
    releaseDate: "2000-02-11",
    averageRating: 0,
    originalTitle: "The Green Mile",
    storyline:
      "Death Row guards at a penitentiary, in the 1930's, have a moral dilemma with their job when they discover one of their prisoners, a convicted murderer, has a special gift.                Written by\nGuy Johns",
    actors: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SY370_SX250_AL_.jpg",
  },
  {
    title: "En ov\u00e4ntad v\u00e4nskap",
    year: "2011",
    genres: ["Biography", "Comedy", "Drama"],
    ratings: [
      4, 6, 6, 10, 2, 7, 7, 3, 6, 7, 4, 10, 7, 4, 2, 4, 5, 4, 1, 9, 4, 3, 9, 10,
      1, 9, 7, 3, 5, 8,
    ],
    poster:
      "MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "7",
    duration: "PT112M",
    releaseDate: "2012-09-21",
    averageRating: 0,
    originalTitle: "Intouchables",
    storyline:
      "In Paris, the aristocratic and intellectual Philippe is a quadriplegic millionaire who is interviewing candidates for the position of his carer, with his red-haired secretary Magalie. Out of the blue, the rude African Driss cuts the line of candidates and brings a document from the Social Security and asks Phillipe to sign it to prove that he is seeking a job position so he can receive his unemployment benefit. Philippe challenges Driss, offering him a trial period of one month to gain experience helping him. Then Driss can decide whether he would like to stay with him or not. Driss accepts the challenge and moves to the mansion, changing the boring life of Phillipe and his employees.                Written by\nClaudio Carvalho, Rio de Janeiro, Brazil",
    actors: ["Fran\u00e7ois Cluzet", "Omar Sy", "Anne Le Ny"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Moderna tider",
    year: "1936",
    genres: ["Comedy", "Drama", "Family"],
    ratings: [
      8, 2, 6, 5, 9, 8, 4, 2, 3, 8, 4, 9, 7, 1, 1, 4, 1, 4, 6, 4, 9, 5, 3, 1, 1,
      2, 8, 7, 1, 2,
    ],
    poster:
      "MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY450_SX289_AL_.jpg",
    contentRating: "Btl",
    duration: "PT87M",
    releaseDate: "1936-04-16",
    averageRating: 0,
    originalTitle: "Modern Times",
    storyline:
      "Chaplins last 'silent' film, filled with sound effects, was made when everyone else was making talkies. Charlie turns against modern society, the machine age, (The use of sound in films ?) and progress. Firstly we see him frantically trying to keep up with a production line, tightening bolts. He is selected for an experiment with an automatic feeding machine, but various mishaps leads his boss to believe he has gone mad, and Charlie is sent to a mental hospital... When he gets out, he is mistaken for a communist while waving a red flag, sent to jail, foils a jailbreak, and is let out again. We follow Charlie through many more escapades before the film is out.                Written by\nColin Tinto <cst@imdb.com>",
    actors: ["Charles Chaplin", "Paulette Goddard", "Henry Bergman"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY450_SX289_AL_.jpg",
  },
  {
    title: "Jakten p\u00e5 den f\u00f6rsvunna skatten",
    year: "1981",
    genres: ["Action", "Adventure"],
    ratings: [
      1, 9, 4, 4, 2, 10, 7, 1, 8, 10, 3, 9, 4, 6, 5, 5, 5, 3, 6, 5, 2, 5, 1, 9,
      2, 10, 1, 10, 4, 2,
    ],
    poster:
      "MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SY500_CR0,0,332,500_AL_.jpg",
    contentRating: "PG",
    duration: "PT115M",
    releaseDate: "1981-08-07",
    averageRating: 0,
    originalTitle: "Raiders of the Lost Ark",
    storyline:
      "The year is 1936. An archeology professor named Indiana Jones is venturing in the jungles of South America searching for a golden statue. Unfortunately, he sets off a deadly trap but miraculously escapes. Then, Jones hears from a museum curator named Marcus Brody about a biblical artifact called The Ark of the Covenant, which can hold the key to humanly existence. Jones has to venture to vast places such as Nepal and Egypt to find this artifact. However, he will have to fight his enemy Rene Belloq and a band of Nazis in order to reach it.                Written by\nJohn Wiggins",
    actors: ["Harrison Ford", "Karen Allen", "Paul Freeman"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SY500_CR0,0,332,500_AL_.jpg",
  },
  {
    title: "F\u00f6nstret \u00e5t g\u00e5rden",
    year: "1954",
    genres: ["Mystery", "Thriller"],
    ratings: [
      9, 4, 1, 2, 8, 9, 3, 2, 7, 3, 8, 6, 10, 7, 2, 6, 1, 3, 10, 10, 5, 1, 7, 5,
      2, 2, 6, 3, 9, 2,
    ],
    poster:
      "MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,341,500_AL_.jpg",
    contentRating: "15",
    duration: "PT112M",
    releaseDate: "1955-06-13",
    averageRating: 0,
    originalTitle: "Rear Window",
    storyline:
      'Professional photographer L.B. "Jeff" Jeffries breaks his leg while getting an action shot at an auto race. Confined to his New York apartment, he spends his time looking out of the rear window observing the neighbors. He begins to suspect that a man across the courtyard may have murdered his wife. Jeff enlists the help of his high society fashion-consultant girlfriend Lisa Freemont and his visiting nurse Stella to investigate.                Written by\nCol Needham <col@imdb.com>',
    actors: ["James Stewart", "Grace Kelly", "Wendell Corey"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,341,500_AL_.jpg",
  },
  {
    title: "The Pianist",
    year: "2002",
    genres: ["Biography", "Drama", "War"],
    ratings: [
      10, 8, 3, 5, 10, 4, 2, 9, 10, 1, 6, 4, 7, 4, 10, 6, 8, 3, 3, 10, 7, 10, 8,
      5, 5, 5, 2, 9, 3, 4,
    ],
    poster:
      "MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,362,500_AL_.jpg",
    contentRating: "15",
    duration: "PT150M",
    releaseDate: "2003-08-15",
    averageRating: 0,
    originalTitle: "",
    storyline:
      'In this adaptation of the autobiography "The Pianist: The Extraordinary True Story of One Man\'s Survival in Warsaw, 1939-1945," Wladyslaw Szpilman, a Polish Jewish radio station pianist, sees Warsaw change gradually as World War II begins. Szpilman is forced into the Warsaw Ghetto, but is later separated from his family during Operation Reinhard. From this time until the concentration camp prisoners are released, Szpilman hides in various locations among the ruins of Warsaw.                Written by\nJwelch5742',
    actors: ["Adrien Brody", "Thomas Kretschmann", "Frank Finlay"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,362,500_AL_.jpg",
  },
  {
    title: "The Departed",
    year: "2006",
    genres: ["Crime", "Drama", "Thriller"],
    ratings: [
      4, 7, 9, 2, 9, 2, 8, 7, 10, 7, 10, 10, 5, 8, 9, 7, 6, 10, 2, 8, 5, 7, 1,
      3, 4, 1, 8, 5, 2, 3,
    ],
    poster:
      "MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX225_CR0,0,225,332_AL_.jpg",
    contentRating: "15",
    duration: "PT151M",
    releaseDate: "2007-01-12",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "In South Boston, the state police force is waging war on Irish-American organized crime. Young undercover cop Billy Costigan is assigned to infiltrate the mob syndicate run by gangland chief Frank Costello. While Billy quickly gains Costello's confidence, Colin Sullivan, a hardened young criminal who has infiltrated the state police as an informer for the syndicate is rising to a position of power in the Special Investigation Unit. Each man becomes deeply consumed by their double lives, gathering information about the plans and counter-plans of the operations they have penetrated. But when it becomes clear to both the mob and the police that there is a mole in their midst, Billy and Colin are suddenly in danger of being caught and exposed to the enemy - and each must race to uncover the identity of the other man in time to save themselves. But is either willing to turn on their friends and comrades they've made during their long stints undercover?                Written by\nAnonymous",
    actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX225_CR0,0,225,332_AL_.jpg",
  },
  {
    title: "Terminator 2 - Domedagen",
    year: "1991",
    genres: ["Action", "Sci-Fi", "Thriller"],
    ratings: [
      4, 3, 9, 7, 8, 8, 6, 7, 4, 4, 5, 1, 9, 7, 1, 8, 10, 5, 6, 7, 4, 1, 5, 9,
      3, 7, 7, 8, 7, 7,
    ],
    poster:
      "MV5BZDM2YjYwYWMtMWZlNi00ZDQxLWExMDctMDAzNzQ0OTkzZjljXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "PT137M",
    releaseDate: "1991-09-13",
    averageRating: 0,
    originalTitle: "Terminator 2: Judgment Day",
    storyline:
      "Over 10 years have passed since the first cyborg called The Terminator tried to kill Sarah Connor and her unborn son, John Connor. John Connor, the future leader of the human resistance, is now a healthy young boy. However another Terminator is sent back through time called the T-1000, which is more advanced and more powerful than its predecessor. The Mission: to kill John Connor when he's still a child. However, Sarah and John do not have to face this threat of a Terminator alone. Another Terminator is also sent back through time. The mission: to protect John and Sarah Connor at all costs. The battle for tomorrow has begun...                Written by\nEric ggg",
    actors: ["Arnold Schwarzenegger", "Linda Hamilton", "Edward Furlong"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM2YjYwYWMtMWZlNi00ZDQxLWExMDctMDAzNzQ0OTkzZjljXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Tillbaka till framtiden",
    year: "1985",
    genres: ["Adventure", "Comedy", "Sci-Fi"],
    ratings: [
      10, 8, 8, 4, 10, 9, 1, 8, 8, 5, 10, 2, 3, 7, 1, 5, 7, 7, 1, 3, 4, 8, 9,
      10, 10, 9, 2, 6, 8, 7,
    ],
    poster:
      "MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,321,500_AL_.jpg",
    contentRating: "11",
    duration: "PT116M",
    releaseDate: "1985-12-18",
    averageRating: 0,
    originalTitle: "Back to the Future",
    storyline:
      'Marty McFly, a typical American teenager of the Eighties, is accidentally sent back to 1955 in a plutonium-powered DeLorean "time machine" invented by a slightly mad scientist. During his often hysterical, always amazing trip back in time, Marty must make certain his teenage parents-to-be meet and fall in love - so he can get back to the future.                Written by\nRobert Lynch <docrlynch@yahoo.com>',
    actors: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,321,500_AL_.jpg",
  },
  {
    title: "Whiplash",
    year: "2014",
    genres: ["Drama", "Music"],
    ratings: [
      4, 1, 1, 2, 2, 4, 9, 3, 9, 1, 3, 7, 3, 3, 10, 8, 8, 4, 2, 2, 2, 5, 6, 10,
      10, 8, 2, 9, 3, 6,
    ],
    poster:
      "MV5BOTVhMWQ5MDktMGE3OS00MjVlLWExZWYtMzY2MTg4ZGFiZDQ5L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "PT107M",
    releaseDate: "2015-02-06",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A young and talented drummer attending a prestigious music academy finds himself under the wing of the most respected professor at the school, one who does not hold back on abuse towards his students. The two form an odd relationship as the student wants to achieve greatness, and the professor pushes him.                Written by\nandrewhodkinson",
    actors: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTVhMWQ5MDktMGE3OS00MjVlLWExZWYtMzY2MTg4ZGFiZDQ5L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Gladiator",
    year: "2000",
    genres: ["Action", "Adventure", "Drama"],
    ratings: [
      4, 4, 7, 6, 5, 3, 5, 2, 2, 2, 10, 8, 9, 5, 8, 1, 1, 1, 6, 6, 9, 2, 2, 4,
      9, 10, 7, 4, 9, 9,
    ],
    poster:
      "MV5BMTgwMzQzNTQ1Ml5BMl5BanBnXkFtZTgwMDY2NTYxMTE@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "PT155M",
    releaseDate: "2000-05-19",
    averageRating: 0,
    originalTitle: "",
    storyline:
      'Maximus is a powerful Roman general, loved by the people and the aging Emperor, Marcus Aurelius. Before his death, the Emperor chooses Maximus to be his heir over his own son, Commodus, and a power struggle leaves Maximus and his family condemned to death. The powerful general is unable to save his family, and his loss of will allows him to get captured and put into the Gladiator games until he dies. The only desire that fuels him now is the chance to rise to the top so that he will be able to look into the eyes of the man who will feel his revenge.                Written by\nChris "Morphy" Terry',
    actors: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwMzQzNTQ1Ml5BMl5BanBnXkFtZTgwMDY2NTYxMTE@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Memento",
    year: "2000",
    genres: ["Mystery", "Thriller"],
    ratings: [
      6, 5, 6, 4, 10, 2, 3, 7, 2, 8, 10, 7, 9, 6, 7, 2, 5, 5, 3, 10, 2, 9, 8, 5,
      3, 3, 7, 1, 1, 7,
    ],
    poster:
      "MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,340,500_AL_.jpg",
    contentRating: "15",
    duration: "PT113M",
    releaseDate: "2001-07-13",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Memento chronicles two separate stories of Leonard, an ex-insurance investigator who can no longer build new memories, as he attempts to find the murderer of his wife, which is the last thing he remembers. One story line moves forward in time while the other tells the story backwards revealing more each time.                Written by\nScion013",
    actors: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,340,500_AL_.jpg",
  },
  {
    title: "Apocalypse",
    year: "1979",
    genres: ["Drama", "War"],
    ratings: [
      4, 4, 4, 7, 2, 5, 8, 2, 7, 6, 4, 2, 1, 1, 1, 10, 9, 4, 3, 1, 1, 6, 3, 1,
      10, 9, 1, 6, 9, 6,
    ],
    poster:
      "MV5BODViM2VjYWYtMzU5Ny00ZjczLWEzNjMtODZmNGMwZDAxNzJkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SY370_CR0,0,242,370_AL_.jpg",
    contentRating: "15",
    duration: "PT153M",
    releaseDate: "1979-10-26",
    averageRating: 0,
    originalTitle: "Apocalypse Now",
    storyline:
      "It is the height of the war in Vietnam, and U.S. Army Captain Willard is sent by Colonel Lucas and a General to carry out a mission that, officially, 'does not exist - nor will it ever exist'. The mission: To seek out a mysterious Green Beret Colonel, Walter Kurtz, whose army has crossed the border into Cambodia and is conducting hit-and-run missions against the Viet Cong and NVA. The army believes Kurtz has gone completely insane and Willard's job is to eliminate him! Willard, sent up the Nung River on a U.S. Navy patrol boat, discovers that his target is one of the most decorated officers in the U.S. Army. His crew meets up with surfer-type Lt-Colonel Kilgore, head of a U.S Army helicopter cavalry group which eliminates a Viet Cong outpost to provide an entry point into the Nung River. After some hair-raising encounters, in which some of his crew are killed, Willard, Lance and Chef reach Colonel Kurtz's outpost, beyond the Do Lung Bridge. Now, after becoming prisoners of Kurtz, will...                Written by\nDerek O'Cain",
    actors: ["Martin Sheen", "Marlon Brando", "Robert Duvall"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODViM2VjYWYtMzU5Ny00ZjczLWEzNjMtODZmNGMwZDAxNzJkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SY370_CR0,0,242,370_AL_.jpg",
  },
  {
    title: "The Prestige",
    year: "2006",
    genres: ["Drama", "Mystery", "Sci-Fi"],
    ratings: [
      10, 1, 6, 10, 6, 4, 1, 10, 9, 6, 8, 8, 1, 7, 5, 1, 8, 9, 2, 5, 6, 4, 7,
      10, 4, 3, 9, 3, 10, 1,
    ],
    poster:
      "MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX225_CR0,0,225,333_AL_.jpg",
    contentRating: "11",
    duration: "PT130M",
    releaseDate: "2006-12-25",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "In the end of the Nineteenth Century, in London, Robert Angier, his beloved wife Julia McCullough and Alfred Borden are friends and assistants of a magician. When Julia accidentally dies during a performance, Robert blames Alfred for her death and they become enemies. Both become famous and rival magicians, sabotaging the performance of the other on the stage. When Alfred performs a successful trick, Robert becomes obsessed trying to disclose the secret of his competitor with tragic consequences.                Written by\nClaudio Carvalho, Rio de Janeiro, Brazil",
    actors: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX225_CR0,0,225,333_AL_.jpg",
  },
  {
    title: "Lejonkungen",
    year: "1994",
    genres: ["Animation", "Adventure", "Drama"],
    ratings: [
      6, 7, 8, 3, 2, 6, 4, 9, 8, 7, 7, 6, 10, 2, 6, 8, 1, 4, 4, 5, 3, 7, 8, 4,
      2, 5, 4, 8, 7, 1,
    ],
    poster:
      "MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SY500_CR0,0,336,500_AL_.jpg",
    contentRating: "7",
    duration: "PT88M",
    releaseDate: "1994-11-18",
    averageRating: 0,
    originalTitle: "The Lion King",
    storyline:
      "A young lion Prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young Prince must decide his fate: will he remain an outcast, or face his demons and become what he needs to be?                Written by\nfemaledragon1234",
    actors: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SY500_CR0,0,336,500_AL_.jpg",
  },
  {
    title: "Alien",
    year: "1979",
    genres: ["Horror", "Sci-Fi"],
    ratings: [
      6, 10, 2, 5, 4, 3, 5, 8, 10, 6, 7, 9, 7, 5, 9, 2, 10, 9, 10, 3, 5, 9, 5,
      8, 2, 4, 3, 3, 7, 5,
    ],
    poster:
      "MV5BNDNhN2IxZWItNGEwYS00ZDNhLThiM2UtODU3NWJlZjBkYjQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,340,500_AL_.jpg",
    contentRating: "15",
    duration: "PT117M",
    releaseDate: "1979-11-02",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A commercial crew aboard the deep space towing vessel, Nostromo is on its way home when they pick up an SOS warning from a distant moon. What they don't know is that the SOS warning is not like any other ordinary warning call. Picking up the signal, the crew realize that they are not alone on the spaceship when an alien stowaway is on the cargo ship.                Written by\nblazesnakes9",
    actors: ["Sigourney Weaver", "Tom Skerritt", "John Hurt"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDNhN2IxZWItNGEwYS00ZDNhLThiM2UtODU3NWJlZjBkYjQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,340,500_AL_.jpg",
  },
  {
    title:
      "Dr. Strangelove eller: Hur jag slutade \u00e4ngslas och l\u00e4rde mig \u00e4lska bomben",
    year: "1964",
    genres: ["Comedy"],
    ratings: [
      8, 2, 3, 10, 5, 8, 5, 7, 4, 1, 8, 9, 10, 1, 9, 1, 2, 1, 1, 7, 10, 1, 5, 5,
      8, 8, 1, 2, 2, 5,
    ],
    poster:
      "MV5BNTkxYjUxNDYtZGY0My00NTc2LThiZmYtNmNmNmU0NGVkZWYwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SY500_CR0,0,326,500_AL_.jpg",
    contentRating: "11",
    duration: "PT95M",
    releaseDate: "1964-04-13",
    averageRating: 0,
    originalTitle:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    storyline:
      "Paranoid Brigadier General Jack D. Ripper of Burpelson Air Force Base, believing that fluoridation of the American water supply is a Soviet plot to poison the U.S. populace, is able to deploy through a back door mechanism a nuclear attack on the Soviet Union without the knowledge of his superiors, including the Chair of the Joint Chiefs of Staff, General Buck Turgidson, and President Merkin Muffley. Only Ripper knows the code to recall the B-52 bombers and he has shut down communication in and out of Burpelson as a measure to protect this attack. Ripper's executive officer, RAF Group Captain Lionel Mandrake (on exchange from Britain), who is being held at Burpelson by Ripper, believes he knows the recall codes if he can only get a message to the outside world. Meanwhile at the Pentagon War Room, key persons including Muffley, Turgidson and nuclear scientist and adviser, a former Nazi named Dr. Strangelove, are discussing measures to stop the attack or mitigate its blow-up into an all ...                Written by\nHuggo",
    actors: ["Peter Sellers", "George C. Scott", "Sterling Hayden"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTkxYjUxNDYtZGY0My00NTc2LThiZmYtNmNmNmU0NGVkZWYwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SY500_CR0,0,326,500_AL_.jpg",
  },
  {
    title: "Sunset Boulevard",
    year: "1950",
    genres: ["Drama", "Film-Noir"],
    ratings: [
      9, 9, 8, 6, 5, 3, 6, 7, 6, 8, 8, 1, 6, 8, 5, 2, 9, 1, 1, 2, 4, 7, 9, 6, 1,
      7, 10, 7, 3, 2,
    ],
    poster:
      "MV5BMTc3NDYzODAwNV5BMl5BanBnXkFtZTgwODg1MTczMTE@._V1_SY250_SX166_AL_.jpg",
    contentRating: "15",
    duration: "PT110M",
    releaseDate: "1950-12-20",
    averageRating: 0,
    originalTitle: "Sunset Blvd.",
    storyline:
      "In Hollywood of the 50's, the obscure screenplay writer Joe Gillis is not able to sell his work to the studios, is full of debts and is thinking in returning to his hometown to work in an office. While trying to escape from his creditors, he has a flat tire and parks his car in a decadent mansion in Sunset Boulevard. He meets the owner and former silent-movie star Norma Desmond, who lives alone wit her butler and driver Max von Mayerling. Norma is demented and believes she will return to the cinema industry, and is protected and isolated from the world by Max, who was his director and husband in the past and still loves her. Norma proposes Joe to move to the mansion and help her in writing a screenplay for her comeback to the cinema, and the small-time writer becomes her lover and gigolo. When Joe falls in love for the young aspirant writer Betty Schaefer, Norma becomes jealous and completely insane and her madness leads to a tragic end.                Written by\nClaudio Carvalho, Rio de Janeiro, Brazil",
    actors: ["William Holden", "Gloria Swanson", "Erich von Stroheim"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3NDYzODAwNV5BMl5BanBnXkFtZTgwODg1MTczMTE@._V1_SY250_SX166_AL_.jpg",
  },
  {
    title: "Diktatorn",
    year: "1940",
    genres: ["Comedy", "Drama", "War"],
    ratings: [
      10, 5, 5, 1, 7, 4, 9, 1, 1, 4, 5, 4, 3, 2, 1, 3, 3, 4, 5, 7, 7, 4, 6, 8,
      10, 1, 1, 8, 4, 9,
    ],
    poster:
      "MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,338,500_AL_.jpg",
    contentRating: "",
    duration: "PT125M",
    releaseDate: "1945-11-19",
    averageRating: 0,
    originalTitle: "The Great Dictator",
    storyline:
      "Twenty years after the end of WWI in which the nation of Tomainia was on the losing side, Adenoid Hynkel has risen to power as the ruthless dictator of the country. He believes in a pure Aryan state, and the decimation of the Jews. This situation is unknown to a simple Jewish-Tomainian barber who has since been hospitalized the result of a WWI battle. Upon his release, the barber, who had been suffering from memory loss about the war, is shown the new persecuted life of the Jews by many living in the Jewish ghetto, including a washerwoman named Hannah, with whom he begins a relationship. The barber is ultimately spared such persecution by Commander Schultz, who he saved in that WWI battle. The lives of all Jews in Tomainia are eventually spared with a policy shift by Hynkel himself, who is doing so for ulterior motives. But those motives include a want for world domination, starting with the invasion of neighboring Osterlich, which may be threatened by Benzino Napaloni, the dictator ...                Written by\nHuggo",
    actors: ["Charles Chaplin", "Paulette Goddard", "Jack Oakie"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,338,500_AL_.jpg",
  },
  {
    title: "Cinema Paradiso",
    year: "1988",
    genres: ["Drama"],
    ratings: [
      5, 2, 2, 8, 1, 8, 3, 4, 3, 6, 8, 7, 2, 1, 8, 8, 6, 5, 9, 4, 4, 3, 6, 1, 7,
      7, 1, 4, 1, 6,
    ],
    poster:
      "MV5BMjIzMTgzOTEwOF5BMl5BanBnXkFtZTgwNTUxNjcxMTE@._V1_SY249_CR0,0,168,249_AL_.jpg",
    contentRating: "11",
    duration: "PT155M",
    releaseDate: "1990-01-19",
    averageRating: 0,
    originalTitle: "Nuovo Cinema Paradiso",
    storyline:
      "A famous film director remembers his childhood at the Cinema Paradiso where Alfredo, the projectionist, first brought about his love of films. He returns home to his Sicilian village for the first time after almost 30 years and is reminded of his first love, Elena, who disappeared from his life before he left for Rome.                Written by\nGraeme Roy <gsr@cbmamiga.demon.co.uk>",
    actors: ["Philippe Noiret", "Enzo Cannavale", "Antonella Attili"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzMTgzOTEwOF5BMl5BanBnXkFtZTgwNTUxNjcxMTE@._V1_SY249_CR0,0,168,249_AL_.jpg",
  },
  {
    title: "De andras liv",
    year: "2006",
    genres: ["Drama", "Thriller"],
    ratings: [
      10, 2, 1, 3, 7, 6, 3, 8, 9, 9, 1, 2, 1, 4, 3, 2, 2, 8, 8, 6, 3, 7, 4, 9,
      9, 9, 10, 1, 2, 2,
    ],
    poster:
      "MV5BNDUzNjYwNDYyNl5BMl5BanBnXkFtZTcwNjU3ODQ0MQ@@._V1_SX225_CR0,0,225,337_AL_.jpg",
    contentRating: "7",
    duration: "PT137M",
    releaseDate: "2006-11-10",
    averageRating: 0,
    originalTitle: "Das Leben der Anderen",
    storyline:
      "Gerd Wiesler is an officer with the Stasi, the East German secret police. The film begins in 1984 when Wiesler attends a play written by Georg Dreyman, who is considered by many to be the ultimate example of the loyal citizen. Wiesler has a gut feeling that Dreyman can't be as ideal as he seems and believes surveillance is called for. The Minister of Culture agrees but only later does Wiesler learn that the Minister sees Dreyman as a rival and lusts after his partner Christa-Maria. The more time he spends listening in on them, the more he comes to care about them. The once rigid Stasi officer begins to intervene in their lives, in a positive way, protecting them whenever possible. Eventually, Wiesler activities catch up to him and while there is no proof of wrongdoing, he finds himself in menial jobs - until the unbelievable happens.                Written by\ngarykmcd",
    actors: ["Ulrich M\u00fche", "Martina Gedeck", "Sebastian Koch"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDUzNjYwNDYyNl5BMl5BanBnXkFtZTcwNjU3ODQ0MQ@@._V1_SX225_CR0,0,225,337_AL_.jpg",
  },
  {
    title: "Eldflugornas grav",
    year: "1988",
    genres: ["Animation", "Drama", "War"],
    ratings: [
      7, 1, 5, 7, 3, 2, 8, 9, 2, 1, 8, 1, 9, 8, 8, 8, 5, 2, 1, 2, 4, 10, 3, 10,
      9, 2, 4, 10, 5, 4,
    ],
    poster:
      "MV5BZjEwNDVhZjMtYzA1MS00ZWUxLThjOGUtZTliNGZiNGYyMjA3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,353,500_AL_.jpg",
    contentRating: "11",
    duration: "PT89M",
    releaseDate: "1988-04-16",
    averageRating: 0,
    originalTitle: "Hotaru no haka",
    storyline:
      "The story of Seita and Satsuko, two young Japanese siblings, living in the declining days of World War II. When an American firebombing separates the two children from their parents, the two siblings must rely completely on one another while they struggle to fight for their survival.                Written by\nKyle Perez",
    actors: ["Tsutomu Tatsumi", "Ayano Shiraishi", "Akemi Yamaguchi"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZjEwNDVhZjMtYzA1MS00ZWUxLThjOGUtZTliNGZiNGYyMjA3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,353,500_AL_.jpg",
  },
  {
    title: "\u00c4rans v\u00e4g",
    year: "1957",
    genres: ["Drama", "War"],
    ratings: [
      5, 10, 5, 7, 6, 8, 7, 7, 4, 9, 8, 6, 8, 9, 9, 4, 7, 10, 7, 10, 10, 3, 10,
      2, 6, 10, 9, 4, 10, 8,
    ],
    poster:
      "MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,326,500_AL_.jpg",
    contentRating: "15",
    duration: "PT88M",
    releaseDate: "1958-05-08",
    averageRating: 0,
    originalTitle: "Paths of Glory",
    storyline:
      "The futility and irony of the war in the trenches in WWI is shown as a unit commander in the French army must deal with the mutiny of his men and a glory-seeking general after part of his force falls back under fire in an impossible attack.                Written by\nKeith Loh <loh@sfu.ca>",
    actors: ["Kirk Douglas", "Ralph Meeker", "Adolphe Menjou"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,326,500_AL_.jpg",
  },
  {
    title: "Django Unchained",
    year: "2012",
    genres: ["Drama", "Western"],
    ratings: [
      8, 4, 8, 6, 9, 10, 10, 6, 2, 8, 2, 10, 9, 7, 6, 5, 9, 5, 2, 9, 3, 9, 6, 1,
      1, 7, 4, 2, 10, 10,
    ],
    poster:
      "MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "PT165M",
    releaseDate: "2013-01-18",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A German dentist buys the freedom of a slave and trains him with the intent to make him his deputy bounty hunter. Instead, he is led to the site of the slave's wife who belongs to a ruthless plantation owner.                Written by\nBenLobel",
    actors: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "The Shining",
    year: "1980",
    genres: ["Drama", "Horror"],
    ratings: [
      1, 6, 8, 4, 6, 4, 8, 2, 7, 4, 5, 9, 9, 1, 10, 3, 2, 4, 8, 2, 9, 8, 3, 9,
      10, 3, 7, 5, 5, 9,
    ],
    poster:
      "MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY476_CR0,0,313,476_AL_.jpg",
    contentRating: "15",
    duration: "PT146M",
    releaseDate: "1980-09-26",
    averageRating: 0,
    originalTitle: "",
    storyline:
      'Signing a contract, Jack Torrance, a normal writer and former teacher agrees to take care of a hotel which has a long, violent past that puts everyone in the hotel in a nervous situation. While Jack slowly gets more violent and angry of his life, his son, Danny, tries to use a special talent, the "Shining", to inform the people outside about whatever that is going on in the hotel.                Written by\nJ. S. Golden',
    actors: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY476_CR0,0,313,476_AL_.jpg",
  },
  {
    title: "La La Land",
    year: "2016",
    genres: ["Comedy", "Drama", "Musical"],
    ratings: [
      1, 1, 4, 8, 9, 5, 9, 8, 2, 3, 3, 10, 2, 6, 9, 1, 5, 9, 7, 9, 1, 5, 1, 9,
      5, 2, 2, 3, 1, 1,
    ],
    poster:
      "MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "Btl",
    duration: "PT128M",
    releaseDate: "2017-01-27",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.                Written by\nEirini",
    actors: ["Ryan Gosling", "Emma Stone", "Rosemarie DeWitt"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Wall-E",
    year: "2008",
    genres: ["Animation", "Adventure", "Family"],
    ratings: [
      10, 5, 2, 9, 3, 6, 2, 10, 9, 9, 10, 1, 10, 5, 6, 7, 9, 5, 1, 6, 9, 9, 9,
      4, 8, 6, 4, 7, 7, 7,
    ],
    poster:
      "MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "Btl",
    duration: "PT98M",
    releaseDate: "2008-09-05",
    averageRating: 0,
    originalTitle: "WALL\u00b7E",
    storyline:
      "In a distant, but not so unrealistic, future where mankind has abandoned earth because it has become covered with trash from products sold by the powerful multi-national Buy N Large corporation, WALL-E, a garbage collecting robot has been left to clean up the mess. Mesmerized with trinkets of Earth's history and show tunes, WALL-E is alone on Earth except for a sprightly pet cockroach. One day, EVE, a sleek (and dangerous) reconnaissance robot, is sent to Earth to find proof that life is once again sustainable. WALL-E falls in love with EVE. WALL-E rescues EVE from a dust storm and shows her a living plant he found amongst the rubble. Consistent with her \"directive\", EVE takes the plant and automatically enters a deactivated state except for a blinking green beacon. WALL-E, doesn't understand what has happened to his new friend, but, true to his love, he protects her from wind, rain, and lightning, even as she is unresponsive. One day a massive ship comes to reclaim EVE, but WALL-E, ...",
    actors: ["Ben Burtt", "Elissa Knight", "Jeff Garlin"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "American Beauty",
    year: "1999",
    genres: ["Drama", "Romance"],
    ratings: [
      5, 6, 10, 10, 1, 3, 6, 4, 4, 1, 3, 4, 7, 5, 7, 1, 9, 1, 2, 1, 8, 2, 9, 1,
      4, 9, 2, 10, 4, 9,
    ],
    poster:
      "MV5BMjM4NTI5NzYyNV5BMl5BanBnXkFtZTgwNTkxNTYxMTE@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "PT122M",
    releaseDate: "2000-02-25",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Lester and Carolyn Burnham are, on the outside, a perfect husband and wife in a perfect house in a perfect neighborhood. But inside, Lester is slipping deeper and deeper into a hopeless depression. He finally snaps when he becomes infatuated with one of his daughter's friends. Meanwhile, his daughter Jane is developing a happy friendship with a shy boy-next-door named Ricky, who lives with an abusive father.                Written by\nJessie Skinner <eietherbinge@hotmail.com>",
    actors: ["Kevin Spacey", "Annette Bening", "Thora Birch"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM4NTI5NzYyNV5BMl5BanBnXkFtZTgwNTkxNTYxMTE@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "The Dark Knight Rises",
    year: "2012",
    genres: ["Action", "Thriller"],
    ratings: [
      2, 5, 5, 8, 5, 2, 5, 1, 7, 6, 9, 1, 8, 1, 3, 6, 5, 7, 3, 9, 5, 8, 6, 1, 4,
      8, 5, 9, 5, 1,
    ],
    poster:
      "MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SY360_SX243_AL_.jpg",
    contentRating: "15",
    duration: "PT164M",
    releaseDate: "2012-07-25",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Despite his tarnished reputation after the events of The Dark Knight, in which he took the rap for Dent's crimes, Batman feels compelled to intervene to assist the city and its police force which is struggling to cope with Bane's plans to destroy the city.                Written by\nWellardRockard",
    actors: ["Christian Bale", "Tom Hardy", "Anne Hathaway"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SY360_SX243_AL_.jpg",
  },
  {
    title: "Prinsessan Mononoke",
    year: "1997",
    genres: ["Animation", "Adventure", "Fantasy"],
    ratings: [
      2, 2, 10, 3, 8, 9, 10, 10, 3, 6, 3, 5, 1, 3, 1, 3, 8, 6, 8, 10, 10, 4, 1,
      5, 5, 5, 8, 10, 9, 6,
    ],
    poster:
      "MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,353,500_AL_.jpg",
    contentRating: "11",
    duration: "PT134M",
    releaseDate: "2011-10-28",
    averageRating: 0,
    originalTitle: "Mononoke-hime",
    storyline:
      "While protecting his village from rampaging boar-god/demon, a confident young warrior, Ashitaka, is stricken by a deadly curse. To save his life, he must journey to the forests of the west. Once there, he's embroiled in a fierce campaign that humans were waging on the forest. The ambitious Lady Eboshi and her loyal clan use their guns against the gods of the forest and a brave young woman, Princess Mononoke, who was raised by a wolf-god. Ashitaka sees the good in both sides and tries to stem the flood of blood. This is met be animosity by both sides as they each see him as supporting the enemy.                Written by\nChristopher Taguchi",
    actors: ["Y\u00f4ji Matsuda", "Yuriko Ishida", "Y\u00fbko Tanaka"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,353,500_AL_.jpg",
  },
  {
    title: "Aliens - \u00c5terkomsten",
    year: "1986",
    genres: ["Action", "Adventure", "Sci-Fi"],
    ratings: [
      10, 4, 10, 7, 7, 8, 2, 3, 5, 1, 1, 2, 2, 3, 10, 7, 4, 10, 1, 5, 7, 7, 5,
      10, 9, 7, 8, 5, 5, 10,
    ],
    poster:
      "MV5BNGYxMTA0M2EtYjg0Yy00NzI5LTg4NjEtZDA2MTcyOWM0YTVjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY377_CR0,0,247,377_AL_.jpg",
    contentRating: "15",
    duration: "PT137M",
    releaseDate: "1986-10-03",
    averageRating: 0,
    originalTitle: "Aliens",
    storyline:
      'Fifty seven years after Ellen Ripley survived her disastrous ordeal, her escape vessel is recovered after drifting across the galaxy as she slept in cryogenic stasis. Back on Earth, nobody believed her story about the "Aliens" on the moon LV-426. After the "Company" orders the colony on LV-426 to investigate, however, all communication with the colony is lost. The Company enlists Ripley to aid a team of tough, rugged space marines on a rescue mission to the now partially terraformed moon to find out if there are aliens or survivors. As the mission unfolds, Ripley will be forced to come to grips with her worst nightmare, but even as she does, she finds that the worst is yet to come.                Written by\nBrian Rawlings',
    actors: ["Sigourney Weaver", "Michael Biehn", "Carrie Henn"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNGYxMTA0M2EtYjg0Yy00NzI5LTg4NjEtZDA2MTcyOWM0YTVjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY377_CR0,0,247,377_AL_.jpg",
  },
  {
    title: "Old Boy - H\u00e4mnden",
    year: "2003",
    genres: ["Drama", "Mystery", "Thriller"],
    ratings: [
      2, 1, 9, 4, 7, 5, 4, 4, 5, 5, 6, 10, 9, 6, 6, 5, 4, 7, 1, 3, 2, 7, 2, 1,
      8, 2, 5, 1, 3, 7,
    ],
    poster:
      "MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SY333_SX225_AL_.jpg",
    contentRating: "15",
    duration: "PT120M",
    releaseDate: "2005-01-21",
    averageRating: 0,
    originalTitle: "Oldeuboi",
    storyline:
      "An average man is kidnapped and imprisoned in a shabby cell for 15 years without explanation. He then is released, equipped with money, a cellphone and expensive clothes. As he strives to explain his imprisonment and get his revenge, Oh Dae-Su soon finds out that his kidnapper has a greater plan for him and is set onto a path of pain and suffering in an attempt to uncover the motive of his mysterious tormentor.                Written by\nJacksrevenge",
    actors: ["Min-sik Choi", "Ji-tae Yu", "Hye-jeong Kang"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SY333_SX225_AL_.jpg",
  },
  {
    title: "Once Upon a Time in America",
    year: "1984",
    genres: ["Crime", "Drama"],
    ratings: [
      5, 7, 1, 9, 7, 3, 3, 1, 3, 10, 5, 6, 10, 8, 3, 3, 1, 6, 4, 7, 6, 9, 3, 9,
      8, 4, 6, 1, 10, 4,
    ],
    poster:
      "MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,319,500_AL_.jpg",
    contentRating: "15",
    duration: "PT229M",
    releaseDate: "1984-08-17",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Epic tale of a group of Jewish gangsters in New York, from childhood, through their glory years during prohibition, and their meeting again 35 years later.                Written by\nAndrew Welsh <andreww@bnr.ca>",
    actors: ["Robert De Niro", "James Woods", "Elizabeth McGovern"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,319,500_AL_.jpg",
  },
  {
    title: "En sensation",
    year: "1941",
    genres: ["Drama", "Mystery"],
    ratings: [
      10, 3, 8, 2, 8, 7, 10, 2, 8, 3, 1, 10, 8, 8, 1, 6, 3, 4, 2, 7, 7, 4, 6, 8,
      6, 8, 6, 6, 2, 10,
    ],
    poster:
      "MV5BMTQ2Mjc1MDQwMl5BMl5BanBnXkFtZTcwNzUyOTUyMg@@._V1_SY250_SX169_AL_.jpg",
    contentRating: "15",
    duration: "PT119M",
    releaseDate: "1942-01-26",
    averageRating: 0,
    originalTitle: "Citizen Kane",
    storyline:
      "A group of reporters are trying to decipher the last word ever spoken by Charles Foster Kane, the millionaire newspaper tycoon: \"Rosebud.\" The film begins with a news reel detailing Kane's life for the masses, and then from there, we are shown flashbacks from Kane's life. As the reporters investigate further, the viewers see a display of a fascinating man's rise to fame, and how he eventually fell off the top of the world.                Written by\nZack H.",
    actors: ["Orson Welles", "Joseph Cotten", "Dorothy Comingore"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2Mjc1MDQwMl5BMl5BanBnXkFtZTcwNzUyOTUyMg@@._V1_SY250_SX169_AL_.jpg",
  },
  {
    title: "Ub\u00e5ten",
    year: "1981",
    genres: ["Adventure", "Drama", "Thriller"],
    ratings: [
      5, 10, 2, 5, 7, 9, 3, 9, 7, 5, 6, 2, 8, 10, 9, 1, 2, 1, 4, 7, 3, 4, 10, 2,
      1, 3, 2, 6, 2, 5,
    ],
    poster:
      "MV5BNGRmOWY0MGUtNTVhMy00NzRlLTljNDAtNTBiNTRlODgxNmY2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY406_SX290_AL_.jpg",
    contentRating: "15",
    duration: "PT149M",
    releaseDate: "1982-02-26",
    averageRating: 0,
    originalTitle: "Das Boot",
    storyline:
      'It is 1942 and the German submarine fleet is heavily engaged in the so-called "Battle of the Atlantic" to harass and destroy British shipping. With better escorts of the Destroyer Class, however, German U-Boats have begun to take heavy losses. "Das Boot" is the story of one such U-Boat crew, with the film examining how these submariners maintained their professionalism as soldiers and attempted to accomplish impossible missions, all the while attempting to understand and obey the ideology of the government under which they served.                Written by\nAnthony Hughes <husnock31@hotmail.com>',
    actors: [
      "J\u00fcrgen Prochnow",
      "Herbert Gr\u00f6nemeyer",
      "Klaus Wennemann",
    ],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNGRmOWY0MGUtNTVhMy00NzRlLTljNDAtNTBiNTRlODgxNmY2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY406_SX290_AL_.jpg",
  },
  {
    title: "\u00c5klagarens vittne",
    year: "1957",
    genres: ["Crime", "Drama", "Mystery"],
    ratings: [
      8, 10, 9, 7, 9, 1, 8, 1, 8, 3, 7, 6, 8, 7, 4, 1, 8, 7, 1, 9, 10, 9, 7, 4,
      5, 8, 9, 8, 3, 7,
    ],
    poster:
      "MV5BMTc0MjgyNTUyNF5BMl5BanBnXkFtZTcwNDQzMDg0Nw@@._V1_SY500_CR0,0,333,500_AL_.jpg",
    contentRating: "15",
    duration: "PT116M",
    releaseDate: "1958-03-17",
    averageRating: 0,
    originalTitle: "Witness for the Prosecution",
    storyline:
      "It's Britain, 1953. Upon his return to work following a heart attack, irrepressible barrister Sir Wilfrid Robarts, known as a barrister for the hopeless, takes on a murder case, much to the exasperation of his medical team, led by his overly regulated private nurse, Miss Plimsoll, who tries her hardest to ensure that he not return to his hard living ways - including excessive cigar smoking and drinking - while he takes his medication and gets his much needed rest. That case is defending American war veteran Leonard Vole, a poor, out of work, struggling inventor who is accused of murdering his fifty-six year old lonely and wealthy widowed acquaintance, Emily French. The initial evidence is circumstantial but points to Leonard as the murderer. Despite being happily married to East German former beer hall performer Christine Vole, he fostered that friendship with Mrs. French in the hopes that she would finance one of his many inventions to the tune of a few hundred pounds. It thus does ...                Written by\nHuggo",
    actors: ["Tyrone Power", "Marlene Dietrich", "Charles Laughton"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjgyNTUyNF5BMl5BanBnXkFtZTcwNDQzMDg0Nw@@._V1_SY500_CR0,0,333,500_AL_.jpg",
  },
  {
    title: "I sista minuten",
    year: "1959",
    genres: ["Action", "Adventure", "Mystery"],
    ratings: [
      6, 1, 3, 5, 6, 5, 3, 7, 5, 5, 5, 6, 10, 10, 6, 1, 7, 5, 4, 10, 7, 5, 6, 7,
      9, 9, 7, 6, 9, 3,
    ],
    poster:
      "MV5BMjQwMTQ0MzgwNl5BMl5BanBnXkFtZTgwNjc4ODE4MzE@._V1_SY500_CR0,0,319,500_AL_.jpg",
    contentRating: "15",
    duration: "PT136M",
    releaseDate: "1959-10-19",
    averageRating: 0,
    originalTitle: "North by Northwest",
    storyline:
      "Madison Avenue advertising man Roger Thornhill finds himself thrust into the world of spies when he is mistaken for a man by the name of George Kaplan. Foreign spy Philip Vandamm and his henchman Leonard try to eliminate him but when Thornhill tries to make sense of the case, he is framed for murder. Now on the run from the police, he manages to board the 20th Century Limited bound for Chicago where he meets a beautiful blond, Eve Kendall, who helps him to evade the authorities. His world is turned upside down yet again when he learns that Eve isn't the innocent bystander he thought she was. Not all is as it seems however, leading to a dramatic rescue and escape at the top of Mt. Rushmore.                Written by\ngarykmcd",
    actors: ["Cary Grant", "Eva Marie Saint", "James Mason"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwMTQ0MzgwNl5BMl5BanBnXkFtZTgwNjc4ODE4MzE@._V1_SY500_CR0,0,319,500_AL_.jpg",
  },
  {
    title: "Studie i brott",
    year: "1958",
    genres: ["Mystery", "Romance", "Thriller"],
    ratings: [
      3, 8, 2, 9, 8, 8, 1, 6, 10, 5, 1, 7, 6, 6, 2, 8, 3, 3, 4, 1, 6, 8, 1, 6,
      9, 5, 7, 4, 9, 2,
    ],
    poster:
      "MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,322,500_AL_.jpg",
    contentRating: "15",
    duration: "PT128M",
    releaseDate: "1958-12-26",
    averageRating: 0,
    originalTitle: "Vertigo",
    storyline:
      'John "Scottie" Ferguson is a retired San Francisco police detective who suffers from acrophobia and Madeleine is the lady who leads him to high places. A wealthy shipbuilder who is an acquaintance from college days approaches Scottie and asks him to follow his beautiful wife, Madeleine. He fears she is going insane, maybe even contemplating suicide, he believes she is possessed by a dead ancestor. Scottie is skeptical, but agrees after he sees the beautiful Madeleine.                Written by\nfilmfactsman',
    actors: ["James Stewart", "Kim Novak", "Barbara Bel Geddes"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,322,500_AL_.jpg",
  },
  {
    title: "Jedins \u00e5terkomst",
    year: "1983",
    genres: ["Action", "Adventure", "Fantasy"],
    ratings: [
      3, 3, 1, 1, 5, 2, 8, 4, 8, 8, 5, 3, 4, 5, 4, 4, 4, 3, 1, 6, 8, 1, 3, 5, 8,
      8, 5, 5, 6, 2,
    ],
    poster:
      "MV5BODllZjg2YjUtNWEzNy00ZGY2LTgyZmQtYTkxNDYyOWM3OTUyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,318,500_AL_.jpg",
    contentRating: "11",
    duration: "PT131M",
    releaseDate: "1983-09-30",
    averageRating: 0,
    originalTitle: "Star Wars: Episode VI - Return of the Jedi",
    storyline:
      "Luke Skywalker battles horrible Jabba the Hut and cruel Darth Vader to save his comrades in the Rebel Alliance and triumph over the Galactic Empire. Han Solo and Princess Leia reaffirm their love and team with Chewbacca, Lando Calrissian, the Ewoks and the androids C-3PO and R2-D2 to aid in the disruption of the Dark Side and the defeat of the evil emperor.                Written by\nJwelch5742",
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODllZjg2YjUtNWEzNy00ZGY2LTgyZmQtYTkxNDYyOWM3OTUyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,318,500_AL_.jpg",
  },
  {
    title: "De h\u00e4nsynsl\u00f6sa",
    year: "1992",
    genres: ["Crime", "Drama", "Thriller"],
    ratings: [
      10, 7, 3, 2, 10, 3, 7, 6, 9, 3, 9, 7, 4, 3, 10, 5, 3, 6, 4, 7, 8, 9, 8, 8,
      9, 3, 1, 9, 5, 8,
    ],
    poster:
      "MV5BNDc0YWFhMmQtOTFhZC00MzViLTlkNjctMWUzYTI2YWFkNzVlXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SY500_CR0,0,333,500_AL_.jpg",
    contentRating: "15",
    duration: "PT99M",
    releaseDate: "1993-02-26",
    averageRating: 0,
    originalTitle: "Reservoir Dogs",
    storyline:
      "Six criminals, who are strangers to each other, are hired by a crime boss, Joe Cabot, to carry out a diamond robbery. Right at the outset, they are given false names with the intention that they won't get too close and will concentrate on the job instead. They are completely sure that the robbery is going to be a success. But, when the police show up right at the time and the site of the robbery, panic spreads amongst the group members, and two of them are killed in the subsequent shootout, along with a few policemen and civilians. When the remaining people assemble at the premeditated rendezvous point (a warehouse), they begin to suspect that one of them is an undercover cop.                Written by\nSoumitra",
    actors: ["Harvey Keitel", "Tim Roth", "Michael Madsen"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc0YWFhMmQtOTFhZC00MzViLTlkNjctMWUzYTI2YWFkNzVlXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SY500_CR0,0,333,500_AL_.jpg",
  },
  {
    title: "M",
    year: "1931",
    genres: ["Crime", "Drama", "Mystery"],
    ratings: [
      8, 7, 5, 3, 1, 5, 2, 5, 3, 6, 6, 10, 8, 9, 5, 5, 6, 5, 9, 5, 1, 7, 10, 7,
      2, 1, 3, 4, 6, 9,
    ],
    poster:
      "MV5BMTQyNjA5NzU5MV5BMl5BanBnXkFtZTgwMDk1MTA5MTE@._V1_SY250_SX175_AL_.jpg",
    contentRating: "15",
    duration: "PT117M",
    releaseDate: "1931-08-31",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "In Germany, Hans Beckert is an unknown killer of girls. He whistles Edvard Grieg's 'In The Hall of the Mountain King', from the 'Peer Gynt' Suite I Op. 46 while attracting the little girls for death. The police force pressed by the Minister give its best effort trying unsuccessfully to arrest the serial killer. The organized crime has great losses due to the intense search and siege of the police and decides to chase the murderer, with the support of the beggars association. They catch Hans and briefly judge him.                Written by\nClaudio Carvalho, Rio de Janeiro, Brazil",
    actors: ["Peter Lorre", "Ellen Widmann", "Inge Landgut"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyNjA5NzU5MV5BMl5BanBnXkFtZTgwMDk1MTA5MTE@._V1_SY250_SX175_AL_.jpg",
  },
  {
    title: "Braveheart",
    year: "1995",
    genres: ["Biography", "Drama", "History"],
    ratings: [
      5, 8, 1, 3, 7, 10, 6, 8, 9, 10, 4, 8, 2, 8, 2, 9, 1, 8, 2, 5, 1, 9, 4, 3,
      8, 5, 9, 2, 1, 9,
    ],
    poster:
      "MV5BNTMyNGE1ODQtYTNiNS00ZTUyLThhZjktMTgyOGZkZThlYTc3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,338,500_AL_.jpg",
    contentRating: "15",
    duration: "PT178M",
    releaseDate: "1995-09-01",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "William Wallace is a Scottish rebel who leads an uprising against the cruel English ruler Edward the Longshanks, who wishes to inherit the crown of Scotland for himself. When he was a young boy, William Wallace's father and brother, along with many others, lost their lives trying to free Scotland. Once he loses another of his loved ones, William Wallace begins his long quest to make Scotland free once and for all, along with the assistance of Robert the Bruce.                Written by\nAnonymous",
    actors: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyNGE1ODQtYTNiNS00ZTUyLThhZjktMTgyOGZkZThlYTc3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,338,500_AL_.jpg",
  },
  {
    title: "Requiem for a Dream",
    year: "2000",
    genres: ["Drama"],
    ratings: [
      7, 4, 5, 7, 5, 10, 9, 8, 6, 10, 9, 2, 4, 6, 3, 5, 5, 1, 3, 3, 7, 10, 5, 2,
      3, 2, 4, 8, 5, 7,
    ],
    poster:
      "MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,333,500_AL_.jpg",
    contentRating: "15",
    duration: "PT102M",
    releaseDate: "2001-09-14",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Sara Goldfarb (Ellen Burstyn) is a retired widow, living in a small apartment. She spends most of her time watching TV, especially a particular self-help show. She has delusions of rising above her current dull existence by being a guest on that show. Her son, Harry (Jared Leto) is a junkie but along with his friend Tyrone (Marlon Wayans) has visions of making it big by becoming a drug dealer. Harry's girlfriend Marion (Jennifer Connelly) could be fashion designer or artist but is swept along in Harry's drug-centric world. Meanwhile Sara has developed an addiction of her own. She desperately wants to lose weight and so goes on a crash course involving popping pills, pills which turn out to be very addictive and harmful to her mental state.                Written by\ngrantss",
    actors: ["Ellen Burstyn", "Jared Leto", "Jennifer Connelly"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,333,500_AL_.jpg",
  },
  {
    title: "Amelie fr\u00e5n Montmartre",
    year: "2001",
    genres: ["Comedy", "Romance"],
    ratings: [
      6, 9, 7, 10, 8, 7, 5, 6, 9, 3, 9, 8, 3, 9, 4, 2, 9, 3, 2, 4, 4, 5, 6, 2,
      4, 8, 3, 3, 10, 7,
    ],
    poster:
      "MV5BMTA3MjVkMWMtYTQ4ZC00ODczLWFjYmQtMDFkZDQ2Y2M0NDVmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,336,500_AL_.jpg",
    contentRating: "7",
    duration: "PT122M",
    releaseDate: "2001-10-12",
    averageRating: 0,
    originalTitle: "Le fabuleux destin d'Am\u00e9lie Poulain",
    storyline:
      'Am\u00e9lie is a story about a girl named Am\u00e9lie whose childhood was suppressed by her Father\'s mistaken concerns of a heart defect. With these concerns Am\u00e9lie gets hardly any real life contact with other people. This leads Am\u00e9lie to resort to her own fantastical world and dreams of love and beauty. She later on becomes a young woman and moves to the central part of Paris as a waitress. After finding a lost treasure belonging to the former occupant of her apartment, she decides to return it to him. After seeing his reaction and his new found perspective - she decides to devote her life to the people around her. Such as, her father who is obsessed with his garden-gnome, a failed writer, a hypochondriac, a man who stalks his ex girlfriends, the "ghost", a suppressed young soul, the love of her life and a man whose bones are as brittle as glass. But after consuming herself with these escapades - she finds out that she is disregarding her own life and damaging her quest for love. Am\u00e9lie then ...                Written by\nspragg_s',
    actors: ["Audrey Tautou", "Mathieu Kassovitz", "Rufus"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MjVkMWMtYTQ4ZC00ODczLWFjYmQtMDFkZDQ2Y2M0NDVmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,336,500_AL_.jpg",
  },
  {
    title: "Clockwork Orange",
    year: "1971",
    genres: ["Crime", "Drama", "Sci-Fi"],
    ratings: [
      4, 7, 2, 6, 4, 3, 8, 3, 8, 5, 2, 10, 10, 6, 6, 10, 6, 2, 7, 1, 5, 7, 4,
      10, 9, 8, 8, 4, 5, 10,
    ],
    poster:
      "MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "PT136M",
    releaseDate: "1972-04-26",
    averageRating: 0,
    originalTitle: "A Clockwork Orange",
    storyline:
      "Protagonist Alex DeLarge is an \"ultraviolent\" youth in futuristic Britain. As with all luck, his eventually runs out and he's arrested and convicted of murder and rape. While in prison, Alex learns of an experimental program in which convicts are programmed to detest violence. If he goes through the program, his sentence will be reduced and he will be back on the streets sooner than expected. But Alex's ordeals are far from over once he hits the mean streets of Britain that he had a hand in creating.                Written by\nNikki Carlyle",
    actors: ["Malcolm McDowell", "Patrick Magee", "Michael Bates"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Taxi Driver",
    year: "1976",
    genres: ["Crime", "Drama"],
    ratings: [
      4, 3, 5, 6, 5, 10, 8, 8, 5, 9, 10, 4, 1, 1, 7, 5, 3, 3, 8, 7, 8, 1, 10, 8,
      7, 4, 9, 7, 2, 1,
    ],
    poster:
      "MV5BNGQxNDgzZWQtZTNjNi00M2RkLWExZmEtNmE1NjEyZDEwMzA5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,327,500_AL_.jpg",
    contentRating: "15",
    duration: "PT113M",
    releaseDate: "1977-03-12",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Travis Bickle is an ex-Marine and Vietnam War veteran living in New York City. As he suffers from insomnia, he spends his time working as a taxi driver at night, watching porn movies at seedy cinemas during the day, or thinking about how the world, New York in particular, has deteriorated into a cesspool. He's a loner who has strong opinions about what is right and wrong with mankind. For him, the one bright spot in New York humanity is Betsy, a worker on the presidential nomination campaign of Senator Charles Palantine. He becomes obsessed with her. After an incident with her, he believes he has to do whatever he needs to make the world a better place in his opinion. One of his priorities is to be the savior for Iris, a twelve-year-old runaway and prostitute who he believes wants out of the profession and under the thumb of her pimp and lover Matthew.                Written by\nHuggo",
    actors: ["Robert De Niro", "Jodie Foster", "Cybill Shepherd"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNGQxNDgzZWQtZTNjNi00M2RkLWExZmEtNmE1NjEyZDEwMzA5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,327,500_AL_.jpg",
  },
  {
    title: "Taare Zameen Par",
    year: "2007",
    genres: ["Drama", "Family", "Music"],
    ratings: [
      8, 1, 10, 4, 8, 6, 6, 10, 3, 7, 5, 7, 2, 10, 10, 2, 4, 10, 8, 2, 1, 1, 8,
      10, 2, 6, 1, 5, 7, 2,
    ],
    poster:
      "MV5BNTVmYTk2NjAtYzY3MS00YjFjLTlkYzktYzg3YzMyZDQyOWRiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,346,500_AL_.jpg",
    contentRating: "PG",
    duration: "PT165M",
    releaseDate: "2008-12-26",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Ishaan Awasthi is an eight-year-old whose world is filled with wonders that no one else seems to appreciate; colours, fish, dogs and kites are just not important in the world of adults, who are much more interested in things like homework, marks and neatness. And Ishaan just cannot seem to get anything right in class. When he gets into far more trouble than his parents can handle, he is packed off to a boarding school to 'be disciplined'. Things are no different at his new school, and Ishaan has to contend with the added trauma of separation from his family. One day a new art teacher bursts onto the scene, Ram Shankar Nikumbh, who infects the students with joy and optimism. He breaks all the rules of 'how things are done' by asking them to think, dream and imagine, and all the children respond with enthusiasm, all except Ishaan. Nikumbh soon realizes that Ishaan is very unhappy, and he sets out to discover why. With time, patience and care, he ultimately helps Ishaan find himself.                Written by\nAnonymous",
    actors: ["Darsheel Safary", "Aamir Khan", "Tanay Chheda"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTVmYTk2NjAtYzY3MS00YjFjLTlkYzktYzg3YzMyZDQyOWRiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,346,500_AL_.jpg",
  },
  {
    title: "Lawrence av Arabien",
    year: "1962",
    genres: ["Adventure", "Biography", "Drama"],
    ratings: [
      3, 4, 2, 5, 5, 8, 6, 9, 6, 1, 5, 5, 1, 5, 8, 8, 1, 4, 7, 9, 5, 10, 6, 6,
      10, 4, 3, 8, 5, 6,
    ],
    poster:
      "MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SY500_CR0,0,346,500_AL_.jpg",
    contentRating: "15",
    duration: "PT216M",
    releaseDate: "1963-03-22",
    averageRating: 0,
    originalTitle: "Lawrence of Arabia",
    storyline:
      "Due to his knowledge of the native Bedouin tribes, British Lieutenant T.E. Lawrence is sent to Arabia to find Prince Faisal and serve as a liaison between the Arabs and the British in their fight against the Turks. With the aid of native Sherif Ali, Lawrence rebels against the orders of his superior officer and strikes out on a daring camel journey across the harsh desert to attack a well-guarded Turkish port.                Written by\nJwelch5742",
    actors: ["Peter O'Toole", "Alec Guinness", "Anthony Quinn"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SY500_CR0,0,346,500_AL_.jpg",
  },
  {
    title: "Kvinna utan samvete",
    year: "1944",
    genres: ["Crime", "Drama", "Film-Noir"],
    ratings: [
      1, 8, 9, 1, 7, 3, 4, 10, 9, 9, 7, 6, 2, 8, 1, 7, 10, 10, 4, 4, 7, 1, 10,
      7, 2, 9, 7, 9, 8, 7,
    ],
    poster:
      "MV5BZmRmYmZkZTktZDc5ZC00ZjZmLTg4NWMtYjM3MjcyNTVjNGQ5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,332,500_AL_.jpg",
    contentRating: "15",
    duration: "PT107M",
    releaseDate: "1944-11-27",
    averageRating: 0,
    originalTitle: "Double Indemnity",
    storyline:
      "In 1938, Walter Neff, an experienced salesman of the Pacific All Risk Insurance Co., meets the seductive wife of one of his clients, Phyllis Dietrichson, and they have an affair. Phyllis proposes to kill her husband to receive the proceeds of an accident insurance policy and Walter devises a scheme to receive twice the amount based on a double indemnity clause. When Mr. Dietrichson is found dead on a train track, the police accept the determination of accidental death. However, the insurance analyst and Walter's best friend Barton Keyes does not buy the story and suspects that Phyllis has murdered her husband with the help of another man.                Written by\nClaudio Carvalho, Rio de Janeiro, Brazil",
    actors: ["Fred MacMurray", "Barbara Stanwyck", "Edward G. Robinson"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZmRmYmZkZTktZDc5ZC00ZjZmLTg4NWMtYjM3MjcyNTVjNGQ5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,332,500_AL_.jpg",
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: "2004",
    genres: ["Drama", "Romance", "Sci-Fi"],
    ratings: [
      2, 2, 2, 4, 1, 1, 3, 7, 1, 2, 5, 1, 5, 3, 3, 1, 3, 8, 2, 10, 10, 9, 4, 3,
      5, 9, 1, 2, 10, 3,
    ],
    poster:
      "MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "11",
    duration: "PT108M",
    releaseDate: "2004-08-20",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A man, Joel Barish, heartbroken that his girlfriend Clementine underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realizes that he still loves her, and may be too late to correct his mistake.                Written by\nanonymous",
    actors: ["Jim Carrey", "Kate Winslet", "Tom Wilkinson"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Skuggor \u00f6ver s\u00f6dern",
    year: "1962",
    genres: ["Crime", "Drama"],
    ratings: [
      7, 10, 10, 3, 9, 10, 5, 1, 3, 2, 10, 3, 2, 10, 1, 3, 8, 3, 5, 2, 7, 7, 10,
      9, 9, 3, 6, 1, 3, 2,
    ],
    poster:
      "MV5BMjA4MzI1NDY2Nl5BMl5BanBnXkFtZTcwMTcyODc5Mw@@._V1_SY250_SX164_AL_.jpg",
    contentRating: "15",
    duration: "PT129M",
    releaseDate: "1964-03-02",
    averageRating: 0,
    originalTitle: "To Kill a Mockingbird",
    storyline:
      "Small-town Alabama, 1932. Atticus Finch (played by Gregory Peck) is a lawyer and a widower. He has two young children, Jem and Scout. Atticus Finch is currently defending Tom Robinson, a black man accused of raping a white woman. Meanwhile, Jem and Scout are intrigued by their neighbours, the Radleys, and the mysterious, seldom-seen Boo Radley in particular.                Written by\ngrantss",
    actors: ["Gregory Peck", "John Megna", "Frank Overton"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4MzI1NDY2Nl5BMl5BanBnXkFtZTcwMTcyODc5Mw@@._V1_SY250_SX164_AL_.jpg",
  },
  {
    title: "Amadeus",
    year: "1984",
    genres: ["Biography", "Drama", "History"],
    ratings: [
      1, 2, 7, 7, 3, 6, 1, 1, 9, 10, 1, 4, 8, 8, 9, 8, 1, 6, 8, 5, 5, 5, 10, 5,
      5, 8, 8, 3, 3, 4,
    ],
    poster:
      "MV5BMTg5NDkwMTk5N15BMl5BanBnXkFtZTYwODg3MDk2._V1_SY352_CR0,0,237,352_AL_.jpg",
    contentRating: "11",
    duration: "PT160M",
    releaseDate: "1984-10-12",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Antonio Salieri believes that Wolfgang Amadeus Mozart's music is divine and miraculous. He wishes he was himself as good a musician as Mozart so that he can praise the Lord through composing. He began his career as a devout man who believes his success and talent as a composer are God's rewards for his piety. He's also content as the respected, financially well-off, court composer of Austrian Emperor Joseph II. But he's shocked to learn that Mozart is such a vulgar creature, and can't understand why God favored Mozart to be his instrument. Salieri's envy has made him an enemy of God whose greatness was evident in Mozart. He is ready to take revenge against God and Mozart for his own musical mediocrity.                Written by\nKhaled Salem",
    actors: ["F. Murray Abraham", "Tom Hulce", "Elizabeth Berridge"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5NDkwMTk5N15BMl5BanBnXkFtZTYwODg3MDk2._V1_SY352_CR0,0,237,352_AL_.jpg",
  },
  {
    title: "Toy Story 3",
    year: "2010",
    genres: ["Animation", "Adventure", "Comedy"],
    ratings: [
      10, 5, 5, 1, 10, 10, 8, 3, 4, 6, 7, 4, 5, 7, 10, 2, 9, 2, 4, 7, 1, 1, 3,
      9, 3, 3, 2, 5, 1, 5,
    ],
    poster:
      "MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SY500_CR0,0,353,500_AL_.jpg",
    contentRating: "7",
    duration: "PT103M",
    releaseDate: "2010-08-27",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Woody, Buzz and the whole gang are back. As their owner Andy prepares to depart for college, his loyal toys find themselves in daycare where untamed tots with their sticky little fingers do not play nice. So, it's all for one and one for all as they join Barbie's counterpart Ken, a thespian hedgehog named Mr. Pricklepants and a pink, strawberry-scented teddy bear called Lots-o'-Huggin' Bear to plan their great escape.                Written by\nWalt Disney Studios",
    actors: ["Tom Hanks", "Tim Allen", "Joan Cusack"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SY500_CR0,0,353,500_AL_.jpg",
  },
  {
    title: "Full Metal Jacket",
    year: "1987",
    genres: ["Drama", "War"],
    ratings: [
      9, 9, 7, 1, 4, 9, 3, 6, 3, 3, 7, 8, 5, 10, 7, 3, 2, 5, 6, 2, 8, 7, 7, 5,
      10, 7, 10, 3, 3, 2,
    ],
    poster:
      "MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,328,500_AL_.jpg",
    contentRating: "15",
    duration: "PT116M",
    releaseDate: "1987-10-02",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A two-segment look at the effect of the military mindset and war itself on Vietnam era Marines. The first half follows a group of recruits in boot camp under the command of the punishing Gunnery Sergeant Hartman. The second half shows one of those recruits, Joker, covering the war as a correspondent for Stars and Stripes, focusing on the Tet offensive.                Written by\nScott Renshaw <as.idc@forsythe.stanford.edu>",
    actors: ["Matthew Modine", "R. Lee Ermey", "Vincent D'Onofrio"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,328,500_AL_.jpg",
  },
  {
    title: "Dangal",
    year: "2016",
    genres: ["Action", "Biography", "Drama"],
    ratings: [
      3, 9, 6, 8, 2, 4, 5, 1, 9, 6, 1, 3, 2, 1, 10, 4, 4, 2, 5, 9, 6, 5, 10, 8,
      8, 1, 7, 10, 9, 1,
    ],
    poster:
      "MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg",
    contentRating: "",
    duration: "PT161M",
    releaseDate: "2016-12-23",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Biopic of Mahavir Singh Phogat, who taught wrestling to his daughters Babita Kumari and Geeta Phogat. Geeta Phogat was India's first female wrestler to win at the 2010 Commonwealth Games, where she won the gold medal (55 kg) while her sister Babita Kumari won the silver (52 kg).                Written by\nDibyayan_Chakravorty",
    actors: ["Aamir Khan", "Sakshi Tanwar", "Fatima Sana Shaikh"],
    imdbRating: 8.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg",
  },
  {
    title: "Bl\u00e5sningen",
    year: "1973",
    genres: ["Comedy", "Crime", "Drama"],
    ratings: [
      2, 1, 9, 3, 9, 9, 5, 1, 1, 9, 5, 1, 2, 9, 10, 1, 8, 5, 1, 2, 9, 10, 4, 4,
      5, 4, 5, 6, 1, 5,
    ],
    poster:
      "MV5BMTY5MjM1OTAyOV5BMl5BanBnXkFtZTgwMDkwODg4MDE@._V1._CR52,57,915,1388_SY500_CR0,0,329,500_AL_.jpg",
    contentRating: "15",
    duration: "PT129M",
    releaseDate: "1974-02-25",
    averageRating: 0,
    originalTitle: "The Sting",
    storyline:
      "When a mutual friend is killed by a mob boss, two con men, one experienced and one young try to get even by pulling off the big con on the mob boss. The story unfolds with several twists and last minute alterations.                Written by\nJohn Vogel <jlvogel@comcast.net>",
    actors: ["Paul Newman", "Robert Redford", "Robert Shaw"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MjM1OTAyOV5BMl5BanBnXkFtZTgwMDkwODg4MDE@._V1._CR52,57,915,1388_SY500_CR0,0,329,500_AL_.jpg",
  },
  {
    title: "\u00c5r 2001 - Ett rymd\u00e4ventyr",
    year: "1968",
    genres: ["Adventure", "Sci-Fi"],
    ratings: [
      8, 5, 10, 2, 8, 1, 1, 1, 2, 3, 5, 2, 5, 2, 5, 7, 7, 1, 6, 4, 9, 4, 9, 1,
      3, 4, 4, 5, 9, 9,
    ],
    poster:
      "MV5BMTZkZTBhYmUtMTIzNy00YTViLTg1OWItNGUwMmVlN2FjZTVkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "11",
    duration: "PT149M",
    releaseDate: "1968-08-27",
    averageRating: 0,
    originalTitle: "2001: A Space Odyssey",
    storyline:
      '"2001" is a story of evolution. Sometime in the distant past, someone or something nudged evolution by placing a monolith on Earth (presumably elsewhere throughout the universe as well). Evolution then enabled humankind to reach the moon\'s surface, where yet another monolith is found, one that signals the monolith placers that humankind has evolved that far. Now a race begins between computers (HAL) and human (Bowman) to reach the monolith placers. The winner will achieve the next step in evolution, whatever that may be.                Written by\nLarry Cousins',
    actors: ["Keir Dullea", "Gary Lockwood", "William Sylvester"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTZkZTBhYmUtMTIzNy00YTViLTg1OWItNGUwMmVlN2FjZTVkXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Babam ve Oglum",
    year: "2005",
    genres: ["Drama"],
    ratings: [
      8, 3, 4, 8, 4, 3, 2, 7, 1, 4, 1, 10, 2, 3, 8, 2, 2, 1, 8, 10, 3, 5, 9, 2,
      5, 1, 1, 7, 7, 7,
    ],
    poster:
      "MV5BNjAzMzEwYzctNjc1MC00Nzg5LWFmMGItMTgzYmMyNTY2OTQ4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_SX347_AL_.jpg",
    contentRating: "",
    duration: "PT108M",
    releaseDate: "2005-11-18",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Sadik is one of the rebellious youth who has been politically active as a university student and became a left-wing journalist in the 70's, despite his father's expectations of him becoming an agricultural engineer and taking control of their family farm in an Aegean village. On the dawn of September 12, 1980, when a merciless military coup hits the country, they cannot find access to any hospital or a doctor and his wife dies while giving birth to their only child, Deniz. After a long-lasting period of torture, trials, and jail time, Sadik returns to his village with 7-8 years old Deniz, knowing that it will be hard to correct things with his father, Huseyin.                Written by\nAli Riza Bolukbasi",
    actors: ["Fikret Kuskan", "\u00c7etin Tekindor", "H\u00fcmeyra"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNjAzMzEwYzctNjc1MC00Nzg5LWFmMGItMTgzYmMyNTY2OTQ4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_SX347_AL_.jpg",
  },
  {
    title: "Singin' in the Rain",
    year: "1952",
    genres: ["Comedy", "Musical", "Romance"],
    ratings: [
      7, 10, 2, 1, 6, 2, 3, 5, 9, 4, 10, 8, 10, 8, 4, 6, 1, 5, 4, 8, 5, 10, 8,
      8, 8, 8, 4, 6, 4, 1,
    ],
    poster:
      "MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY396_SX271_AL_.jpg",
    contentRating: "Btl",
    duration: "PT103M",
    releaseDate: "1952-09-29",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "1927 Hollywood. Monumental Pictures' biggest stars, glamorous on-screen couple Lina Lamont and Don Lockwood, are also an off-screen couple if the trade papers and gossip columns are to be believed. Both perpetuate the public perception if only to please their adoring fans and bring people into the movie theaters. In reality, Don barely tolerates her, while Lina, despite thinking Don beneath her, simplemindedly believes what she sees on screen in order to bolster her own stardom and sense of self-importance. R.F. Simpson, Monumental's head, dismisses what he thinks is a flash in the pan: talking pictures. It isn't until Jazzs\u00e5ngaren (1927) becomes a bona fide hit which results in all the movie theaters installing sound equipment that R.F. knows Monumental, most specifically in the form of Don and Lina, have to jump on the talking picture bandwagon, despite no one at the studio knowing anything about the technology. Musician Cosmo Brown, Don's best friend, gets hired as ...                Written by\nHuggo",
    actors: ["Gene Kelly", "Donald O'Connor", "Debbie Reynolds"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY396_SX271_AL_.jpg",
  },
  {
    title: "Toy Story",
    year: "1995",
    genres: ["Animation", "Adventure", "Comedy"],
    ratings: [
      10, 8, 5, 3, 4, 2, 8, 3, 3, 7, 3, 9, 5, 7, 5, 5, 8, 7, 1, 3, 4, 3, 4, 10,
      9, 1, 4, 2, 1, 1,
    ],
    poster:
      "MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SY500_SX335_AL_.jpg",
    contentRating: "7",
    duration: "PT81M",
    releaseDate: "1996-03-08",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A little boy named Andy loves to be in his room, playing with his toys, especially his doll named \"Woody\". But, what do the toys do when Andy is not with them, they come to life. Woody believes that he has life (as a toy) good. However, he must worry about Andy's family moving, and what Woody does not know is about Andy's birthday party. Woody does not realize that Andy's mother gave him an action figure known as Buzz Lightyear, who does not believe that he is a toy, and quickly becomes Andy's new favorite toy. Woody, who is now consumed with jealousy, tries to get rid of Buzz. Then, both Woody and Buzz are now lost. They must find a way to get back to Andy before he moves without them, but they will have to pass through a ruthless toy killer, Sid Phillips.                Written by\nJohn Wiggins",
    actors: ["Tom Hanks", "Tim Allen", "Don Rickles"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SY500_SX335_AL_.jpg",
  },
  {
    title: "Cykeltjuven",
    year: "1948",
    genres: ["Drama"],
    ratings: [
      1, 9, 5, 1, 4, 3, 5, 6, 10, 9, 5, 9, 1, 2, 7, 4, 4, 6, 5, 4, 3, 2, 2, 8,
      6, 3, 7, 7, 4, 9,
    ],
    poster:
      "MV5BOTI3NTcwNzEtNDA1MS00ZjE0LThkNDEtMmU4MjVmNTQ1ZDBmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY450_SX312_AL_.jpg",
    contentRating: "Btl",
    duration: "PT89M",
    releaseDate: "1950-02-27",
    averageRating: 0,
    originalTitle: "Ladri di biciclette",
    storyline:
      "Ricci, an unemployed man in the depressed post-WWII economy of Italy, gets at last a good job - for which he needs a bike - hanging up posters. But soon his bicycle is stolen. He and his son walk the streets of Rome, looking for the bicycle. Ricci finally manages to locate the thief but with no proof, he has to abandon his cause. But he and his son know perfectly well that without a bike, Ricci won't be able to keep his job.                Written by\njolusoma",
    actors: ["Lamberto Maggiorani", "Enzo Staiola", "Lianella Carell"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI3NTcwNzEtNDA1MS00ZjE0LThkNDEtMmU4MjVmNTQ1ZDBmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY450_SX312_AL_.jpg",
  },
  {
    title: "Chaplins pojke",
    year: "1921",
    genres: ["Comedy", "Drama", "Family"],
    ratings: [
      8, 4, 5, 2, 3, 8, 8, 3, 6, 9, 7, 4, 4, 1, 9, 7, 3, 10, 7, 10, 3, 2, 6, 3,
      1, 8, 8, 6, 5, 2,
    ],
    poster:
      "MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,332,500_AL_.jpg",
    contentRating: "",
    duration: "PT68M",
    releaseDate: "1922-03-20",
    averageRating: 0,
    originalTitle: "The Kid",
    storyline:
      'The opening title reads: "A comedy with a smile--and perhaps a tear". As she leaves the charity hospital and passes a church wedding, Edna deposits her new baby with a pleading note in a limousine and goes off to commit suicide. The limo is stolen by thieves who dump the baby by a garbage can. Charlie the Tramp finds the baby and makes a home for him. Five years later Edna has become an opera star but does charity work for slum youngsters in hope of finding her boy. A doctor called by Edna discovers the note with the truth about the Kid and reports it to the authorities who come to take him away from Charlie. Before he arrives at the Orphan Asylum Charlie steals him back and takes him to a flophouse. The proprietor reads of a reward for the Kid and takes him to Edna. Charlie is later awakened by a kind policeman who reunites him with the Kid at Edna\'s mansion.                Written by\nEd Stephan <stephan@cc.wwu.edu>',
    actors: ["Charles Chaplin", "Edna Purviance", "Jackie Coogan"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY500_CR0,0,332,500_AL_.jpg",
  },
  {
    title: "Inglourious Basterds",
    year: "2009",
    genres: ["Adventure", "Drama", "War"],
    ratings: [
      10, 6, 9, 9, 1, 10, 7, 1, 3, 8, 10, 2, 6, 3, 6, 10, 3, 7, 9, 8, 5, 6, 8,
      5, 10, 1, 3, 6, 6, 10,
    ],
    poster:
      "MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "PT153M",
    releaseDate: "2009-08-21",
    averageRating: 0,
    originalTitle: "",
    storyline:
      'In German-occupied France, young Jewish refugee Shosanna Dreyfus witnesses the slaughter of her family by Colonel Hans Landa. Narrowly escaping with her life, she plots her revenge several years later when German war hero Fredrick Zoller takes a rapid interest in her and arranges an illustrious movie premiere at the theater she now runs. With the promise of every major Nazi officer in attendance, the event catches the attention of the "Basterds", a group of Jewish-American guerrilla soldiers led by the ruthless Lt. Aldo Raine. As the relentless executioners advance and the conspiring young girl\'s plans are set in motion, their paths will cross for a fateful evening that will shake the very annals of history.                Written by\nThe Massie Twins',
    actors: ["Brad Pitt", "Diane Kruger", "Eli Roth"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Snatch",
    year: "2000",
    genres: ["Comedy", "Crime"],
    ratings: [
      3, 2, 8, 3, 6, 9, 3, 9, 3, 1, 4, 1, 7, 7, 4, 2, 8, 9, 6, 6, 5, 2, 6, 1, 7,
      7, 4, 10, 2, 4,
    ],
    poster:
      "MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY500_SX342_AL_.jpg",
    contentRating: "15",
    duration: "PT104M",
    releaseDate: "2000-12-22",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Turkish and his close friend/accomplice Tommy get pulled into the world of match fixing by the notorious Brick Top. Things get complicated when the boxer they had lined up gets badly beaten by Pitt, a 'pikey' ( slang for an Irish Gypsy)- who comes into the equation after Turkish, an unlicensed boxing promoter wants to buy a caravan off the Irish Gypsies. They then try to convince Pitt not only to fight for them, but to lose for them too. Whilst all this is going on, a huge diamond heist takes place, and a fistful of motley characters enter the story, including 'Cousin Avi', 'Boris The Blade', 'Franky Four Fingers' and 'Bullet Tooth Tony'. Things go from bad to worse as it all becomes about the money, the guns, and the damned dog!                Written by\nFilmtwob <webmaster@filmfreak.co.za>",
    actors: ["Jason Statham", "Brad Pitt", "Benicio Del Toro"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY500_SX342_AL_.jpg",
  },
  {
    title: "Monty Pythons galna v\u00e4rld",
    year: "1975",
    genres: ["Adventure", "Comedy", "Fantasy"],
    ratings: [
      2, 9, 5, 6, 5, 8, 7, 3, 8, 4, 7, 2, 5, 8, 2, 5, 7, 9, 6, 1, 3, 7, 9, 6, 9,
      4, 4, 1, 7, 1,
    ],
    poster:
      "MV5BNmNmZjViNTQtNDQ5Mi00MDYzLWI5YWMtNDUyZGNmMGZhNDg4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY384_SX260_AL_.jpg",
    contentRating: "15",
    duration: "PT91M",
    releaseDate: "1977-04-15",
    averageRating: 0,
    originalTitle: "Monty Python and the Holy Grail",
    storyline:
      "History is turned on its comic head when, in 10th century England, King Arthur travels the countryside to find knights who will join him at the Round Table in Camelot. Gathering up the men is a tale in itself but after a bit of a party at Camelot, many decide to leave only to be stopped by God who sends them on a quest: to find the Holy Grail. After a series of individual adventures, the knights are reunited but must face a wizard named Tim, killer rabbits and lessons in the use of holy hand grenades. Their quest comes to an end however when the police intervene - just what you would expect in a Monty Python movie.                Written by\ngarykmcd",
    actors: ["Graham Chapman", "John Cleese", "Eric Idle"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNmNmZjViNTQtNDQ5Mi00MDYzLWI5YWMtNDUyZGNmMGZhNDg4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY384_SX260_AL_.jpg",
  },
  {
    title: "3 Idiots",
    year: "2009",
    genres: ["Comedy", "Drama"],
    ratings: [
      2, 7, 9, 10, 1, 10, 5, 7, 10, 5, 7, 9, 4, 9, 10, 3, 4, 7, 9, 1, 10, 3, 1,
      2, 3, 7, 5, 5, 8, 8,
    ],
    poster:
      "MV5BZWRlNDdkNzItMzhlZC00YTdmLWIwNjktYjY5NjQ1ZmQ3N2FkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,373,500_AL_.jpg",
    contentRating: "11",
    duration: "PT170M",
    releaseDate: "2009-12-25",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Farhan Qureshi and Raju Rastogi want to re-unite with their fellow collegian, Rancho, after faking a stroke aboard an Air India plane, and excusing himself from his wife - trouser less - respectively. Enroute, they encounter another student, Chatur Ramalingam, now a successful businessman, who reminds them of a bet they had undertaken 10 years ago. The trio, while recollecting hilarious antics, including their run-ins with the Dean of Delhi's Imperial College of Engineering, Viru Sahastrabudhe, race to locate Rancho, at his last known address - little knowing the secret that was kept from them all this time.                Written by\nrAjOo (gunwanti@hotmail.com)",
    actors: ["Aamir Khan", "Madhavan", "Mona Singh"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZWRlNDdkNzItMzhlZC00YTdmLWIwNjktYjY5NjQ1ZmQ3N2FkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,373,500_AL_.jpg",
  },
  {
    title: "L.A. konfidentiellt",
    year: "1997",
    genres: ["Crime", "Drama", "Mystery"],
    ratings: [
      7, 8, 9, 10, 8, 9, 1, 1, 5, 6, 3, 8, 5, 9, 1, 2, 4, 6, 5, 9, 10, 4, 6, 2,
      3, 9, 10, 1, 1, 2,
    ],
    poster:
      "MV5BMDBlYzAwZDktNzM2MS00YzBlLWI4ODQtZTlkNmMxZDc3NGRkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY429_SX290_AL_.jpg",
    contentRating: "15",
    duration: "PT138M",
    releaseDate: "1997-10-17",
    averageRating: 0,
    originalTitle: "L.A. Confidential",
    storyline:
      "1950's Los Angeles is the seedy backdrop for this intricate noir-ish tale of police corruption and Hollywood sleaze. Three very different cops are all after the truth, each in their own style: Ed Exley, the golden boy of the police force, willing to do almost anything to get ahead, except sell out; Bud White, ready to break the rules to seek justice, but barely able to keep his raging violence under control; and Jack Vincennes, always looking for celebrity and a quick buck until his conscience drives him to join Exley and White down the one-way path to find the truth behind the dark world of L.A. crime.                Written by\nGreg Bole <bole@life.bio.sunysb.edu>",
    actors: ["Kevin Spacey", "Russell Crowe", "Guy Pearce"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMDBlYzAwZDktNzM2MS00YzBlLWI4ODQtZTlkNmMxZDc3NGRkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY429_SX290_AL_.jpg",
  },
  {
    title: "F\u00f6r n\u00e5gra f\u00e5 dollar mer",
    year: "1965",
    genres: ["Western"],
    ratings: [
      8, 9, 9, 5, 2, 4, 3, 6, 7, 1, 3, 9, 5, 2, 6, 5, 5, 8, 2, 2, 3, 7, 10, 6,
      10, 5, 4, 8, 6, 10,
    ],
    poster:
      "MV5BMTQzMjIzOTEzMF5BMl5BanBnXkFtZTcwMTUzNTk3NA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
    contentRating: "",
    duration: "PT132M",
    releaseDate: "1966-11-17",
    averageRating: 0,
    originalTitle: "Per qualche dollaro in pi\u00f9",
    storyline:
      "Monco is a bounty killer chasing El Indio and his gang. During his hunting, he meets Col. Douglas Mortimer, another bounty killer, and they decide to make a partnership, chase the bad guys together and split the reward. During their enterprise, there will be lots of bullets and funny situations. In the end, one of the bounty hunters shows the real intention of his hunting.                Written by\nClaudio Carvalho, Rio de Janeiro, Brazil",
    actors: ["Clint Eastwood", "Lee Van Cleef", "Gian Maria Volont\u00e8"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQzMjIzOTEzMF5BMl5BanBnXkFtZTcwMTUzNTk3NA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
  },
  {
    title: "Scarface",
    year: "1983",
    genres: ["Crime", "Drama"],
    ratings: [
      7, 5, 1, 10, 9, 1, 8, 10, 10, 3, 9, 3, 6, 9, 1, 4, 8, 5, 5, 4, 5, 7, 4, 8,
      5, 6, 5, 6, 6, 3,
    ],
    poster:
      "MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "PT170M",
    releaseDate: "1984-03-23",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Tony Montana manages to leave Cuba during the Mariel exodus of 1980. He finds himself in a Florida refugee camp but his friend Manny has a way out for them: undertake a contract killing and arrangements will be made to get a green card. He's soon working for drug dealer Frank Lopez and shows his mettle when a deal with Colombian drug dealers goes bad. He also brings a new level of violence to Miami. Tony is protective of his younger sister but his mother knows what he does for a living and disowns him. Tony is impatient and wants it all however, including Frank's empire and his mistress Elvira Hancock. Once at the top however, Tony's outrageous actions make him a target and everything comes crumbling down.                Written by\ngarykmcd",
    actors: ["Al Pacino", "Michelle Pfeiffer", "Steven Bauer"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Jakten",
    year: "2012",
    genres: ["Drama"],
    ratings: [
      6, 2, 4, 1, 10, 5, 2, 9, 10, 4, 9, 8, 4, 4, 5, 7, 3, 7, 10, 6, 9, 7, 6, 1,
      1, 8, 6, 3, 7, 7,
    ],
    poster:
      "MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_SY500_CR0,0,349,500_AL_.jpg",
    contentRating: "15",
    duration: "PT115M",
    releaseDate: "2013-04-12",
    averageRating: 0,
    originalTitle: "Jagten",
    storyline:
      "Lucas is a Kindergarten teacher who takes great care of his students. Unfortunately for him, young Klara has a run-away imagination and concocts a lie about her teacher. Before Lucas is even able to understand the consequences, he has become the outcast of the town. The hunt is on to prove his innocence before it's taken from him for good.                Written by\nnapierslogs",
    actors: ["Mads Mikkelsen", "Thomas Bo Larsen", "Annika Wedderkopp"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_SY500_CR0,0,349,500_AL_.jpg",
  },
  {
    title: "Demonernas port",
    year: "1950",
    genres: ["Crime", "Drama", "Mystery"],
    ratings: [
      1, 4, 1, 1, 4, 10, 10, 8, 4, 8, 9, 8, 2, 6, 7, 2, 2, 3, 9, 5, 7, 5, 10, 8,
      8, 5, 1, 9, 3, 3,
    ],
    poster:
      "MV5BMTk1MDU5MjQ5NF5BMl5BanBnXkFtZTgwMDM2OTE4MzE@._V1_SY500_CR0,0,351,500_AL_.jpg",
    contentRating: "",
    duration: "PT88M",
    releaseDate: "1953-08-31",
    averageRating: 0,
    originalTitle: "Rash\u00f4mon",
    storyline:
      "A priest, a woodcutter and another man are taking refuge from a rainstorm in the shell of a former gatehouse called Rash\u00f4mon. The priest and the woodcutter are recounting the story of a murdered samurai whose body the woodcutter discovered three days earlier in a forest grove. Both were summoned to testify at the murder trial, the priest who ran into the samurai and his wife traveling through the forest just before the murder occurred. Three other people who testified at the trial are supposedly the only direct witnesses: a notorious bandit named Taj\u00f4maru, who allegedly murdered the samurai and raped his wife; the white veil cloaked wife of the samurai; and the samurai himself who testifies through the use of a medium. The three tell a similarly structured story - that Taj\u00f4maru kidnapped and bound the samurai so that he could rape the wife - but which ultimately contradict each other, the motivations and the actual killing being what differ. The woodcutter reveals at Rash\u00f4mon that he ...                Written by\nHuggo",
    actors: ["Toshir\u00f4 Mifune", "Machiko Ky\u00f4", "Masayuki Mori"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1MDU5MjQ5NF5BMl5BanBnXkFtZTgwMDM2OTE4MzE@._V1_SY500_CR0,0,351,500_AL_.jpg",
  },
  {
    title: "Ungkarlslyan",
    year: "1960",
    genres: ["Comedy", "Drama", "Romance"],
    ratings: [
      9, 4, 3, 2, 2, 7, 9, 7, 9, 3, 9, 2, 2, 10, 1, 4, 5, 5, 2, 6, 2, 2, 10, 6,
      7, 10, 1, 2, 6, 8,
    ],
    poster:
      "MV5BN2YxYmUyZGItZWEzYy00NTA3LThhM2UtZThhNDM5NWYxZGQ1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,323,500_AL_.jpg",
    contentRating: "15",
    duration: "PT125M",
    releaseDate: "1961-01-16",
    averageRating: 0,
    originalTitle: "The Apartment",
    storyline:
      "As of November 1, 1959, mild mannered C.C. Baxter has been working at Consolidated Life, an insurance company, for close to four years, and is one of close to thirty-two thousand employees located in their Manhattan head office. To distinguish himself from all the other lowly cogs in the company in the hopes of moving up the corporate ladder, he often works late, but only because he can't get into his apartment, located off of Central Park West, since he has provided it to a handful of company executives - Mssrs. Dobisch, Kirkeby, Vanderhoff and Eichelberger - on a rotating basis for their extramarital liaisons in return for a good word to the personnel director, Jeff D. Sheldrake. When Baxter is called into Sheldrake's office for the first time, he learns that it isn't just to be promoted as he expects, but also to add married Sheldrake to the list to who he will lend his apartment. What Baxter is unaware of is that Sheldrake's mistress is Fran Kubelik, an elevator girl in the ...                Written by\nHuggo",
    actors: ["Jack Lemmon", "Shirley MacLaine", "Fred MacMurray"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BN2YxYmUyZGItZWEzYy00NTA3LThhM2UtZThhNDM5NWYxZGQ1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,323,500_AL_.jpg",
  },
  {
    title: "Will Hunting",
    year: "1997",
    genres: ["Drama"],
    ratings: [
      3, 5, 8, 9, 9, 9, 10, 4, 4, 3, 9, 3, 9, 8, 1, 9, 6, 4, 9, 10, 9, 7, 7, 6,
      2, 10, 10, 1, 4, 4,
    ],
    poster:
      "MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,327,500_AL_.jpg",
    contentRating: "11",
    duration: "PT126M",
    releaseDate: "1998-03-13",
    averageRating: 0,
    originalTitle: "Good Will Hunting",
    storyline:
      "A touching tale of a wayward young man who struggles to find his identity, living in a world where he can solve any problem, except the one brewing deep within himself, until one day he meets his soul mate who opens his mind and his heart.                Written by\nDima & Danielle",
    actors: ["Robin Williams", "Matt Damon", "Ben Affleck"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY500_CR0,0,327,500_AL_.jpg",
  },
  {
    title: "Nader och Simin - En separation",
    year: "2011",
    genres: ["Drama", "Mystery"],
    ratings: [
      10, 3, 5, 7, 8, 3, 5, 7, 5, 8, 6, 10, 2, 10, 4, 1, 5, 6, 4, 5, 2, 4, 1, 2,
      9, 3, 3, 8, 4, 6,
    ],
    poster:
      "MV5BMTYzMzU4NDUwOF5BMl5BanBnXkFtZTcwMTM5MjA5Ng@@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "PT123M",
    releaseDate: "2011-09-30",
    averageRating: 0,
    originalTitle: "Jodaeiye Nader az Simin",
    storyline:
      "Nader (Peyman Moaadi) and Simin (Leila Hatami) argue about living abroad. Simin prefers to live abroad to provide better opportunities for their only daughter, Termeh. However, Nader refuses to go because he thinks he must stay in Iran and take care of his father (Ali-Asghar Shahbazi), who suffers from Alzheimers. However, Simin is determined to get a divorce and leave the country with her daughter.                Written by\nAmin Davoodi",
    actors: ["Peyman Moaadi", "Leila Hatami", "Sareh Bayat"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzMzU4NDUwOF5BMl5BanBnXkFtZTcwMTM5MjA5Ng@@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Indiana Jones och det sista korst\u00e5get",
    year: "1989",
    genres: ["Action", "Adventure", "Fantasy"],
    ratings: [
      1, 1, 4, 9, 1, 6, 7, 9, 5, 4, 8, 4, 4, 6, 9, 7, 5, 8, 6, 3, 9, 3, 1, 4, 9,
      3, 6, 6, 5, 1,
    ],
    poster:
      "MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY500_CR0,0,339,500_AL_.jpg",
    contentRating: "15",
    duration: "PT127M",
    releaseDate: "1989-09-15",
    averageRating: 0, 
    originalTitle: "Indiana Jones and the Last Crusade",
    storyline:
      "An art collector appeals to Jones to embark on a search for the Holy Grail. He learns that another archaeologist has disappeared while searching for the precious goblet, and the missing man is his own father, Dr. Henry Jones. The artifact is much harder to find than they expected, and its powers are too much for those impure in heart.                Written by\nJwelch5742",
    actors: ["Harrison Ford", "Sean Connery", "Alison Doody"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY500_CR0,0,339,500_AL_.jpg",
  },
  {
    title: "Metropolis",
    year: "1927",
    genres: ["Drama", "Sci-Fi"],
    ratings: [
      10, 10, 2, 10, 5, 8, 8, 7, 9, 9, 6, 9, 7, 3, 5, 4, 8, 4, 1, 3, 6, 4, 8, 9,
      6, 6, 6, 1, 2, 6,
    ],
    poster:
      "MV5BNDAzNTkyODg1MF5BMl5BanBnXkFtZTgwMDA3NDkwMDE@._V1_SY250_CR0,0,161,250_AL_.jpg",
    contentRating: "15",
    duration: "PT153M",
    releaseDate: "1927-04-04",
    averageRating: 0,
    originalTitle: "",
    storyline:
      'Sometime in the future, the city of Metropolis is home to a Utopian society where its wealthy residents live a carefree life. One of those is Freder Fredersen. One day, he spots a beautiful woman with a group of children, she and the children who quickly disappear. Trying to follow her, he, oblivious to such, is horrified to find an underground world of workers, apparently who run the machinery which keeps the above ground Utopian world functioning. One of the few people above ground who knows about the world below is Freder\'s father, Joh Fredersen, who is the founder and master of Metropolis. Freder learns that the woman is Maria, who espouses the need to join the "hands" - the workers - to the "head" - those in power above - by a mediator or the "heart". Freder wants to help the plight of the workers in the want for a better life. But when Joh learns of what Maria is espousing and that Freder is joining their cause, Joh, with the assistance of an old colleague and now nemesis named ...                Written by\nHuggo',
    actors: ["Brigitte Helm", "Alfred Abel", "Gustav Fr\u00f6hlich"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDAzNTkyODg1MF5BMl5BanBnXkFtZTgwMDA3NDkwMDE@._V1_SY250_CR0,0,161,250_AL_.jpg",
  },
  {
    title: "Allt om Eva",
    year: "1950",
    genres: ["Drama"],
    ratings: [
      9, 7, 2, 5, 8, 2, 8, 4, 2, 5, 4, 10, 6, 7, 2, 4, 3, 2, 5, 2, 4, 2, 8, 9,
      10, 2, 4, 3, 5, 3,
    ],
    poster:
      "MV5BMTY2MTAzODI5NV5BMl5BanBnXkFtZTgwMjM4NzQ0MjE@._V1_SY500_CR0,0,333,500_AL_.jpg",
    contentRating: "",
    duration: "PT138M",
    releaseDate: "1951-01-15",
    averageRating: 0,
    originalTitle: "All About Eve",
    storyline:
      'Eve (Anne Baxter) is waiting backstage to meet her "idol" aging Broadway Star, Margo Channing (Bette Davis). It all seems innocent enough as Eve explains that she has seen Margo in EVERY performance of the current play she is in. Only Playright critic DeWitt (George Sanders) sees through Eve\'s evil plan, which is to take her parts and fianc\u00e9, Bill Simpson (Gary Merrill) When the fianc\u00e9 shows no interest, she tries for playwright Hugh Marlowe (Lloyd Richards) but DeWitt stops her. After she accepts her award, she decides to skip the after-party and goes to her room, where we find a young woman named Phoebe, who snuck into her room and fell asleep. This is where the "Circle of Life" now comes to fruition as Eve is going to get played the way she did Margo.',
    actors: ["Bette Davis", "Anne Baxter", "George Sanders"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2MTAzODI5NV5BMl5BanBnXkFtZTgwMjM4NzQ0MjE@._V1_SY500_CR0,0,333,500_AL_.jpg",
  },
  {
    title: "Yojimbo (Livvakten)",
    year: "1961",
    genres: ["Action", "Drama", "Thriller"],
    ratings: [
      10, 9, 8, 9, 9, 1, 1, 2, 6, 4, 8, 2, 2, 9, 7, 10, 2, 7, 3, 5, 9, 3, 8, 6,
      6, 3, 2, 10, 1, 3,
    ],
    poster:
      "MV5BZThiZjAzZjgtNDU3MC00YThhLThjYWUtZGRkYjc2ZWZlOTVjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY500_CR0,0,332,500_AL_.jpg",
    contentRating: "15",
    duration: "PT110M",
    releaseDate: "1964-10-28",
    averageRating: 0,
    originalTitle: "Y\u00f4jinb\u00f4",
    storyline:
      "Sanjuro, a wandering samurai enters a rural town in nineteenth century Japan. After learning from the innkeeper that the town is divided between two gangsters, he plays one side off against the other. His efforts are complicated by the arrival of the wily Unosuke, the son of one of the gangsters, who owns a revolver. Unosuke has Sanjuro beaten after he reunites an abducted woman with her husband and son, then massacres his father's opponents. During the slaughter, the samurai escapes with the help of the innkeeper; but while recuperating at a nearby temple, he learns of innkeeper's abduction by Unosuke, and returns to the town to confront him.                Written by\nBernard Keane <BKeane2@email.dot.gov.au>",
    actors: ["Toshir\u00f4 Mifune", "Eijir\u00f4 T\u00f4no", "Tatsuya Nakadai"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZThiZjAzZjgtNDU3MC00YThhLThjYWUtZGRkYjc2ZWZlOTVjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY500_CR0,0,332,500_AL_.jpg",
  },
  {
    title: "Batman Begins",
    year: "2005",
    genres: ["Action", "Adventure"],
    ratings: [
      2, 5, 2, 8, 1, 2, 9, 5, 10, 3, 7, 7, 7, 4, 8, 2, 10, 6, 6, 3, 7, 8, 3, 7,
      10, 5, 8, 2, 9, 4,
    ],
    poster:
      "MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SY360_CR0,0,242,360_AL_.jpg",
    contentRating: "11",
    duration: "PT140M",
    releaseDate: "2005-07-27",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "When his parents are killed, billionaire playboy Bruce Wayne relocates to Asia where he is mentored by Henri Ducard and Ra's Al Ghul in how to fight evil. When learning about the plan to wipe out evil in Gotham City by Ducard, Bruce prevents this plan from getting any further and heads back to his home. Back in his original surroundings, Bruce adopts the image of a bat to strike fear into the criminals and the corrupt as the icon known as 'Batman'. But it doesn't stay quiet for long.                Written by\nkonstantinwe",
    actors: ["Christian Bale", "Michael Caine", "Ken Watanabe"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SY360_CR0,0,242,360_AL_.jpg",
  },
  {
    title: "Upp",
    year: "2009",
    genres: ["Animation", "Adventure", "Comedy"],
    ratings: [
      4, 1, 7, 1, 5, 7, 9, 9, 10, 2, 9, 7, 10, 9, 7, 2, 6, 1, 6, 6, 1, 2, 3, 5,
      2, 7, 5, 10, 7, 5,
    ],
    poster:
      "MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SY500_CR0,0,332,500_AL_.jpg",
    contentRating: "7",
    duration: "PT96M",
    releaseDate: "2009-10-16",
    averageRating: 0,
    originalTitle: "Up",
    storyline:
      "Carl Fredricksen as a boy wanted to explore South America and find the forbidden Paradise Falls. About 64 years later he gets to begin his journey along with a Boy Scout named Russel with help from 500 balloons. On their journey they discover many new friends including a talking dog and Carl and Russel figure out that someone evil plans. Carl soon realizes that this evildoer is his childhood idol. Will they be able to defeat him and will they find Paradise Falls?",
    actors: ["Edward Asner", "Jordan Nagai", "John Ratzenberger"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SY500_CR0,0,332,500_AL_.jpg",
  },
  {
    title: "I hetaste laget",
    year: "1959",
    genres: ["Comedy", "Romance"],
    ratings: [
      5, 5, 7, 5, 2, 7, 2, 8, 4, 6, 2, 1, 4, 5, 2, 8, 2, 1, 1, 8, 5, 8, 9, 8, 4,
      4, 10, 7, 6, 2,
    ],
    poster:
      "MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,322,500_AL_.jpg",
    contentRating: "15",
    duration: "PT120M",
    releaseDate: "1959-09-28",
    averageRating: 0,
    originalTitle: "Some Like It Hot",
    storyline:
      "When two Chicago musicians, Joe and Jerry, witness the the St. Valentine's Day massacre, they want to get out of town and get away from the gangster responsible, Spats Colombo. They're desperate to get a gig out of town but the only job they know of is in an all-girl band heading to Florida. They show up at the train station as Josephine and Daphne, the replacement saxophone and bass players. They certainly enjoy being around the girls, especially Sugar Kane Kowalczyk who sings and plays the ukulele. Joe in particular sets out to woo her while Jerry/Daphne is wooed by a millionaire, Osgood Fielding III. Mayhem ensues as the two men try to keep their true identities hidden and Spats Colombo and his crew show up for a meeting with several other crime lords.                Written by\ngarykmcd",
    actors: ["Marilyn Monroe", "Tony Curtis", "Jack Lemmon"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzAyOGIxYjAtMGY2NC00ZTgyLWIwMWEtYzY0OWQ4NDFjOTc5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,322,500_AL_.jpg",
  },
  {
    title: "Sierra Madres skatt",
    year: "1948",
    genres: ["Adventure", "Drama", "Western"],
    ratings: [
      8, 9, 7, 6, 9, 3, 8, 6, 9, 5, 5, 6, 7, 10, 5, 1, 3, 1, 3, 9, 10, 8, 3, 7,
      9, 7, 3, 7, 5, 9,
    ],
    poster:
      "MV5BMTQ4MzUzOTYwOV5BMl5BanBnXkFtZTgwNDA4MzgyMjE@._V1_SY250_SX169_AL_.jpg",
    contentRating: "",
    duration: "PT126M",
    releaseDate: "1948-04-29",
    averageRating: 0,
    originalTitle: "The Treasure of the Sierra Madre",
    storyline:
      "Fred C. Dobbs and Bob Curtin, both down on their luck in Tampico, Mexico in 1925, meet up with a grizzled prospector named Howard and decide to join with him in search of gold in the wilds of central Mexico. Through enormous difficulties, they eventually succeed in finding gold, but bandits, the elements, and most especially greed threaten to turn their success into disaster.                Written by\nJim Beaver <jumblejim@prodigy.net>",
    actors: ["Humphrey Bogart", "Walter Huston", "Tim Holt"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzUzOTYwOV5BMl5BanBnXkFtZTgwNDA4MzgyMjE@._V1_SY250_SX169_AL_.jpg",
  },
  {
    title: "De skoningsl\u00f6sa",
    year: "1992",
    genres: ["Drama", "Western"],
    ratings: [
      6, 7, 2, 9, 10, 4, 4, 10, 5, 9, 9, 2, 3, 3, 1, 8, 3, 10, 2, 5, 1, 7, 8, 7,
      3, 10, 4, 10, 9, 3,
    ],
    poster:
      "MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,332,500_AL_.jpg",
    contentRating: "15",
    duration: "PT131M",
    releaseDate: "1992-09-11",
    averageRating: 0,
    originalTitle: "Unforgiven",
    storyline:
      "The town of Big Whisky is full of normal people trying to lead quiet lives. Cowboys try to make a living. Sheriff 'Little Bill' tries to build a house and keep a heavy-handed order. The town whores just try to get by.Then a couple of cowboys cut up a whore. Dissatisfied with Bill's justice, the prostitutes put a bounty on the cowboys. The bounty attracts a young gun billing himself as 'The Schofield Kid', and aging killer William Munny. Munny reformed for his young wife, and has been raising crops and two children in peace. But his wife is gone. Farm life is hard. And Munny is no good at it. So he calls his old partner Ned, saddles his ornery nag, and rides off to kill one more time, blurring the lines between heroism and villainy, man and myth.                Written by\nCharlie Ness",
    actors: ["Clint Eastwood", "Gene Hackman", "Morgan Freeman"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,332,500_AL_.jpg",
  },
  {
    title: "Underg\u00e5ngen - Hitler och Tredje rikets fall",
    year: "2004",
    genres: ["Biography", "Drama", "History"],
    ratings: [
      2, 4, 5, 7, 10, 4, 2, 10, 8, 6, 2, 7, 3, 8, 5, 3, 6, 1, 2, 2, 4, 4, 9, 4,
      1, 6, 2, 5, 2, 10,
    ],
    poster:
      "MV5BMTM1OTI1MjE2Nl5BMl5BanBnXkFtZTcwMTEwMzc4NA@@._V1_SY500_CR0,0,337,500_AL_.jpg",
    contentRating: "15",
    duration: "PT156M",
    releaseDate: "2005-02-25",
    averageRating: 0,
    originalTitle: "Der Untergang",
    storyline:
      'In April of 1945, Germany stands at the brink of defeat with the Soviet Armies closing in from the west and south. In Berlin, capital of the Third Reich, Adolf Hitler proclaims that Germany will still achieve victory and orders his Generals and advisers to fight to the last man. "Downfall" explores these final days of the Reich, where senior German leaders (such as Himmler and Goring) began defecting from their beloved Fuhrer, in an effort to save their own lives, while still others (Joseph Goebbels) pledge to die with Hitler. Hitler, himself, degenerates into a paranoid shell of a man, full of optimism one moment and suicidal depression the next. When the end finally does comes, and Hitler lies dead by his own hand, what is left of his military must find a way to end the killing that is the Battle of Berlin, and lay down their arms in surrender.                Written by\nAnthony Hughes {husnock31@hotmail.com}',
    actors: ["Bruno Ganz", "Alexandra Maria Lara", "Ulrich Matthes"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1OTI1MjE2Nl5BMl5BanBnXkFtZTcwMTEwMzc4NA@@._V1_SY500_CR0,0,337,500_AL_.jpg",
  },
  {
    title: "Tjuren fr\u00e5n Bronx",
    year: "1980",
    genres: ["Biography", "Drama", "Sport"],
    ratings: [
      3, 10, 8, 1, 5, 4, 9, 5, 9, 2, 8, 3, 2, 6, 3, 5, 10, 2, 1, 9, 3, 9, 4, 10,
      3, 3, 10, 6, 9, 3,
    ],
    poster:
      "MV5BMjIxOTg3OTc5MF5BMl5BanBnXkFtZTcwNzkwNjMwNA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
    contentRating: "15",
    duration: "PT129M",
    releaseDate: "1981-03-20",
    averageRating: 0,
    originalTitle: "Raging Bull",
    storyline:
      "When Jake LaMotta steps into a boxing ring and obliterates his opponent, he's a prizefighter. But when he treats his family and friends the same way, he's a ticking time bomb, ready to go off at any moment. Though LaMotta wants his family's love, something always seems to come between them. Perhaps it's his violent bouts of paranoia and jealousy. This kind of rage helped make him a champ, but in real life, he winds up in the ring alone.                Written by\nalfiehitchie",
    actors: ["Robert De Niro", "Cathy Moriarty", "Joe Pesci"],
    imdbRating: 8.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxOTg3OTc5MF5BMl5BanBnXkFtZTcwNzkwNjMwNA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
  },
  {
    title: "Den tredje mannen",
    year: "1949",
    genres: ["Film-Noir", "Mystery", "Thriller"],
    ratings: [
      7, 7, 1, 7, 6, 9, 10, 8, 9, 8, 10, 1, 8, 5, 7, 8, 2, 2, 5, 10, 1, 4, 8, 7,
      2, 5, 2, 9, 6, 2,
    ],
    poster:
      "MV5BZjQxYmRkMjgtMmZkZi00ZDYyLTk5OTktZWZjZTEzNGZlMWEwXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,335,500_AL_.jpg",
    contentRating: "15",
    duration: "PT104M",
    releaseDate: "1949-10-26",
    averageRating: 0,
    originalTitle: "The Third Man",
    storyline:
      "An out of work pulp fiction novelist, Holly Martins, arrives in a post war Vienna divided into sectors by the victorious allies, and where a shortage of supplies has lead to a flourishing black market. He arrives at the invitation of an ex-school friend, Harry Lime, who has offered him a job, only to discover that Lime has recently died in a peculiar traffic accident. From talking to Lime's friends and associates Martins soon notices that some of the stories are inconsistent, and determines to discover what really happened to Harry Lime.                Written by\nMark Thompson <mrt@oasis.icl.co.uk>",
    actors: ["Orson Welles", "Joseph Cotten", "Alida Valli"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZjQxYmRkMjgtMmZkZi00ZDYyLTk5OTktZWZjZTEzNGZlMWEwXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY500_CR0,0,335,500_AL_.jpg",
  },
  {
    title: "Die Hard",
    year: "1988",
    genres: ["Action", "Thriller"],
    ratings: [
      7, 3, 3, 7, 10, 10, 4, 7, 9, 3, 5, 10, 7, 8, 6, 9, 3, 5, 3, 3, 5, 7, 7, 9,
      4, 3, 6, 6, 6, 6,
    ],
    poster:
      "MV5BMzNmY2IwYzAtNDQ1NC00MmI4LThkOTgtZmVhYmExOTVhMWRkXkEyXkFqcGdeQXVyMTk5NDA3Nw@@._V1_SX290_CR0,0,290,429_AL_.jpg",
    contentRating: "15",
    duration: "PT131M",
    releaseDate: "1988-09-30",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "NYPD cop John McClane goes on a Christmas vacation to visit his wife Holly in Los Angeles where she works for the Nakatomi Corporation. While they are at the Nakatomi headquarters for a Christmas party, a group of bank robbers led by Hans Gruber take control of the building and hold everyone hostage, with the exception of John, while they plan to perform a lucrative heist. Unable to escape and with no immediate police response, John is forced to take matters into his own hands.                Written by\nSam",
    actors: ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"],
    imdbRating: 8.2,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzNmY2IwYzAtNDQ1NC00MmI4LThkOTgtZmVhYmExOTVhMWRkXkEyXkFqcGdeQXVyMTk5NDA3Nw@@._V1_SX290_CR0,0,290,429_AL_.jpg",
  },
];

const getMovies = () => {
  return movies;
};

const getGenres = () => {
  const genres = new Set();
  movies.forEach((movie) => {
    if (Array.isArray(movie.genres)) movie.genres.forEach((g) => genres.add(g));
  });

  const convertedGenres = Array.from(genres);
  return convertedGenres.map((g, idx) => ({ id: idx + 1, name: g }));
};

export { getMovies, getGenres };
