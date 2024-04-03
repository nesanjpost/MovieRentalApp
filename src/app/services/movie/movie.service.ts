import { Injectable } from '@angular/core';
import { Movies } from 'src/app/shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovieById(id:number): Movies{
    return this.getAll().find(movie => movie.id == id)!;
  }


  getAll():Movies[]{
    return [
     {
      id: 1,
      price:20,
      name:"Doctor Strange in the Multiverse of Madness (2022)",
      favorite: false,
      star: 4.5,
      imageUrl: '/assets/strange.jpg',
      movieDuration: '2h 06min',
      origins: ["marvel Studios"],
      tags: ['Action', ' Adventure'],
      description: 'Doctor Strange in the Multiverse of Madness is a 2022 American superhero film based on Marvel Comics featuring the character Doctor Strange.'
     },
     {
      id: 2,
      price:16,
      name:"Thor: Love and Thunder (2022)",
      favorite: false,
      star: 4.2,
      imageUrl: '/assets/thor.png',
      movieDuration: '2h 00',
      origins: ["marvel Studios"],
      tags: ['Action', ' Adventure'],
      description: 'Thor: Love and Thunder is a 2022 American superhero film based on the Marvel Comics character Thor, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.'
     },
     {
      id: 3,
      price:18,
      name:"Vikram (2022)",
      favorite: false,
      star: 4.6,
      imageUrl: '/assets/vikram.jpg',
      movieDuration: '2h 53min',
      origins: ["Raaj kamal Films International"],
      tags: ['Action', ' Mystery'],
      description: 'Vikram is a 2022 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj and produced by Raaj Kamal Films International.'
     },
     {
      id: 4,
      price:10,
      name:"Dhaakad (2022)",
      favorite: false,
      star: 2.5,
      imageUrl: '/assets/image-4.jpg',
      movieDuration: '2h 15min',
      origins: ["marvel Studios"],
      tags: ['Action', ' Thriller'],
      description: 'Dhaakad is a 2022 Indian Hindi-language action film directed by Razneesh Ghai and produced by Soham Rockstar Entertainment, Sohel Maklai Productions and Asylum films. The film stars Kangana Ranaut alongside Arjun Rampal and Divya Dutta with Saswata Chatterjee in a supporting role.'
     },
     {
      id: 5,
      price:20,
      name:"Jurassic World Dominion (2022)",
      favorite: false,
      star: 4.6,
      imageUrl: '/assets/Screenshot_3.png',
      movieDuration: '2h 27min',
      origins: ["Universal Pictures"],
      tags: ['Action', ' Sci-fi'],
      description: 'Jurassic World Dominion is a 2022 American science fiction action film directed by Colin Trevorrow, written by Trevorrow and Emily Carmichael and based on a story by Trevorrow and Derek Connolly. It is a sequel to Jurassic World: Fallen Kingdom (2018), and the sixth installment in the Jurassic Park franchise, and the third film in the Jurassic World franchise, and the conclusion to the storyline started in the original Jurassic Park trilogy.'
     },
     {
      id: 6,
      price:12,
      name:"Interceptor (2022)",
      favorite: false,
      star: 3.2,
      imageUrl: '/assets/image-5.jpg',
      movieDuration: '1h 32min',
      origins: ["Ambience Entertainment"],
      tags: ['Action', ' Adventure'],
      description: 'Interceptor is a 2022 action drama film directed by Matthew Reilly from a screenplay that he co-wrote with Stuart Beattie. The film stars Elsa Pataky and Luke Bracey. It is about terrorists who want to launch a nuclear attack on the United States with stolen missiles'
     },
     {
      id: 7,
      price:17,
      name:"Pushpa: The Rise (2021)",
      favorite: false,
      star: 4.5,
      imageUrl: '/assets/pushpa.jpg',
      movieDuration: '2h 59min',
      origins: ["Allu Arjun Production"],
      tags: ['Action', ' Drama'],
      description: 'Pushpa: The Rise – Part 01 is a 2021 Indian Telugu-language action drama film written and directed by Sukumar. Produced by Mythri Movie Makers in association with Muttamsetty Media, it stars Allu Arjun as the titular character alongside Fahadh Faasil (his Telugu debut), and Rashmika Mandanna while Jagadeesh Prathap Bandari, Sunil, Rao Ramesh, Dhananjaya, Anasuya Bharadwaj, Ajay and Ajay Ghosh play supporting roles. '
     },
     {
      id: 8,
      price:15,
      name:"Runway 34 (2022)",
      favorite: false,
      star: 4.1,
      imageUrl: '/assets/image-7.jpg',
      movieDuration: '2h 21min',
      origins: ["marvel Studios"],
      tags: ['Drama', ' Action'],
      description: 'Runway 34 is a 2022 Indian Hindi-language thriller film directed by Ajay Devgn and produced by himself under his banner Ajay Devgn FFilms, the film stars Ajay Devgn, Amitabh Bachchan and Rakul Preet Singh with Boman Irani, Angira Dhar and Aakanksha Singh playing pivotal roles.'
     },
     {
      id: 9,
      price:21,
      name:"Spider-Man: No Way Home (2021)",
      favorite: false,
      star: 4.6,
      imageUrl: '/assets/image-8.jpg',
      movieDuration: '2h 28min',
      origins: ["Columbia Pictures"],
      tags: ['Action', ' Adventure'],
      description: 'Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing.'
     },
     {
      id: 10,
      price:15,
      name:"Bhool Bhulaiyaa 2 (2022)",
      favorite: false,
      star: 4.0,
      imageUrl: '/assets/Screenshot_4.png',
      movieDuration: '2h 25min',
      origins: ["T-Series Films"],
      tags: ['Comedy Horror', ' Mystery'],
      description: 'Bhool Bhulaiyaa 2 is a 2022 Indian Hindi-language comedy horror film directed by Anees Bazmee, written by Aakash Kaushik and Farhad Samji, and produced by Bhushan Kumar and Krishan Kumar under the banner T-Series Films and Murad Khetani and Anjum Khetani under the banner Cine1 Studios.'
     },
    ]
  }
}




