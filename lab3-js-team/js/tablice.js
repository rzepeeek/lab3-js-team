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