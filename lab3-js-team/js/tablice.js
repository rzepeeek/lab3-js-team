const days = ['Pn.', 'Wt.', 'Œr.', 'Czw.', 'Pt.', 'Sob.', 'Ndz.'];
const playList = []; // pusta tablica
const prefs = [1, 223, 'www.javascript.com', false];
const authors = [
    'Stan Lee',
    'Simon Bisley',
    'Grzegorz Rosiñski',
    'Todd McFarlane'
];
const tablica = [
    'harnas',
    'nafas',
    'enzo',
    'okekel',
    'rusina',
    'abimosa'
]
console.log(tablica);
console.table(tablica);

const nowaDlugosc = tablica.unshift('nowy12', 'nowy13');
console.log(nowaDlugosc);

const nowaTablica = ['Ford', 'Toyota', 'BMW', 'Renault'];

document.write('<p>Pierwszy element to ' + nowaTablica[0] + '</p>');
document.write('<p>Ostatni element to ' + nowaTablica[nowaTablica.length - 1] + '</p>');

nowaTablica.unshift('Porsche');
document.write('<p>Nowy pierwszy element element to ' + nowaTablica[0] + '</p>');

const usunietyOstatni = nowaTablica.pop();
const usunietyPierwszy = nowaTablica.shift();
document.write('<p>Usunieto z konca: ' + usunietyOstatni + ', a z poczatku: ' + usunietyPierwszy + '</p>);
document.write('<p>W tablicy zostalo: ' + nowaTablica.join(', ') + '</p>');