// getAll2():Movies2[]{
//   return[
//     {
//         "id": "/title/tt8041270/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt8041270/",
//           "image": {
//             "height": 1736,
//             "id": "/title/tt8041270/images/rm1074729217",
//             "url": "https://m.media-amazon.com/images/M/MV5BOTBjMjA4NmYtN2RjMi00YWZlLTliYTktOTIwMmNkYjYxYmE1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
//             "width": 1204
//           },
//           "runningTimeInMinutes": 147,
//           "title": "Jurassic World Dominion",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "PG-13",
//               "certificateNumber": 53509,
//               "ratingReason": "Rated PG-13 for intense sequences of action, some violence and language",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 6.0,
//           "ratingCount": 57616,
//           "topRank": 4582
//         },
//         "genres": [
//           "Action",
//           "Adventure",
//           "Sci-Fi",
//           "Thriller"
//         ],
//         "releaseDate": "2022-06-10",
//         "plotOutline": {
//           "id": "/title/tt8041270/plot/po3754576",
//           "text": "Four years after the destruction of Isla Nublar, dinosaurs now live--and hunt--alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history's most fearsome creatures in a new Era."
//         },
//         "plotSummary": {
//           "author": "Rcs0411@yahoo.com",
//           "id": "/title/tt8041270/plot/ps6676057",
//           "text": "After surviving the destruction of Isla Nubar and dealing with the conspiracy at the Lockwood estate, Owen Grady and Claire Deering took Lockwood's granddaughter Maisie with them upon learning she's actually the clone of Lockwood's daughter. They've been living under the radar to protect Maisie but she feels like a prisoner.one day Blue the raptor Grady trained at Isla Nuba and bonded with shows up and reveals that she bored an offspring which is impossible. Men are watching them and they are told to get Maisie and Blue's child which they do. Owen and Claire set out to find them. They ask some friends to help them and they eventually learn that it was Lewis Dodgson, owner of Biosynwho ordered their abduction.at the same time the country's crops are being attacked by some unusual locusts, Ellie Satler investigates and suspects the locusts were created by Dodgson who wants the world to rely o his crop that the locusts have not touched. So she asks Alan Grant her former partners help her. She was contacted by Ian Malcolm who works for Dodgson who invites them to Dodgson dinosaur sanctuary which is also his lab. They set out to prove Dodgson scheme but in the process they meet Maisie who bonded with Blue's child whom she named Beta.they try to escape but Dodgson tries to stop them. Claire Owen head to the sanctuary to save Maisie and Blue."
//         }
//       },
     
//       {
//         "id": "/title/tt1745960/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt1745960/",
//           "image": {
//             "height": 1440,
//             "id": "/title/tt1745960/images/rm1004868097",
//             "url": "https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
//             "width": 988
//           },
//           "runningTimeInMinutes": 130,
//           "title": "Top Gun: Maverick",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "PG-13",
//               "certificateNumber": 52319,
//               "ratingReason": "Rated PG-13 for sequences of intense action, and some strong language",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 8.6,
//           "ratingCount": 189850,
//           "topRank": 43
//         },
//         "genres": [
//           "Action",
//           "Drama"
//         ],
//         "releaseDate": "2022-05-27",
//         "plotOutline": {
//           "id": "/title/tt1745960/plot/po1921517",
//           "text": "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground"
//         },
//         "plotSummary": {
//           "author": "Wrathzo",
//           "id": "/title/tt1745960/plot/ps6651049",
//           "text": "Set 30 years after its predecessor, it follows Maverick's return to the United States Navy Strike Fighter Tactics Instructor program (also known as U.S. Navy-Fighter Weapons School - \"TOPGUN\"), where he must confront his past as he trains a group of younger pilots, among them the son of Maverick's deceased best friend Lieutenant Nick \"Goose\" Bradshaw, USN."
//         }
//       },
     
