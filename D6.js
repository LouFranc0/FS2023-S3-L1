/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function concatAndUppercase(str1, str2) {

  const firstTwoChars = str1.slice(0, 2);
  const lastThreeChars = str2.slice(-3);

  const result = firstTwoChars + lastThreeChars;

  const uppercaseResult = result.toUpperCase()

  console.log(uppercaseResult);

}
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
function generateRandomArray() {
  const randomArray = [];

  for (let i = 0; i < 10; i++) {
    
    const randomNumber = Math.floor(Math.random() * 101);
    randomArray.push(randomNumber);
  }

  return randomArray;
}

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
function trovaValoriPari(array) {

  let valoriPari = array.filter(function(numero) {
    return numero % 2 === 0;
  });

  return valoriPari;
}
let arrayDiNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let valoriPari = trovaValoriPari(arrayDiNumeri);

console.log(valoriPari); 
/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaArray(numeri2) {
  let somma = 0;

  numeri2.forEach(function(numero) {
    if (typeof numero === 'number') {
      somma += numero;
    }
  });

  return somma;
}
const numeri2 = [1, 2, 3, 4, 5];
const risultato = sommaArray(numeri2);
console.log('La somma degli elementi nell\'array è: ' + risultato);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaArray(numeri3) {
  return numeri3.reduce(function(somma, numero) {
    if (typeof numero === 'number') {
      return somma + numero;
    } else {
      return somma;
    }
  }, 0);
}

// Esempio di utilizzo:
const numeri3 = [1, 2, 3, 4, 5];
const risultato2 = sommaArray(numeri3);
console.log('La somma degli elementi nell\'array è: ' + risultato2);
/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/


/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
function lunghezzeStringhe(arr) {
  return arr.map(function(stringa) {
    return stringa.length;
  });
}

const arrayDiStringhe = ["EPICODE", "is", "great"];
const lunghezze = lunghezzeStringhe(arrayDiStringhe);
console.log('Lunghezze delle stringhe: ' + lunghezze);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function valoriDispari() {
  const arrayDispari = [];
  
  for (let i = 1; i <= 99; i += 2) {
    arrayDispari.push(i);
  }
  
  return arrayDispari;
}

const arrayDispariDa1a99 = valoriDispari();
console.log(arrayDispariDa1a99);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function trovaFilmPiuVecchio(movies) {
  let filmPiuVecchio = null;
  
  movies.forEach(function(movie) {
    if (filmPiuVecchio === null || parseInt(movie.Year) < parseInt(filmPiuVecchio.Year)) {
      filmPiuVecchio = movie;
    }
  });
  
  return filmPiuVecchio;
}

const filmPiuVecchio = trovaFilmPiuVecchio(movies);

if (filmPiuVecchio) {
  console.log('Il film più vecchio è:', filmPiuVecchio.Title);
} else {
  console.log('Nessun film trovato nell\'array.');
}


/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/


function numeroDiFilm(movies) {
  return movies.length;
}

const numeroFilm = numeroDiFilm(movies);

console.log('Il numero di film nell\'array è:', numeroFilm);

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function ottieniTitoliDeiFilm(movies) {
  return movies.map(movie => movie.Title);
}

const titoliDeiFilm = ottieniTitoliDeiFilm(movies);

console.log('Array dei titoli dei film:');
console.log(titoliDeiFilm);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function filmDelMillennioCorrente(movies) {
  const annoCorrente = new Date().getFullYear(); // Ottieni l'anno corrente
  return movies.filter(movie => parseInt(movie.Year) >= 2000 && parseInt(movie.Year) <= annoCorrente);
}

const filmMillennioCorrente = filmDelMillennioCorrente(movies);

console.log('Film usciti nel millennio corrente:');
console.log(filmMillennioCorrente);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
function sommaAnniDiProduzione(movies) {
  const somma = movies.reduce((acc, movie) => acc + parseInt(movie.Year), 0);
  return somma;
}

const sommaAnni = sommaAnniDiProduzione(movies);

console.log('La somma degli anni di produzione dei film è:', sommaAnni);

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

function trovaFilmPerImdbID(imdbID, movies) {
  return movies.find(movie => movie.imdbID === imdbID);
}

const imdbIDDaCercare = 'tt0120737'; // Sostituisci con l'IMDb ID del film che vuoi cercare
const filmTrovato = trovaFilmPerImdbID(imdbIDDaCercare, movies);

if (filmTrovato) {
  console.log('Film trovato:', filmTrovato);
} else {
  console.log('Nessun film trovato con l\'IMDb ID specificato.');
}


/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/


function trovaIndicePrimoFilmPerAnno(anno, movies) {
  return movies.findIndex(movie => parseInt(movie.Year) === anno);
}

const annoDaCercare = 2001; // Sostituisci con l'anno che desideri cercare
const indicePrimoFilm = trovaIndicePrimoFilmPerAnno(annoDaCercare, movies);

if (indicePrimoFilm !== -1) {
  console.log(`Il primo film uscito nell'anno ${annoDaCercare} si trova all'indice ${indicePrimoFilm}`);
} else {
  console.log(`Nessun film trovato nell'anno ${annoDaCercare}`);
}
