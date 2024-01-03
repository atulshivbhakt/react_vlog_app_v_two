import { useState, createContext } from "react";

export const Store = createContext();

function Storedata(props) {
  const [data, setData] = useState([
        // Bollywood data 
    {      id: 1,
    category: "Bollywood",
    name: "SALAR",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWYwMWU2N2QtMjExOC00OWY1LTllYzEtYWZjYzZlY2IwMzVhXkEyXkFqcGdeQXVyNjE0ODgwMDA@._V1_.jpg",
    text: "Salaar: Part 1 – Ceasefire (transl. Commander) is a 2023 Indian Telugu-language epic action film written and directed by Prashanth Neel and produced by Vijay Kiragandur. It stars Prabhas and Prithviraj Sukumaran, with a supporting cast that includes Shruti Haasan, Jagapathi Babu, Bobby Simha, Tinnu Anand, Easwari Rao, Sriya Reddy and Ramachandra Raju. Set in the fictional dystopian city-state of Khansaar, the film follows the friendship between Deva (Prabhas), a tribesman and Varadha (Prithviraj), the prince of Khansaar. When a coup d'état is planned by his father's ministers and his relatives, Varadha enlists Deva's help to become Khansaar's undisputed ruler.The film's initial story was pitched from Neel's debut film Ugramm[7] and is the maiden part of a two-part film. It was officially announced in December 2020 under the title Salaar, however, in July 2023, the official title was announced as Salaar: Part 1 – Ceasefire. Principal photography commenced in January 2021 in Telangana, later followed with a schedule in Hyderabad, which again was followed by another schedule near the latter location, which was again followed by a sporadic schedule in Italy and wrapped by early-December 2023. The film has music composed by Ravi Basrur, cinematography handled by Bhuvan Gowda and editing by Ujwal Kulkarni.",
  },
  {
    id: 2,
    category: "Bollywood",
    name: "John Wick",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/John_Wick_-_Chapter_4_promotional_poster.jpg/220px-John_Wick_-_Chapter_4_promotional_poster.jpg",
    text: "John Wick: Chapter 4 (also known as John Wick 4 or JW4 and known in Japan as John Wick: Consequences[5][6]) is a 2023 American neo-noir action thriller film directed and co-produced by Chad Stahelski and written by Shay Hatten and Michael Finch. The sequel to John Wick: Chapter 3 – Parabellum (2019) and the fourth installment in the John Wick franchise, the film stars Keanu Reeves as the title character, alongside Donnie Yen, Bill Skarsgård, Laurence Fishburne, Hiroyuki Sanada, Shamier Anderson, Lance Reddick, Rina Sawayama, Scott Adkins, Clancy Brown, and Ian McShane. In the film, John Wick sets out to get revenge on the High Table and those who left him for dead.Development of the fourth John Wick film, formally announced by Lionsgate in May 2019, was confirmed before the release of its predecessor. It is the first film in the franchise that was not written by franchise creator Derek Kolstad, with Hatten hired in May 2020, followed by Finch in March 2021. Principal photography took place from June to October 2021, and filming locations included France, Germany, New York City, and Japan.",
  },
  {
    id: 3,
    category: "Bollywood",
    name: "Animal",
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/28/full/1695891993-0587.jpg?im=FeatureCrop,size=(826,465)",
    text: "Ranbir Kapoor will project the role of Arjan Vailly Singh, a fierce goon. His father, Balbir Singh will be played by Anil Kapoor. Bobby Deol is also starring in the film, but his role has been kept hidden It is expected that he is the antagonist of the film. Initially, Parineeti Chopra was expected to be part of the film, however, Rashmika Mandanna replaced her because of scheduling clashes. Rashmika will play the role of Geetanjali Geeta Singh, Arjan’s wife.Apart from the lead cast, Tripti Dimri, Babloo Prithiveeraj, Ravi Gupta, Siddhant Karnick, Shakti Kapoor, Prem Chopra, Suresh Oberoi, and Saurabh Sachdeva are likewise playing important roles in the film.",
  },
  {
    id: 4,
    category: "Bollywood",
    name: "Tanhaji:The Unsung Warrior",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQF_-AwTiBuGQJRzPqsje-5saTCerF5LOodzG2mGTTaszvUOEfQ",
    text: "'Tanhaji: The Unsung Warrior' Story: The film traces the life of the fierce Maratha warrior, Tanhaji Malusare, who was one of Chhatrapati Shivaji Maharaj’s closest aides and a military leader. It focuses on the famous Battle of Sinhagad (February 4, 1670), which saw Tanhaji take on Udaybhan, a Rajput who fought for Aurangzeb against the Marathas.Ajay Devgn is in top form playing the braveheart Maratha warrior, Tanhaji, with all his might. He powers through with subtlety and restraint while keeping the patriotic passion high at all times. Kajol as Tanhaji’s strong and supportive wife, Savitribai, makes her limited screen time count with a convincing performance. Saif as Udaybhan overpowers; he brings out the brutality and devilish streak of his character with finesse and ferocity. In some moments of his evil madness, he actually adds a tinge of humour to the scene, while breaking into a sinister laugh himself. This is one of Saif’s most outstanding performances. Another high point of the film is the casting of the key characters. Sharad Kelkar as Chhatrapati Shivaji Maharaj looks the part and brings the required gravitas to the part of the warrior-king.",
  },
  {
    id: 5,
    category: "Bollywood",
    name: "SITA RAMAM",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2RjZDJhYzUtOTQ5Yy00OWM3LWE5OTctM2Y0YWVmNzAzODllXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
    text: "Sita Ramam unravels the mystery surrounding its title characters, Sita Mahalakshmi (Mrunal Thakur’s debut in Telugu cinema) and Lt Ram (Dulquer Salmaan) through two timelines — 1964 and 1984. Afreen (Rashmika Mandanna), a Pakistan-origin student arrives in India from London, when she is tasked with tracing Sita to hand over a 20-year-letter written to her by Ram. She takes the help of her college senior Balaji (Tharun Bhascker), who is now in Hyderabad.", 

    
  },
  {
    id: 6,
    category: "Bollywood",
    name: "AADIPURUSH",
    image:
      "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2023_06/story_43703/assets/4.jpeg?time=1687259562&size=*:900",
    text: "The story is based on Lord Shri Ram, who travels to Lanka by building Ram Setu along with his younger brother. Directed by Om Raut, Adipurush stars Prabhas, Kriti Sanon and Sai Ali Khan in the lead roles.  Adipurush opens with a powerful introduction of Raavan, also known as Lankesh, which establishes the character's power and authority. The story then shifts to a few years later, when Raghav and Janaki are exiled in the jungle and struggling to survive on a daily basis. Later, when Shurpanakha draws near Raavan, their problems worsen. She asks her brother to kidnap Sita in order to exact revenge on Ram for rejecting her. Raghav then works with Bajrang and Sugriv to help release his wife from the demon king's grasp.",
  },
  {
    id: 7,
    category: "Bollywood",
    name: "PADMAVAT",
    image:
      "https://th-i.thgim.com/public/news/national/article22466484.ece/alternates/FREE_1200/padmavati1",
    text: "Padmaavat is a 2018 Indian Hindi-language historical drama film directed by Sanjay Leela Bhansali. Based on the epic poem of the same name by Malik Muhammad Jayasi, it stars Deepika Padukone as Rani Padmavati, a Rajput queen known for her beauty, wife of Maharawal Ratan Singh, played by Shahid Kapoor. Sultan Alauddin Khalji, played by Ranveer Singh, hears of her beauty and attacks her kingdom to enslave her. Aditi Rao Hydari, Jim Sarbh, Raza Murad, and Anupriya Goenka featured in supporting roles With a production budget of ₹180 crore (US$26.32 million) ₹190 crore (US$27.78 million), Padmaavat is one of the most expensive Indian films ever made.[4][5][6] Initially scheduled for release on 1 December 2017, the film faced numerous controversies. Amid violent protests, its release was indefinitely delayed. The Central Board of Film Certification later approved the film with few changes, which includes the addition of multiple disclaimers and a change from its original title Padmavati.[9][10] It was rescheduled for release on 25 January 2018 in 2D, 3D and IMAX 3D formats, making it the first Indian film to be released in IMAX 3D.",
  },
  {
    id: 8,
    category: "Bollywood",
    name: "83",
    image:
      "http://t1.gstatic.com/images?q=tbn:ANd9GcQlsdpReECrV8VeDq7OjbjIl4BtGZOfEi1g54fKnVNsKbhaGfcZ9waxyb88xw8pQnKwDPlCwA",
    text: "83 is a 2021 Indian Hindi-language biographical sports drama film written and directed by Kabir Khan and produced by Deepika Padukone, Kabir Khan, Vishnu Vardhan Induri, Sajid Nadiadwala, Reliance Entertainment.[7][8] Based on the India national cricket team led by Kapil Dev, which won the 1983 Cricket World Cup, the film's story and dialogues were co-written by Khan, along with Sanjay Puran Singh Chauhan, Vasan Bala and Sumit Arora. The film's sports action was directed by Rob Miller. This movie features an ensemble cast of Ranveer Singh, Deepika Padukone, Pankaj Tripathi, Tahir Raj Bhasin, Jiiva, Saqib Saleem, Jatin Sarna, Chirag Patil, Dinker Sharma, Nishant Dahiya, Harrdy Sandhu, Sahil Khattar, Ammy Virk, Adinath Kothare, Dhairya Karwa and R. Badree.Vishnu Vardhan Induri who first owned the rights for the film and Madhu Mantena the co producer in Phantom Films formally met the Indian squad of 1983 during mid-July 2016, and its frontman Kapil Dev, where they signed a Memorandum of understanding (MoU) to make the official biopic.[9] In September 2017, Reliance Entertainment joined the film's producers and officially announced the biopic with members of the winning team, where Singh and Khan brought on board.[10] Following an extensive casting and pre-production process, the film began principal photography on 5 June 2019, where it was majorly shot in and around England for three months and a brief schedule took place in India, before filming being wrapped up on 7 October.",
  },
  {
    id: 9,
    category: "Bollywood",
    name: "M.S.DHONI",
    image:
      "http://t1.gstatic.com/images?q=tbn:ANd9GcRWGPvnvL-wKQuSm_viXp9MZREcoDHTpolbbyP9cvZ-prXfRJZKp3G4kpaGVrOIr6YmVQjZ",
    text: "M.S. Dhoni: The Untold Story is a 2016 Indian Hindi-language biographical sports drama film written and directed by Neeraj Pandey. It is based on the life of former Test, ODI and T20I captain of the Indian national cricket team, Mahendra Singh Dhoni. The film stars the late Sushant Singh Rajput as MS Dhoni, along with Disha Patani, Kiara Advani, and Anupam Kher. The film chronicles the life of Dhoni from a young age through a series of life events.The idea of the biopic was put forward by Dhoni's manager, Arun Pandey, after encountering an incident at an airport after the 2011 Cricket World Cup Final. Development began two years later, with the consent of Dhoni. Neeraj Pandey was later approached to helm the film while he was working on Baby. Pandey recruited a number of people for researching into Dhoni's background and his life events. Dhoni eventually became a consultant on the film.The film was released on 30 September 2016 by Fox Star Studios and received the widest release ever for a Bollywood film across 61 countries. In addition to being released in Hindi language, it was also dubbed in Tamil, Telugu, and Marathi languages, although the Marathi release was later cancelled due to opposition. Upon release, the film became a critical and commercial success. It is the fifth highest-grossing Bollywood film of 2016 and sixth highest grossing Indian film of 2016 worldwide ₹215.48 crore (US$27 million).[3]",
  },
  {
    id: 10,
    category: "Bollywood",
    name: "BHOOT",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Bhoot_Film_Poster.jpg/220px-Bhoot_Film_Poster.jpg",
    text: "Bhoot Part One: The Haunted Ship bhoot being ghost in Hindi) is a 2020 Indian Hindi-language horror thriller film written and directed by Bhanu Pratap Singh[4] and jointly produced by Karan Johar, Hiroo Yash Johar, Apoorva Mehta, and Shashank Khaitan.[5] The film features Vicky Kaushal in lead role and is the first film of what was a planned horror film franchise.[5] Movies director and producer claimed that film is based on a true incident that took place in Mumbai,[6] the famous MV Wisdom in 2011[7] and tells the story of an officer who has to move an abandoned but haunted ship lying static on Juhu Beach. Principal photography began in December 2018 and was wrapped in September 2019.[8] Set for an initial release on 15 November 2019, the film was postponed and released theatrically in India on 21 February 2020.[9] It eventually received negative reviews and was a commercial failure."
  },

  // Hollywood section 
  {
    id: 11,
    category: "Hollywood",
    name: "Justice League",
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTuMtp_czJyJ-Dq_RZ1X_H8fhRBc9cIfLLd5EYm0Ieg5-v75u8lOWClB67bLV_gSUpEOim3tw",
    text: "Justice League is a 2017 American superhero film based on the DC Comics superhero team of the same name. Produced by Warner Bros. Pictures, DC Films, RatPac-Dune Entertainment,[b] Atlas Entertainment, and Cruel and Unusual Films and distributed by Warner Bros. Pictures, it is the fifth installment in the DC Extended Universe (DCEU). Directed by Zack Snyder and written by Chris Terrio and Joss Whedon, the film features an ensemble cast including Ben Affleck, Henry Cavill, Amy Adams, Gal Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Jeremy Irons, Diane Lane, Connie Nielsen, and J. K. Simmons. In the film, following the events of Batman v Superman: Dawn of Justice (2016) Batman and Wonder Woman recruit The Flash, Aquaman, and Cyborg after the death of Superman to save the world from the catastrophic threat of Steppenwolf and his army of Parademons.Warner Bros. began to develop a live-action Justice League film in 2007 with George Miller set to direct, but the project was canceled due to production delays and budgetary concerns. Principal photography took place from April to October 2016. After Snyder stepped down from the film following the death of his daughter, Whedon was hired to oversee the remainder of post-production, including writing and directing additional scenes, as well as reshooting a large portion of the film, which changed many aspects of it; Snyder ultimately retained sole credit as director. With an estimated production budget of $300 million, Justice League is one of the most expensive films ever made.",
  },
  {
    id: 12,
    category: "Hollywood",
    name: "Captain America: First Avenger",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg",
    text: "Captain America: The First Avenger is a 2011 American superhero film based on the Marvel Comics character Captain America. Produced by Marvel Studios and distributed by Paramount Pictures,[a] it is the fifth film in the Marvel Cinematic Universe (MCU). The film was directed by Joe Johnston, written by Christopher Markus and Stephen McFeely, and stars Chris Evans as Steve Rogers / Captain America alongside Tommy Lee Jones, Hugo Weaving, Hayley Atwell, Sebastian Stan, Dominic Cooper, Toby Jones, Neal McDonough, Derek Luke, and Stanley Tucci. During World War II, Steve Rogers, a frail man, is transformed into the super-soldier Captain America and must stop the Red Skull (Weaving) from using the Tesseract as an energy source for world domination.The film began as a concept in 1997 and was scheduled for distribution by Artisan Entertainment. However, a lawsuit disrupted the project and was not settled until September 2003. In 2005, Marvel Studios received a loan from Merrill Lynch, and planned to finance and release the film through Paramount Pictures. Directors Jon Favreau and Louis Leterrier were interested in directing the project before Johnston was approached in 2008. The principal characters were cast between March and June 2010. Production began in June, and filming took place in London, Manchester, Caerwent, Liverpool, and Los Angeles. Several different techniques were used by the visual effects company Lola to create the physical appearance of the character before he becomes Captain America.",
  },
  {
    id: 13,
    category: "Hollywood",
    name: "Incepation",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    text: "Inception is a 2010 science fiction action film[4][5][6] written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased, as payment for the implantation of another person's idea into a target's subconscious.[7] The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page,[a] Tom Hardy, Cillian Murphy, Tom Berenger, Dileep Rao and Michael Caine.",
  },
  {
    id: 14,
    category: "Hollywood",
    name: "Treminator 2",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Terminator2poster.jpg/220px-Terminator2poster.jpg",
    text: "Terminator 2: Judgment Day[a] is a 1991 American science fiction action film directed by James Cameron, who co-wrote the script with William Wisher. Starring Arnold Schwarzenegger, Linda Hamilton, Robert Patrick, and Edward Furlong, it is the sequel to The Terminator (1984) and is the second installment in the Terminator franchise. In the film, the malevolent artificial intelligence Skynet sends a Terminator—a highly advanced killing machine—back in time to 1995 to kill the future leader of the human resistance John Connor, when he is a child. The resistance sends back a less advanced, reprogrammed Terminator to protect Connor and ensure the future of humanity.",
  },
  {
    id: 15,
    category: "Hollywood",
    name: "Oppenheimer",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg",
    text: "Oppenheimer is a 2023 epic[5] biographical thriller film[6] written and directed by Christopher Nolan.[7] It stars Cillian Murphy as J. Robert Oppenheimer, the American theoretical physicist credited with being the father of the atomic bomb for his role in the Manhattan Project—the World War II undertaking that developed the first nuclear weapons. Based on the 2005 biography American Prometheus by Kai Bird and Martin J. Sherwin, the film chronicles the career of Oppenheimer, with the story predominantly focusing on his studies, his direction of the Manhattan Project during World War II, and his eventual fall from grace due to his 1954 security hearing. The film also stars Emily Blunt as Oppenheimer's wife 'Kitty', Matt Damon as head of the Manhattan Project Leslie Groves, Robert Downey Jr. as United States Atomic Energy Commission member Lewis Strauss, and Florence Pugh as Oppenheimer's communist lover Jean Tatlock. The ensemble supporting cast includes Josh Hartnett, Casey Affleck, Rami Malek, and Kenneth Branagh.",
  },
  {
    id: 16,
    category: "Hollywood",
    name: "Pirates of the Caribbean",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_piratesofthecaribbean_deadmentellnotales_19642_e89de0a3.jpeg",
    text: "Pirates of the Caribbean: Dead Men Tell No Tales (released internationally as Pirates of the Caribbean: Salazar's Revenge) is a 2017 American swashbuckler fantasy film directed by Joachim Rønning and Espen Sandberg. It is written by Jeff Nathanson, from a story by Nathanson and Terry Rossio. Produced by Jerry Bruckheimer and distributed by Walt Disney Studios Motion Pictures, the film is the standalone sequel to On Stranger Tides (2011) and the fifth installment in the Pirates of the Caribbean film series. The film stars Johnny Depp, Javier Bardem, Geoffrey Rush, Brenton Thwaites, Kaya Scodelario, and Kevin McNally. The story follows Captain Jack Sparrow (Depp) searches for the Trident of Poseidon to defeat Armando Salazar (Bardem), who is determined to kill every pirate at sea and take revenge on Sparrow for imprisoning him and his crew of ghosts in the Devil's Triangle. Jack is joined by Hector Barbossa (Rush), Will Turner's son Henry (Thwaites), young astronomer Carina Smyth (Scodelario) and Jack's first mate Joshamee Gibbs (McNally) to defeat Salazar's ghostly crew.The filmmakers cited the series' first installment, The Curse of the Black Pearl (2003), as inspiration for the script and tone of the film, with critics describing the film as a requel. Pre-production for the film started shortly before On Stranger Tides was released in early 2011, with Terry Rossio writing the initial script. In early 2013, Jeff Nathanson was hired to write a new script for the film, with Depp being involved in Nathanson's writing process. Initially planned for a 2015 release, the film was delayed to 2016 and then to 2017, due to script and budget issues. Principal photography started in Australia in February 2015, after the Australian government offered Disney $20 million in tax incentives, and ended in July 2015.",
  },
  {
    id: 17,
    category: "Hollywood",
    name: "The Dark Knight Rises",
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQpBA5a1V4L0WZ7vOB8DLuZmWwdouli_6N1BUE9Lj46_Sx2Pzd5Hy9P7GNbXBL0a_fPcTrD",
    text: "The Dark Knight Rises is a 2012 superhero film directed by Christopher Nolan, who co-wrote the screenplay with his brother Jonathan Nolan, and the story with David S. Goyer.[5] Based on the DC Comics character Batman, it is the final installment in Nolan's The Dark Knight trilogy, and the sequel to The Dark Knight (2008). The film stars Christian Bale as Bruce Wayne / Batman, alongside Anne Hathaway, Gary Oldman, Tom Hardy, Morgan Freeman, Marion Cotillard, Joseph Gordon-Levitt, and Michael Caine. Eight years after the events of The Dark Knight, the terrorist Bane forces Bruce Wayne to resume his role as Batman and save Gotham City from nuclear destruction.Christopher Nolan was hesitant about returning to the series for a third film, but agreed after developing a story with his brother and Goyer that he felt would conclude the series on a satisfactory note. Nolan drew inspiration from Bane's comic book debut in the 1993 Knightfall storyline, the 1986 series The Dark Knight Returns, and the 1999 storyline No Man's Land. Filming took place from May to November 2011 in locations including Jodhpur, London, Nottingham, Glasgow, Los Angeles, New York City, Newark, and Pittsburgh. Nolan used IMAX 70 mm film cameras for much of the filming, including the first six minutes of the film, to optimize the quality of the picture. A vehicle variation of the Batplane and Batcopter termed the Bat, an underground prison set, and a new Batcave set were created specifically for the film. As with The Dark Knight, viral marketing campaigns began early during production. When filming concluded, Warner Bros. refocused its campaign, developing promotional websites, releasing the first six minutes of the film, screening theatrical trailers, and sending out information regarding the film's plot.",
  },
  {
    id: 18,
    category: "Hollywood",
    name: "Dr Strange ",
    image:
      "https://static.wixstatic.com/media/c0ca52_861cbfbd84344362a233f609406354cd~mv2.jpg/v1/fit/w_540%2Ch_675%2Cal_c%2Cq_80,enc_auto/file.jpg",
    text: "Doctor       Strange in the Multiverse of Madness is a 2022 American superhero film based on Marvel Comics featuring the character Doctor Strange. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Doctor Strange (2016) and the 28th film in the Marvel Cinematic Universe (MCU). The film was directed by Sam Raimi, written by Michael Waldron, and stars Benedict Cumberbatch as Stephen Strange, alongside Elizabeth Olsen, Chiwetel Ejiofor, Benedict Wong, Xochitl Gomez, Michael Stuhlbarg, and Rachel McAdams. In the film, Strange protects America Chavez (Gomez), a teenager capable of traveling the multiverse, from Wanda Maximoff (Olsen).",
  },
  {
    id: 19,
    category: "Hollywood",
    name: "Transformers",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Transformers-_Rise_of_the_Beasts.jpg/220px-Transformers-_Rise_of_the_Beasts.jpg",
    text: "    Transformers: Rise of the Beasts is a 2023 American science fiction action film based on Hasbro's Transformers toy line, and primarily influenced by its Beast Wars sub-franchise. It is the seventh installment in the Transformers film series and serves as both a standalone sequel to Bumblebee (2018) and a prequel to Transformers (2007).[8] The film is directed by Steven Caple Jr. from a screenplay by Joby Harold, Darnell Metayer, Josh Peters, Erich Hoeber, and Jon Hoeber. Michael Bay again serves as producer. It stars Anthony Ramos and Dominique Fishback, as well as the voice talents of Ron Perlman, Peter Dinklage, Michelle Yeoh, Pete Davidson, Liza Koshy, Michaela Jaé Rodriguez, Colman Domingo, Cristo Fernández, Tongayi Chirisa, and returning franchise regulars Peter Cullen, John DiMaggio, and David Sobolov. Set in 1994, the film follows ex-military electronics expert Noah Diaz and artifact researcher Elena Wallace as they help the Autobots and the Maximals protect an artifact known as the Transwarp Key from the villainous Terrorcons. Principal photography took place from June to October 2021, with filming locations including Los Angeles, Peru, Montreal, and New York City.",
  },
  {
    id: 20,
    category: "Hollywood",
    name: "Captain America- ",
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg",
    text: "Captain     America: Civil War is a 2016 American superhero film based on the Marvel Comics character Captain America, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Captain America: The First Avenger (2011) and Captain America: The Winter Soldier (2014), and the 13th film in the Marvel Cinematic Universe (MCU). The film was directed by Anthony and Joe Russo from a screenplay by the writing team of Christopher Markus and Stephen McFeely, and stars Chris Evans as Steve Rogers / Captain America alongside an ensemble cast including Robert Downey Jr., Scarlett Johansson, Sebastian Stan, Anthony Mackie, Don Cheadle, Jeremy Renner, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Paul Rudd, Emily VanCamp, Marisa Tomei, Tom Holland, Frank Grillo, Martin Freeman, William Hurt, and Daniel Brühl. In Captain America: Civil War, disagreement over international oversight of the Avengers fractures the team into two opposing factions—one led by Steve Rogers and the other by Tony Stark (Downey).",
  },
  // Technology section
  {
    id: 21,
    category: "Technology",
    name: "Startup from Thiruvananthapuram set to revolutionise filmmaking through AI technology",
    image:
      "https://images.newindianexpress.com/uploads/user/imagelibrary/2023/10/13/w900X450/TPuram_startups1.jpg?w=640&dpr=1.0",
    text: "At a time when artificial intelligence (AI) is making its presence felt in most sectors, can the movie industry be spared? Developed by Accubits Technologies, a startup based in Technopark, Dcult Studio promises to revolutionise filmmaking. It transforms written narratives into cinematic-quality storyboards, providing filmmakers with a visual guide that is not only accurate but emotionally resonant with the script’s essence through the use of AI technology.",
  },
  {
    id: 22,
    category: "Technology",
    name: "My ‘guarantee ki gaadi’ benefitting many: Modi at Viksit Bharat event",
    image:
      "https://images.indianexpress.com/2023/12/PM-Modi-2.jpg?w=640",
    text: "Prime Minister Narendra Modi Wednesday said people don’t need to resort to bribes to avail of welfare schemes any more as he himself is their “familial connection” in government.“Today many are getting benefits from Modi’s guarantee ki gadi (vehicle). Many people would not have even known that they, too, are entitled to a government scheme. Due to old habits, they may feel they won’t get any benefit as they don’t have any relatives or acquaintances in the administration. But Modi is your family, there is no need for anyone else’s connection,” he said.Modi was speaking via video conferencing with the beneficiaries of the Viksit Bharat Sankalp Yatra (VBSY), a campaign that seeks to cover those left out of his government’s flagship welfare schemes. Union Health Minister Mansukh Mandaviya and Rajasthan Chief Minister Bhajan Lal Sharma, too, joined the event through video conferencing.As part of the campaign, said Modi, 4.5 lakh new applications have been filed for Ujjwala gas connections, one crore Ayushman cards have been issued, 1.25 crore health check-ups have been conducted, 70 lakh people have been screened for TB and 15 lakh sickle cell anaemia tests have been conducted.",
  },
  {
    id: 23,
    category: "Technology",
    name: "Hiring in Indian IT sector likely to see 8-10% growth in 2024: report",
    
    image: "https://img.etimg.com/thumb/msid-106316204,width-650,height-488,imgsize-881996,resizemode-75/it-hiring-2024.jpg",
    text: "The Indian IT sector, which has seen a contraction in hiring amid global economic slowdown and funding winter, is likely to witness a positive turnaround with 8-10% increase in hiring in 2024, suggests a new report rom talent solution company NLB Services.Overall, the hiring in the IT sector is expected to surge by 12-15% in CY 2024, especially due to the surge in global capabilities centres (GCCs) and global economy settling down comparatively, according to the report.",
  },
  {
    id: 24,
    category: "Technology",
    name: "Best AI tools of 2023: ChatGPT rules the roost, followed by Copilot, Midjourney, and more",
    image:"https://images.indianexpress.com/2023/12/Social-Media-1.jpg?w=640",
    text: "The year 2023 showed us the astounding pace at which Artificial Intelligence is advancing. It can be said that 2023 is a landmark year for AI innovation. From tools that gave wings to creativity, to those that could generate text, code, and art, to AI chatbots that can engross one in conversation on the most complex topics, this year, we saw how AI is fundamentally changing the way we engage with technology.With just a few days left in 2023, we dive into some of the most promising AI tools that emerged over the year. These tools offer a glimpse into the wide-ranging potential of AI to enhance human capabilities. From image generators such as DALL-E 3 and Stable Diffusion, which captured the imagination of the masses, to the highly sophisticated language models like OpenAI’s ChatGPT and Anthropic’s Claude that could converse with users with ease, in this article, we explore the diversity in inventive AI applications. ",
  },
  {
    id: 25,
    category: "Technology",
    name: "Humanoid robots in space: the next frontier",
    image:
      "https://images.indianexpress.com/2023/12/nasa-humanoid-robot.jpg?w=640",
    text: "Standing at 6 feet 2 inches (188 centimeters) tall and weighing 300 pounds (136 kilograms), NASA’s humanoid robot Valkyrie is an imposing figure.Valkyrie, named after a female figure in Norse mythology and being tested at the Johnson Space Center in Houston, Texas, is designed to operate in “degraded or damaged human-engineered environments,” like areas hit by natural disasters, according to NASA.A humanoid robot resembles a person, typically with a torso, head, two arms and two legs. Engineers believe with the right software, humanoid robots will eventually be able to function similarly to humans and use the same tools and equipment.NASA Dexterous Robotics Team Leader Shaun Azimi said humanoid robots in space could potentially handle risky tasks like cleaning solar panels or inspecting malfunctioning equipment outside the spacecraft so astronauts can prioritize exploration and discovery.“We’re not trying to replace human crews, we’re really just trying to take the dull, dirty and dangerous work off their plates to allow them to focus on those higher-level activities,” Azimi said."
  },
  {
    id: 26,
    category: "Technology",
    name: "Google, Amazon, other tech companies may soon pause hiring in India, job openings down by 90 per cent",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202312/google-amazon-meta-apple-273822970-16x9_0-original.jpg?size=948:533",
    text: "As Silicon Valley navigates through the tough terrain of economic slowdown and layoffs, the impact has significantly affected the Indian tech space as well. Tech giants, including Google, Amazon, Meta, Apple, and others, are reportedly slowing down their recruitment processes, with a possibility of pausing hiring in the future.According to a recent report by ET (Economic Times), these tech giants are hitting the brakes on hiring due to the global economic slowdown. Compared to 2022, the active job postings of these tech giants in India have plunged by 90 percent, as the report quotes data gathered from Xpheno, a staffing firm. Currently, companies have as few as 200 open positions in India, representing a 98 per cent decrease from their typical hiring levels.The hiring slowdown from major tech giants aligns with the challenging times the industry is currently navigating. The global economy is slowing down, and companies are grappling with the task of boosting revenues, implementing restructuring measures, and experiencing a slowdown in projects."
  },
  {
    id: 27,
    category: "Technology",
    name: "Almost 100 crore people in South Asia not using internet despite mobile data coverage: Report",
    image:
      "https://images.indianexpress.com/2023/10/solen-feyissa-UWVJaDvXW_c-unsplash.jpg?w=640",
    text: "Mobile internet is becoming more accessible every year, with the number of people using mobile broadband increasing to 460 crores by the end of 2022.According to “The State of Mobile Internet Connectivity Report 2023” by GSMA, the non-profit organisation that represents mobile network operators worldwide, 57 per cent (around 460 crores) of the worlds population are now using mobile internet. Still, the adoption rate has slowed down compared to 2021.The report also states that despite having connectivity, 38 per cent of the total population is living in areas where mobile internet is available but are not using the service.",
  },
  {
    id: 28,
    category: "Technology",
    name: "Fake iPhone 15 Pro charger melts, burns user’s finger",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202312/gadgets-281837277-16x9-original.jpg?size=948:533",
    text: "Apple iPhones 15 series comes with USB Type-C port but you should not plug it with just any other charger. In fact, a report by GizmoChina noted that an Apple Store in Foshan, Guangdong Province advised customers against using Android USB-C cables to charge the iPhone 15. The store staff cited concerns about overheating, due to the different pin arrangements of the two interfaces. They mentioned that using an Android cable could lead to overheating due to the slightly smaller gap between the single-row 9-pin and single-row 11-pin connectors compared to Apple's USB-C cable.",
  },
  {
    id: 29,
    category: "Technology",
    name: "Aditya L1 mission: Everything you need to know about the ISRO probe",
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2023-08/28/full/1693221199-2719.jpg?im=FeatureCrop,size=(826,465)",
    text: "Aditya L1 spacecraft is set to arrive at its cosmic objective, Lagrange Point 1 (L1), on January 6, 2024. Indian Space Research Organisation (ISRO) Chairman S Somanath stated,Aditya L1 will enter L1 point on January 6. That is what is expected...exact time will be announced at the appropriate time.Aditya-L1 is a satellite dedicated to the comprehensive study of the Sun. The Polar Satellite Launch Vehicle (PSLV-C57) effectively launched the Aditya-L1 spacecraft on September 2, 2023. It is the first space-based observatory-class Indian solar mission to launch a comprehensive study of the Sun.",
  },
  {
    id: 30,
    category: "Technology",
    name: "Beware! Top Oxford Professor Is Warning You Against Sharing Personal Info With AI Chatbots",
    image:
      "https://images.news18.com/ibnlive/uploads/2023/06/artificial-intelligence-16863839293x2.jpg?impolicy=website&width=510&height=356",
    text: "2023 has been the year of generative AI chatbots and the Large Language Models (LLMs) behind them. These models have been growing exponentially, and some AI experts are worried that this could be dangerous for humanity. They argue that things shouldn’t be progressing at this rate, especially without supervision. That said, experts have voiced their concerns about AI becoming sentient and having a mind of its own, but little has been said about how personal you can get with a chatbot.But now, Mike Wooldridge, an AI professor at Oxford University, has warned users of AI chatbots to be careful about what they share. Simply put, he said that you shouldn’t share personal and sensitive information with chatbots, like your political views or how angry you are at your boss at work. This could lead to bad consequences and is “extremely unwise.”As spotted by The Guardian, this is partly because he believes that these chatbots don’t offer a balanced response; instead, this technology “tells you what you want to hear.”",
  },
  // fitness section
  {
    id: 31,
    category: "Fitness",
    name: "Like to sleep on your stomach? Here are 3 posture mistakes you must avoid",
    image:
      "https://images.indianexpress.com/2023/12/posture-mistakes.jpg?w=640",
    text: "In the hustle and bustle of daily life, we often neglect one of the most fundamental aspects of our well-being — posture. The way we sit, stand, and move can have a profound impact on our health and overall quality of life. Unfortunately, many of us make common posture mistakes without even realising it.Recently, mindful movement practitioner and Pilates trainer Namrata Purohit shared three posture mistakes we must avoid at all costs. “They are harmful to one’s posture and can cause random aches and pains in the body,” she captioned the po",
  },
  
  {
    id: 32,
    category: "Fitness",
    name: "Shilpa Shetty Kundra challenges you to do biceps and wrists mobility stretch; should you?",
    image:
      "https://images.indianexpress.com/2023/10/shilpa-shetty-kundra_200_insta.jpg?w=640",
    text: "Our hands and arms are involved in various tasks these days from gripping a steering wheel to typing on a keyboard. These repetitive motions can create weakness and stiffness in your wrists, arms, and fingers.",
  },
  {
    id: 33,
    category: "Fitness",
    name: "Pre-workout snacks are important. These are some healthy ones you should try",
    image:
      "https://images.indianexpress.com/2023/09/fitness-man_1200_freepik.jpg?w=640",
    text: "You know that wild hunger that threatens to have you falling flat on your face while you're working out? That is precisely the reason why pre-workout snacks are important.enhancing performance and promoting overall well-being while you're exercising.Your body needs a readily available source of energy when you work out and healthy snacking provides this energy in the form of carbohydrates. For those who don't know, carbohydrates are the body's preferred fuel source during moderate to high-intensity activities, like a workout.",
  },
  {
    id: 34,
    category: "Fitness",
    name: "Watch: Chhavi Mittal gives a peek inside her gym bag",
    image:
      "https://images.indianexpress.com/2023/10/chhavi-mittal-1200.jpg?w=640",
    text: "Chhavi Mittal is, admittedly, a fitness freak who can't do without her regular sessions in the gym. Time and again, she has given fans a glimpse of her workouts. This time, however, Chhavi took everyone through her gym bag essentials.",
  },
  {
    id: 35,
    category: "Fitness",
    name: "Can these ’10 tips, tricks, truths’ help your fitness goals?",
    image:
      "https://images.indianexpress.com/2023/12/weight-loss_1600_freepik.jpg?w=640",
    text: "Can a set of clean habits help your fitness goals? Before we transition into the new year, it is time to learn the art of building clean habits, fitness experts urge. Fitness entrepreneur Chirag Barjatya’s transformation pictures on X, formerly Twitter, are proof.According to Barjatya, it is all about sticking to ’10 tips, tricks, truths’, he described in a thread on the microblogging site.“I did this last year. You can, too, if you implement these 10 Tips, Tricks, and Truths in your daily routine. A thread that you MUST read before 2024,” he shared alongside two pictures showcasing before and after transformation pictures of himself.According to him 1. Truth – There is no shortcut. The Internet is filled with people and content selling ‘shortcuts’ for virality, but trust me, there is no shortcut. The “hacks” you see on the internet will confuse you more. All you need is real work and dedication.2. Tip – Don’t cut down calories aggressively. Otherwise, it will become difficult for you to sustain. Eating just enough is essential for your daily routine and workout performance. Cutting down calories will affect your sex life as well",
  },
  {
    id: 36,
    category: "Fitness",
    name: "Jennifer Aniston reveals her 4-rule mantra to stay fit in her 50s",
    image:
      "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?cs=srgb&dl=pexels-pikx-by-panther-1547248.jpg&fm=jpg",
    text: "Jennifer Aniston, a Hollywood icon celebrated from her Friends era to her current role in the Morning Show, continues to captivate with her timeless beauty and enviable physique. Recently, she unveiled the four simple principles that underpin her fitness regimen in her 50s, offering insights that anyone can easily adopt.",
  },
  {
    id: 37,
    category: "Fitness",
    name: "Overcome overthinking with this easy yoga mudra",
    image:
      "https://images.indianexpress.com/2023/10/yoga-mudra.jpg?w=640",
    text: "Overthinking is a common struggle that many people face, and breaking free from this habit can be a daunting challenge. The constant rumination about past decisions, imagining worst-case scenarios, and second-guessing every choice can leave you mentally drained. Research has even shown that overthinking is closely associated with feelings of depression, anxiety, and post-traumatic stress disorder (PTSD).",
  },
  {
    id: 38,
    category: "Fitness",
    name: "Here's why you should eat in the Sukhasana pose",
    image:
      "https://images.indianexpress.com/2023/10/sukhasana.jpg?w=640",
    text: "Sitting on the floor and using your hands to enjoy a meal is a time-honored tradition in India, but have you ever wondered about the reasons behind it? Is there any wisdom in this practice?Recently, celebrity nutritionist Rujuta Diwekar shed light on a yoga posture that can enhance your eating experience. She recommends enjoying at least one meal while seated on the floor in Sukhasana, the cross-legged position.According to Diwekar, adopting the Sukhasana pose during meals can yield several benefits, including improved posture, enhanced focus on eating, and prevention of overeating.",
  },
  {
    id: 39,
    category: "Fitness",
    name: "Debina Bonnerjee struggles with building core strength; heres what can help",
    image:
      "https://images.indianexpress.com/2023/10/debina-bonnerjee_1200_insta.jpg?w=640",
    text: "Debina Bonnerjee has been taking small steps towards her fitness journey after her pregnancy. While she has been trying to stay consistent, as a mother, she feels it is “toughest” to get back core strength postpartum.Taking to her Instagram Stories, the actor and influencer expressed, “It is the toughest to get back core strength post pregnancy but you got to do it, Mama! This is showing love to yourself.”According to Dr Sushruta Mokadam, consultant obstetrician, Motherhood Hospital, Kharadi, Pune, rebuilding core strength after childbirth varies from person to person, depending on factors like the type of delivery and individual fitness levels. It typically takes several weeks to several months.Previously too, the mother of two spoke about how it takes a lot more than willingness to restart ones fitness journey after motherhood.",
  },
  {
    id: 40,
    category: "Fitness",
    name: "When Zerodhas CEO Nithin Kamath shared the importance of strength training: Integral to increasing health span",
    image:
      "https://images.indianexpress.com/2023/05/nithin-kamath.jpg?w=640",
    text: "Some time ago, Zerodhs co-founder Nithin Kamath had shared data on the gym membership adoption rateclaiming that only 0.2 per cent of Indias population (50 lakh people) were engaged in gym activities. Sharing the data from the World of Statistics on the percentage of the population of different countries that go to the gym, Kamath had written, “Most Indians think that you dont need strength training as you age. The truth is strength training becomes even more critical as we get older, especially after our 40s. The stronger we are, the more active we can be when we are older.”The data had revealed that Norway and Sweden led the list, with 22 per cent of their population going to the gym. India, on the other hand, was at the bottom of the list in terms of gym-goers.“Strength training is integral to increasing health span and we need more to focus on this,” he had said, adding that research consistently demonstrates how exercise surpasses any other interventions in terms of delaying death and preventing cognitive and physical decline.",
  },
  
  {
    id: 41,
    category: "Food",
    name: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENob2NvbGF0ZSUyMENha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    text: "Chocolate cake is made with chocolate. It can also include other ingredients.[1] These include fudge, vanilla creme, and other sweeteners. The history of chocolate cake goes back to the 17th century, when cocoa powder from the Americas was added to traditional cake recipes.[2] In 1828, Coenraad van Houten of the Netherlands developed a mechanical extraction method for extracting the fat from cacao liquor resulting in cacao butter and the partly defatted cacao, a compacted mass of solids that could be sold as it was rock cacao or ground into powder",
},
{
    id: 42,
    category: "Food",
    name: "Spices",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENoaWNrZW4lMjBDdXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    text: "Indian cuisine has a large amount of regional variation, with many variations on the basic chicken curry recipe. Indian chicken curry typically starts with whole spices, heated in oil. A sauce is then made with onions, ginger, garlic, and tomatoes, and powdered spices. Bone-in pieces of chicken are then added to the sauce, and simmered until cooked through.[1] In south India, coconut and curry leaves are also common ingredients.[2] Chicken curry is usually garnished with coriander leaves, and served with rice or roti",
},
{
    id: 43,
    category: "Food",
    name: "Fruit Salad",
    image: "https://images.unsplash.com/photo-1590590470233-195e7fec2965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEZydWl0JTIwU2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    text: "Fruit salad is a dish consisting of various kinds of fruit, sometimes served in a liquid, either their juices or a syrup. In different forms, fruit salad can be served as an appetizer or a side as a salad. When served as an appetizer, a fruit salad is sometimes known as a fruit cocktail (often connoting a canned product), or fruit cup (when served in a small container).",
},
{
    id: 44,
    category: "Food",
    name: "Chowmin",
    image: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2023/Archanas_Kitchen_Millet_Hakka_Noodles_Chowmein_Recipe-16.jpg",
    text: "the term chow mein refers to fried noodles. More specifically, there are two main types of chow mein dishes: Steamed chow mein: In steamed chow mein, the noodles are initially flash-fried, then stir-fried while being tossed with additional ingredients like meat or vegetables and coated in a light sauce.",
},
{
    id: 45,
    category: "Food",
    name: "Cake",
    image: "https://pic.warmoven.in/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/234187ae/strawberry-cake.jpg",
    text: "  It is a derivation of 'kaka', an Old Norse word. Medieval European bakers often made fruitcakes and gingerbread.",
},
{
    id: 46,
    category: "Food",
    name: "Biryani",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg",
    text: "Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat In some .",
},
{
    id: 47,
    category: "Food",
    name: "rasgulla",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/rasgulla-recipe-1-500x500.jpg",
    text: "Rasgulla is a syrupy dessert popular in the eastern part of South Asia. It is made from ball-shaped dumplings of chhena dough, cooked in light sugar syrup made of sugar. This is done until the syrup permeates the dumplings.",
},
{
    id: 48,
    category: "Food",
    name: "Jalebi",
    image: "https://www.boldsky.com/img/2021/01/jalebi-recipe-1610019725.jpg",
    text: "Jalebi is a popular sweet snack in South Asia, Middle East, Africa, and Mauritius. It goes by many names, including jilapi, zelepi, jilebi, jilipi, zulbia, jerry, mushabak, z’labia, zengoula or zalabia",
},
{
    id: 49,
    category: "Food",
    name: "Samosa",
    image: "https://c.ndtvimg.com/2023-03/0m65kep_samosa_625x300_10_March_23.jpg",
    text: "Samosas are a popular Indian snack, filled with spiced potatoes, peas, and sometimes meat. They are deep-fried to perfection."
},
{
    id: 50,
    category: "Food",
    name: "Sushi",
    image: "https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg",
    text: "Sushi is a Japanese dish consisting of vinegared rice, raw fish, and various ingredients. It is a delicacy enjoyed worldwide."
},
]);

  return(
    <>
     <Store.Provider value={[data, setData]}>
        {props.children}
     </Store.Provider>
    </>
  )
}

export default Storedata;