//       {
//         "id": "/title/tt0092099/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt0092099/",
//           "image": {
//             "height": 3000,
//             "id": "/title/tt0092099/images/rm885920769",
//             "url": "https://m.media-amazon.com/images/M/MV5BY2NlZjQ3ZTAtMzcxZC00MGZhLWFhNTQtN2M4NDBjYzIyOWNlXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
//             "width": 2000
//           },
//           "runningTimeInMinutes": 110,
//           "title": "Top Gun",
//           "titleType": "movie",
//           "year": 1986
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "PG",
//               "certificateNumber": 28069,
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 6.9,
//           "ratingCount": 380435,
//           "topRank": 2592
//         },
//         "genres": [
//           "Action",
//           "Drama"
//         ],
//         "releaseDate": "1986-05-16",
//         "plotOutline": {
//           "id": "/title/tt0092099/plot/po1611628",
//           "text": "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom."
//         },
//         "plotSummary": {
//           "author": "Nick Riganas",
//           "id": "/title/tt0092099/plot/ps3608595",
//           "text": "Code-named Maverick, Pete Mitchell, an impetuous, daredevil Navy-pilot ace, is accepted into Top Gun, Miramar's elite Fighter School. But there, the impulsive young pilot will have to compete with the best of the best, including Iceman, a brilliant and highly competitive fellow student. Now, Mitchell must give his all; however, his father's mysterious and untimely demise still haunts him. Can Maverick prove his worth to Charlie, the flying school's no-nonsense astrophysics instructor? Will he be able to suppress his wild nature to win the prestigious Top Gun Trophy?"
//         }
//       },
     
//       {
//         "id": "/title/tt10298810/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt10298810/",
//           "image": {
//             "height": 6000,
//             "id": "/title/tt10298810/images/rm2340822017",
//             "url": "https://m.media-amazon.com/images/M/MV5BYTg2Zjk0ZTctM2ZmMi00MDRmLWJjOGYtNWM0YjBmZTBjMjRkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
//             "width": 4050
//           },
//           "runningTimeInMinutes": 100,
//           "title": "Lightyear",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "PG",
//               "certificateNumber": 53706,
//               "ratingReason": "Rated PG for action/peril",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 5.2,
//           "ratingCount": 33128,
//           "topRank": 4923
//         },
//         "genres": [
//           "Animation",
//           "Action",
//           "Adventure",
//           "Drama",
//           "Family",
//           "Sci-Fi"
//         ],
//         "releaseDate": "2022-06-17",
//         "plotOutline": {
//           "id": "/title/tt10298810/plot/po5461836",
//           "text": "While spending years attempting to return home, marooned Space Ranger Buzz Lightyear encounters an army of ruthless robots commanded by Zurg who are attempting to steal his fuel source."
//         }
//       },
     
//       {
//         "id": "/title/tt9783600/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt9783600/",
//           "image": {
//             "height": 2000,
//             "id": "/title/tt9783600/images/rm4200076033",
//             "url": "https://m.media-amazon.com/images/M/MV5BNDVkZTc4OTktNTAyOC00MzQxLThiZjMtM2M3MTlmYzFjY2FkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
//             "width": 1350
//           },
//           "runningTimeInMinutes": 106,
//           "title": "Spiderhead",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "attributes": [
//                 "cert#53570"
//               ],
//               "certificate": "R",
//               "ratingReason": "Rated R for violent content, language and sexual content.",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 5.4,
//           "ratingCount": 24513
//         },
//         "genres": [
//           "Action",
//           "Crime",
//           "Drama",
//           "Sci-Fi",
//           "Thriller"
//         ],
//         "releaseDate": "2022-06-17",
//         "plotOutline": {
//           "id": "/title/tt9783600/plot/po5509568",
//           "text": "In the near future, convicts are offered the chance to volunteer as medical subjects to shorten their sentence. One such subject for a new drug capable of generating feelings of love begins questioning the reality of his emotions."
//         },
//         "plotSummary": {
//           "id": "/title/tt9783600/plot/ps4367832",
//           "text": "This is set in the near future, when convicts are offered the chance to volunteer as medical subjects in hopes of shortening their sentences. When one prisoner finds himself the test patient for a new pharmaceutical capable of generating feelings of love, he begins questioning the reality of his emotions and sets out to discover the truth."
//         }
//       },
     
//       {
//         "id": "/title/tt6710474/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt6710474/",
//           "image": {
//             "height": 12599,
//             "id": "/title/tt6710474/images/rm316021249",
//             "url": "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
//             "width": 8699
//           },
//           "runningTimeInMinutes": 139,
//           "title": "Everything Everywhere All at Once",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "R",
//               "certificateNumber": 53253,
//               "ratingReason": "Rated R for some violence, sexual material and language",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 8.3,
//           "ratingCount": 125592,
//           "topRank": 136
//         },
//         "genres": [
//           "Action",
//           "Adventure",
//           "Comedy",
//           "Fantasy",
//           "Sci-Fi"
//         ],
//         "releaseDate": "2022-03-25",
//         "plotOutline": {
//           "id": "/title/tt6710474/plot/po3183017",
//           "text": "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led."
//         },
//         "plotSummary": {
//           "author": "Nick Riganas",
//           "id": "/title/tt6710474/plot/ps6588791",
//           "text": "With her laundromat teetering on the brink of failure and her marriage to wimpy husband Waymond on the rocks, overworked Evelyn Wang struggles to cope with everything, including a tattered relationship with her judgmental father Gong Gong and Joy, her daughter. And, as if facing a gloomy midlife crisis wasn't enough, Evelyn must brace herself up for an unpleasant meeting with an impersonal bureaucrat: Deirdre, the shabbily dressed IRS auditor. However, as the stern agent loses patience, an inexplicable multiverse rift becomes an eye-opening exploration of parallel realities. Will Evelyn jump down the rabbit hole? But how many stars are there in the universe? Can weary Evelyn fathom the irrepressible force of possibilities, tap into newfound powers, and prevent an evil entity from destroying the thin, countless layers of the unseen world?"
//         }
//       },
     
//       {
//         "id": "/title/tt14174940/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt14174940/",
//           "image": {
//             "height": 2222,
//             "id": "/title/tt14174940/images/rm3821146625",
//             "url": "https://m.media-amazon.com/images/M/MV5BZGNjYjQ3NjgtZWM0NS00MTY5LTlkZWMtODZlNzhkNTU3MzZiXkEyXkFqcGdeQXVyMjM2OTI3Mzk@._V1_.jpg",
//             "width": 1500
//           },
//           "runningTimeInMinutes": 99,
//           "title": "Interceptor",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "attributes": [
//                 "self-applied"
//               ],
//               "certificate": "TV-MA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 4.4,
//           "ratingCount": 17080
//         },
//         "genres": [
//           "Action",
//           "Adventure",
//           "Drama",
//           "Thriller"
//         ],
//         "releaseDate": "2022-06-03",
//         "plotOutline": {
//           "id": "/title/tt14174940/plot/po5753310",
//           "text": "One Army captain must use her years of tactical training and military expertise when a simultaneous coordinated attack threatens the remote missile interceptor station she is in command of."
//         },
//         "plotSummary": {
//           "id": "/title/tt14174940/plot/ps6527851",
//           "text": "The tough and reality-bruised Captain JJ Collins (Elsa Pataky) finds herself in charge of a lone nuclear missile interceptor base in the middle of the Pacific Ocean after she is wrongfully drummed out of her dream job at the Pentagon. When a simultaneous coordinated attack then threatens the base itself, Collins comes face-to-face with the charismatic yet crooked Alexander Kessel (Luke Bracey), a former US military intelligence officer intent on carrying out an unthinkable plan. With only minutes on the clock, Collins must utilize her years of tactical training and military expertise to determine who she can trust and stop Kessel and his covert mercenaries from completing their twisted and terrible mission."
//         }
//       },
     
//       {
//         "id": "/title/tt6443346/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt6443346/",
//           "image": {
//             "height": 4096,
//             "id": "/title/tt6443346/images/rm2757957121",
//             "url": "https://m.media-amazon.com/images/M/MV5BN2ZmYTlhNmMtODQ0OS00YWNiLWI1MmMtNzkwYWMzOGM4YWQxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
//             "width": 2764
//           },
//           "title": "Black Adam",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "ratings": {
//           "canRate": false
//         },
//         "genres": [
//           "Action",
//           "Fantasy",
//           "Sci-Fi"
//         ],
//         "releaseDate": "2022-10-21",
//         "plotOutline": {
//           "id": "/title/tt6443346/plot/po6451275",
//           "text": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods-and imprisoned just as quickly-Black Adam (Johnson) is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
//         }
//       },
     
//       {
//         "id": "/title/tt11138512/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt11138512/",
//           "image": {
//             "height": 2048,
//             "id": "/title/tt11138512/images/rm2924419329",
//             "url": "https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg",
//             "width": 1382
//           },
//           "runningTimeInMinutes": 137,
//           "title": "The Northman",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "R",
//               "certificateNumber": 53238,
//               "ratingReason": "Rated R for strong bloody violence, some sexual content and nudity",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 7.2,
//           "ratingCount": 128955,
//           "topRank": 1709
//         },
//         "genres": [
//           "Action",
//           "Adventure",
//           "Drama",
//           "Fantasy",
//           "History",
//           "Thriller"
//         ],
//         "releaseDate": "2022-04-22",
//         "plotOutline": {
//           "id": "/title/tt11138512/plot/po4806695",
//           "text": "From visionary director Robert Eggers comes The Northman, an action-filled epic that follows a young Viking prince on his quest to avenge his father's murder."
//         },
//         "plotSummary": {
//           "author": "Nick Riganas",
//           "id": "/title/tt11138512/plot/ps6603542",
//           "text": "The Viking Age. With a mind aflame with hate and revenge, Prince Amleth, the wronged son of King Aurvandill War-Raven, heads to cold, windswept Iceland to retrieve what was stolen from him: a father, a mother, and a kingdom. And like a war dog picking up the enemy's scent, brutal Amleth embarks on a murderous quest to find the hateful adversary, whose life is forever woven together with his by the threads of fate. Now, in the name of Valhalla, no one can stop the Northman, not even God."
//         }
//       },
     
//       {
//         "id": "/title/tt10648342/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt10648342/",
//           "image": {
//             "height": 2500,
//             "id": "/title/tt10648342/images/rm3968995329",
//             "url": "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
//             "width": 1688
//           },
//           "runningTimeInMinutes": 119,
//           "title": "Thor: Love and Thunder",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "attributes": [
//                 "cert#53840"
//               ],
//               "certificate": "PG-13",
//               "ratingReason": "Rated PG-13 for intense sequences of sci-fi violence and action, language, some suggestive material and partial nudity.",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 8.1,
//           "ratingCount": 1277
//         },
//         "genres": [
//           "Action",
//           "Adventure",
//           "Comedy",
//           "Fantasy",
//           "Music",
//           "Romance",
//           "Sci-Fi"
//         ],
//         "releaseDate": "2022-07-08",
//         "plotOutline": {
//           "id": "/title/tt10648342/plot/po6533477",
//           "text": "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct."
//         },
//         "plotSummary": {
//           "id": "/title/tt10648342/plot/ps6533584",
//           "text": "Thor's retirement is interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods. To combat the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster, who - to Thor's surprise - inexplicably wields his magical hammer, Mjolnir, as the Mighty Thor. Together, they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher's vengeance and stop him before it's too late."
//         }
//       },
     
     
//       {
//         "id": "/title/tt15090124/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt15090124/",
//           "image": {
//             "height": 1280,
//             "id": "/title/tt15090124/images/rm3448175617",
//             "url": "https://m.media-amazon.com/images/M/MV5BZjljZGI5ZTAtMmIwMC00N2ZiLWEzNmYtMDQ1MzFiNDI4ZDllXkEyXkFqcGdeQXVyMTM2MzgyOTU@._V1_.jpg",
//             "width": 866
//           },
//           "runningTimeInMinutes": 83,
//           "title": "Mad God",
//           "titleType": "movie",
//           "year": 2021
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 6.8,
//           "ratingCount": 3330
//         },
//         "genres": [
//           "Animation",
//           "Fantasy",
//           "Horror",
//           "Sci-Fi"
//         ],
//         "releaseDate": "2022-06-16",
//         "plotOutline": {
//           "id": "/title/tt15090124/plot/po6138583",
//           "text": "A corroded diving bell descends amidst a ruined city and the Assassin emerges from it to explore a labyrinth of bizarre landscapes inhabited by freakish denizens."
//         }
//       },
     
//       {
//         "id": "/title/tt3513500/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt3513500/",
//           "image": {
//             "height": 4088,
//             "id": "/title/tt3513500/images/rm3687062785",
//             "url": "https://m.media-amazon.com/images/M/MV5BZjBlMjIxN2ItNTMyNi00NDk5LWFhMzEtNzdiODE0Y2M4MWI2XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
//             "width": 2806
//           },
//           "runningTimeInMinutes": 97,
//           "title": "Chip 'n Dale: Rescue Rangers",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "PG",
//               "certificateNumber": 53595,
//               "ratingReason": "Rated PG for mild action and rude/suggestive humor",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 7.0,
//           "ratingCount": 29852,
//           "topRank": 2327
//         },
//         "genres": [
//           "Animation",
//           "Adventure",
//           "Comedy",
//           "Family",
//           "Mystery"
//         ],
//         "releaseDate": "2022-05-20",
//         "plotOutline": {
//           "id": "/title/tt3513500/plot/po1927023",
//           "text": "Thirty years after their popular television show ended, chipmunks Chip and Dale live very different lives. When a cast member from the original series mysteriously disappears, the pair must reunite to save their friend."
//         }
//       },
     
//       {
//         "id": "/title/tt8115900/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt8115900/",
//           "image": {
//             "height": 5000,
//             "id": "/title/tt8115900/images/rm241363969",
//             "url": "https://m.media-amazon.com/images/M/MV5BMDhkYmU0MzctMWEzNy00ODg1LWI3ZjAtMGZlZjkzNWVmMzVjXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
//             "width": 3158
//           },
//           "runningTimeInMinutes": 100,
//           "title": "The Bad Guys",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "PG",
//               "certificateNumber": 53555,
//               "ratingReason": "Rated PG for action and rude humor",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 6.9,
//           "ratingCount": 22631
//         },
//         "genres": [
//           "Animation",
//           "Adventure",
//           "Comedy",
//           "Crime",
//           "Family"
//         ],
//         "releaseDate": "2022-04-22",
//         "plotOutline": {
//           "id": "/title/tt8115900/plot/po6346935",
//           "text": "Several reformed yet misunderstood criminal animals attempt to become good, with some disastrous results along the way."
//         },
//         "plotSummary": {
//           "id": "/title/tt8115900/plot/ps6463740",
//           "text": "After a lifetime of legendary heists, notorious criminals Mr. Wolf, Mr. Snake, Mr. Piranha, Mr. Shark and Ms. Tarantula are finally caught. To avoid a prison sentence, the animal outlaws must pull off their most challenging con yet -- becoming model citizens. Under the tutelage of their mentor, Professor Marmalade, the dubious gang sets out to fool the world that they're turning good."
//         }
//       },
     
//       {
//         "id": "/title/tt5113044/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt5113044/",
//           "image": {
//             "height": 1200,
//             "id": "/title/tt5113044/images/rm2384730369",
//             "url": "https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_.jpg",
//             "width": 758
//           },
//           "runningTimeInMinutes": 87,
//           "title": "Minions: The Rise of Gru",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "PG",
//               "certificateNumber": 52775,
//               "ratingReason": "Rated PG for some action/violence and rude humor",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 7.3,
//           "ratingCount": 656
//         },
//         "genres": [
//           "Animation",
//           "Adventure",
//           "Comedy",
//           "Crime",
//           "Family",
//           "Sci-Fi"
//         ],
//         "releaseDate": "2022-07-01",
//         "plotOutline": {
//           "id": "/title/tt5113044/plot/po4352242",
//           "text": "The untold story of one twelve-year-old's dream to become the world's greatest supervillain."
//         },
//         "plotSummary": {
//           "author": "Universal Pictures",
//           "id": "/title/tt5113044/plot/ps4972531",
//           "text": "In the heart of the 1970s, amidst a flurry of feathered hair and flared jeans, Gru (Steve Carell) is growing up in the suburbs. A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them. Luckily, he gets some mayhem-making back-up from his loyal followers, the Minions. Together, Kevin, Stuart, Bob, and Otto - a new Minion sporting braces and a desperate need to please - deploy their skills as they and Gru build their first lair, experiment with their first weapons, and pull off their first missions. When the Vicious 6 oust their leader, legendary fighter Wild Knuckles (Alan Arkin), Gru interviews to become their newest member. It doesn't go well (to say the least), and only gets worse after Gru outsmarts them and suddenly finds himself the mortal enemy of the apex of evil. On the run, Gru will turn to an unlikely source for guidance, Wild Knuckles, and discover that even bad guys need a little help from their friends."
//         }
//       },
     
//       {
//         "id": "/title/tt12532368/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt12532368/",
//           "image": {
//             "height": 1925,
//             "id": "/title/tt12532368/images/rm4013878785",
//             "url": "https://m.media-amazon.com/images/M/MV5BOTE1MmZiZDQtYjA3Yy00OWQwLWIzY2ItMDVkNTIxNzUxNTljXkEyXkFqcGdeQXVyMTEwNTM4MDcx._V1_.jpg",
//             "width": 1417
//           },
//           "runningTimeInMinutes": 91,
//           "title": "Chickenhare and the Hamster of Darkness",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 6.3,
//           "ratingCount": 900
//         },
//         "genres": [
//           "Animation",
//           "Adventure",
//           "Comedy",
//           "Family"
//         ],
//         "releaseDate": "2022-06-10",
//         "plotOutline": {
//           "id": "/title/tt12532368/plot/po5547483",
//           "text": "Follows a young hero born half chicken and half hare. Eager to fit in and feel loved in spite of his differences, he is obsessed by adventuring in spite of his clumsiness."
//         },
//         "plotSummary": {
//           "id": "/title/tt12532368/plot/ps6236918",
//           "text": "Set in a lush fantasy world, the film follows the adventures of Chickenhare, a young hero born half chicken and half hare, who was adopted by King Peter, a famous hare adventurer. Eager to fit in and feel loved in spite of his differences, Chickenhare is obsessed with adventuring - no matter how clumsy he is. When the Kingdom's greatest villain - his own uncle - escapes from jail and threatens to overthrow his father, Chickenhare embarks on an epic and initiatory quest along with Abe, a sarcastic turtle, and Meg, a martial arts expert skunk, to stop him."
//         }
//       },
     
//       {
//         "id": "/title/tt2953050/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt2953050/",
//           "image": {
//             "height": 3000,
//             "id": "/title/tt2953050/images/rm2541025281",
//             "url": "https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
//             "width": 2025
//           },
//           "runningTimeInMinutes": 102,
//           "title": "Encanto",
//           "titleType": "movie",
//           "year": 2021
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "PG",
//               "certificateNumber": 53378,
//               "ratingReason": "Rated PG for some thematic elements and mild peril.",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 7.2,
//           "ratingCount": 203123,
//           "topRank": 1912
//         },
//         "genres": [
//           "Animation",
//           "Comedy",
//           "Family",
//           "Fantasy",
//           "Musical"
//         ],
//         "releaseDate": "2021-11-24",
//         "plotOutline": {
//           "id": "/title/tt2953050/plot/po2868458",
//           "text": "A Colombian teenage girl has to face the frustration of being the only member of her family without magical powers."
//         },
//         "plotSummary": {
//           "author": "Walt Disney Animation Studios",
//           "id": "/title/tt2953050/plot/ps6262346",
//           "text": "Encanto tells the tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal-every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope."
//         }
//       },
           
//       {
//         "id": "/title/tt1655389/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt1655389/",
//           "image": {
//             "height": 1200,
//             "id": "/title/tt1655389/images/rm1370232321",
//             "url": "https://m.media-amazon.com/images/M/MV5BZTI1MWQwY2MtYjViMi00MWUyLTlhMjQtN2M4Y2E5Nzc2MTcwXkEyXkFqcGdeQXVyMTMzNTE1MDky._V1_.jpg",
//             "width": 810
//           },
//           "title": "Blonde",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "attributes": [
//                 "cert#53199"
//               ],
//               "certificate": "NC-17",
//               "ratingReason": "Rated NC-17 for some sexual content",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": false
//         },
//         "genres": [
//           "Biography",
//           "Drama",
//           "Mystery",
//           "Romance"
//         ],
//         "releaseDate": "2022-09-23",
//         "plotOutline": {
//           "id": "/title/tt1655389/plot/po2018025",
//           "text": "A fictionalized chronicle of the inner life of Marilyn Monroe."
//         },
//         "plotSummary": {
//           "author": "Netflix",
//           "id": "/title/tt1655389/plot/ps6682681",
//           "text": "From director Andrew Dominik, and based on the bestselling novel by Joyce Carol Oates, 'Blonde' boldly reimagines the life of one of Hollywood's most enduring icons, Marilyn Monroe. From her volatile childhood as Norma Jeane, through her rise to stardom and romantic entanglements, 'Blonde' blurs the lines of fact and fiction to explore the widening split between her public and private selves."
//         }
//       },
     
//       {
//         "id": "/title/tt3704428/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt3704428/",
//           "image": {
//             "height": 2048,
//             "id": "/title/tt3704428/images/rm3700561665",
//             "url": "https://m.media-amazon.com/images/M/MV5BMmUzMTRjMTItZDJlYi00YzAwLTk0NTAtMDJkMWQ1NzVkYjlkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
//             "width": 1638
//           },
//           "runningTimeInMinutes": 159,
//           "title": "Elvis",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "PG-13",
//               "certificateNumber": 53746,
//               "ratingReason": "Rated PG-13 for substance abuse, strong language, suggestive material and smoking",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 7.9,
//           "ratingCount": 8214
//         },
//         "genres": [
//           "Biography",
//           "Drama",
//           "Music"
//         ],
//         "releaseDate": "2022-06-24",
//         "plotOutline": {
//           "id": "/title/tt3704428/plot/po1975059",
//           "text": "From his childhood in Tupelo, Mississippi to his rise to stardom starting in Memphis, Tennessee and his conquering of Las Vegas, Nevada, Elvis Presley becomes the first rock 'n roll star and changes the world with his music."
//         }
//       }
//       ,
//       {
//         "id": "/title/tt8323668/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt8323668/",
//           "image": {
//             "height": 3000,
//             "id": "/title/tt8323668/images/rm1115164673",
//             "url": "https://m.media-amazon.com/images/M/MV5BYWI5Y2ExNzUtZjQ1NS00ZjBlLWI1NDktZGYwNTRiNzI5ZjMxXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
//             "width": 2025
//           },
//           "runningTimeInMinutes": 96,
//           "title": "Jerry and Marge Go Large",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "PG-13",
//               "certificateNumber": 53722,
//               "ratingReason": "Rated PG-13 for some language and suggestive references",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 6.9,
//           "ratingCount": 3475
//         },
//         "genres": [
//           "Biography",
//           "Comedy",
//           "Drama"
//         ],
//         "releaseDate": "2022-06-17",
//         "plotOutline": {
//           "id": "/title/tt8323668/plot/po6086754",
//           "text": "Based on the true story about couple Jerry and Marge Selbee, who win the lottery and use the money to revive their small town."
//         }
//       },
     
//       {
//         "id": "/title/tt0099685/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt0099685/",
//           "image": {
//             "height": 2972,
//             "id": "/title/tt0099685/images/rm2091797760",
//             "url": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//             "width": 1984
//           },
//           "runningTimeInMinutes": 145,
//           "title": "Goodfellas",
//           "titleType": "movie",
//           "year": 1990
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "R",
//               "certificateNumber": 30613,
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 8.7,
//           "ratingCount": 1125316,
//           "topRank": 17
//         },
//         "genres": [
//           "Biography",
//           "Crime",
//           "Drama"
//         ],
//         "releaseDate": "1990-09-21",
//         "plotOutline": {
//           "id": "/title/tt0099685/plot/po0947624",
//           "text": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate."
//         },
//         "plotSummary": {
//           "author": "Colin Tinto <cst@imdb.com>",
//           "id": "/title/tt0099685/plot/ps0028465",
//           "text": "Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy?"
//         }
//       },
     
//       {
//         "id": "/title/tt9419884/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt9419884/",
//           "image": {
//             "height": 2500,
//             "id": "/title/tt9419884/images/rm339811841",
//             "url": "https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
//             "width": 1688
//           },
//           "runningTimeInMinutes": 126,
//           "title": "Doctor Strange in the Multiverse of Madness",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "PG-13",
//               "certificateNumber": 53720,
//               "ratingReason": "Rated PG-13 for intense sequences of violence and action, frightening images and some language.",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 7.2,
//           "ratingCount": 243301,
//           "topRank": 1932
//         },
//         "genres": [
//           "Action",
//           "Adventure",
//           "Fantasy",
//           "Horror",
//           "Sci-Fi"
//         ],
//         "releaseDate": "2022-05-06",
//         "plotOutline": {
//           "id": "/title/tt9419884/plot/po4265986",
//           "text": "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others."
//         }
//       },
//       {
//         "id": "/title/tt7144666/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt7144666/",
//           "image": {
//             "height": 1659,
//             "id": "/title/tt7144666/images/rm1575480577",
//             "url": "https://m.media-amazon.com/images/M/MV5BOWVmNTBiYTUtZWQ3Yi00ZDlhLTgyYjUtNzBhZjM3YjRiNGRkXkEyXkFqcGdeQXVyNzYyOTM1ODI@._V1_.jpg",
//             "width": 933
//           },
//           "runningTimeInMinutes": 103,
//           "title": "The Black Phone",
//           "titleType": "movie",
//           "year": 2021
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "R",
//               "certificateNumber": 53351,
//               "ratingReason": "Rated R for violence, bloody images, language and some drug use.",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 7.4,
//           "ratingCount": 8000
//         },
//         "genres": [
//           "Horror"
//         ],
//         "releaseDate": "2022-06-24",
//         "plotOutline": {
//           "id": "/title/tt7144666/plot/po3421155",
//           "text": "After being abducted by a child killer and locked in a soundproof basement, a 13-year-old boy starts receiving calls on a disconnected phone from the killer's previous victims."
//         },
//         "plotSummary": {
//           "id": "/title/tt7144666/plot/ps6238279",
//           "text": "Finney Shaw is a shy but clever 13-year-old boy who is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of no use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer's previous victims. And they are dead-set on making sure that what happened to them doesn't happen to Finney."
//         }
//       },
     
//       {
//         "id": "/title/tt10954984/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt10954984/",
//           "image": {
//             "height": 1152,
//             "id": "/title/tt10954984/images/rm1742011905",
//             "url": "https://m.media-amazon.com/images/M/MV5BMGIyNTI3NWItNTJkOS00MGYyLWE4NjgtZDhjMWQ4Y2JkZTU5XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
//             "width": 648
//           },
//           "runningTimeInMinutes": 135,
//           "title": "Nope",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "ratings": {
//           "canRate": false
//         },
//         "genres": [
//           "Horror",
//           "Mystery",
//           "Sci-Fi",
//           "Thriller"
//         ],
//         "releaseDate": "2022-07-22",
//         "plotOutline": {
//           "id": "/title/tt10954984/plot/po6438421",
//           "text": "The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery."
//         }
//       },
     
//       {
//         "id": "/title/tt13560574/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "disambiguation": "II",
//           "id": "/title/tt13560574/",
//           "image": {
//             "height": 1350,
//             "id": "/title/tt13560574/images/rm701700609",
//             "url": "https://m.media-amazon.com/images/M/MV5BMTJiMmE5YWItOWZjYS00YTg0LWE0MTYtMzg2ZTY4YjNkNDEzXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg",
//             "width": 1080
//           },
//           "runningTimeInMinutes": 105,
//           "title": "X",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "R",
//               "certificateNumber": 53557,
//               "ratingReason": "Rated R for strong bloody violence and gore, strong sexual content, graphic nudity, drug use, and language",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 6.6,
//           "ratingCount": 48123,
//           "topRank": 3225
//         },
//         "genres": [
//           "Horror",
//           "Thriller"
//         ],
//         "releaseDate": "2022-03-18",
//         "plotOutline": {
//           "id": "/title/tt13560574/plot/po6399353",
//           "text": "In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives."
//         },
//         "plotSummary": {
//           "id": "/title/tt13560574/plot/ps6507088",
//           "text": "Set in 1979, adult movie actors and a small film crew arrive to a farmhouse occupied by an elderly couple in the desolate Texas countryside to film an adult movie. As the day shifts to night, the visitors slowly realize that they are not safe, and are being targeted by a nearby enemy."
//         }
//       },
//       {
//         "id": "/title/tt5108870/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "id": "/title/tt5108870/",
//           "image": {
//             "height": 1476,
//             "id": "/title/tt5108870/images/rm2505970177",
//             "url": "https://m.media-amazon.com/images/M/MV5BNTA3N2Q0ZTAtODJjNy00MmQzLWJlMmItOGFmNDI0ODgxN2QwXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
//             "width": 980
//           },
//           "runningTimeInMinutes": 104,
//           "title": "Morbius",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "certificate": "PG-13",
//               "certificateNumber": 52044,
//               "ratingReason": "Rated PG-13 for intense sequences of violence, some frightening images, and brief strong language",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": true,
//           "rating": 5.1,
//           "ratingCount": 83239,
//           "topRank": 5410
//         },
//         "genres": [
//           "Action",
//           "Adventure",
//           "Horror",
//           "Sci-Fi",
//           "Thriller"
//         ],
//         "releaseDate": "2022-04-01",
//         "plotOutline": {
//           "id": "/title/tt5108870/plot/po3602670",
//           "text": "Biochemist Michael Morbius tries to cure himself of a rare blood disease, but he inadvertently infects himself with a form of vampirism instead."
//         },
//         "plotSummary": {
//           "id": "/title/tt5108870/plot/ps5258987",
//           "text": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease."
//         }
//       },
     
//       {
//         "id": "/title/tt11866324/",
//         "title": {
//           "@type": "imdb.api.title.title",
//           "disambiguation": "I",
//           "id": "/title/tt11866324/",
//           "image": {
//             "height": 3000,
//             "id": "/title/tt11866324/images/rm3884783105",
//             "url": "https://m.media-amazon.com/images/M/MV5BMWE2YjY4MGQtNjRkYy00ZTQxLTkyNTUtODI1Y2I3M2M3ODE2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
//             "width": 2025
//           },
//           "title": "Prey",
//           "titleType": "movie",
//           "year": 2022
//         },
//         "certificates": {
//           "US": [
//             {
//               "attributes": [
//                 "cert#53786"
//               ],
//               "certificate": "R",
//               "ratingReason": "Rated R for strong bloody violence.",
//               "ratingsBody": "MPAA",
//               "country": "US"
//             }
//           ]
//         },
//         "ratings": {
//           "canRate": false
//         },
//         "genres": [
//           "Action",
//           "Drama",
//           "Horror",
//           "Sci-Fi",
//           "Thriller"
//         ],
//         "releaseDate": "2022-08-05",
//         "plotOutline": {
//           "id": "/title/tt11866324/plot/po5005938",
//           "text": "The origin story of the Predator in the world of the Comanche Nation 300 years ago. Naru, a skilled female warrior, fights to protect her tribe against one of the first highly-evolved Predators to land on Earth."
//         }
//       }
     
     
// ]

// }

     

//       /*
//       '/assets/image-1.avif',
//       '/assets/image-2.avif',
//       '/assets/image-3.avif',
//       '/assets/image-4.jpg',
//       '/assets/image-5.jpg',
//       '/assets/image-6.jpg',
//       '/assets/image-7.jpg',
//       '/assets/image-8.avif'
//       */
