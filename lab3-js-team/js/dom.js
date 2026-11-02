const formy = document.querySelectorAll('form').length;
const obrazki = document.querySelectorAll('img').length;
const odnosniki = document.querySelectorAll('a').length;
const akapityProjekt1 = document.querySelectorAll('#projekt1 p').length;

console.log(`Liczba formularzy na stronie: ${formy}`);
console.log(`Liczba obrazków na stronie: ${obrazki}`);
console.log(`Liczba odnośników na stronie: ${odnosniki}`);
console.log(`Liczba akapitów w sekcji #projekt1: ${akapityProjekt1}`);

const licznikElement = document.getElementById('licznik');

if (licznikElement) {
    licznikElement.innerHTML = `
        <strong>Wyniki zliczania elementów DOM:</strong>
        <ul>
            <li>Formularze (cała strona, tagi <code>&lt;form&gt;</code>): <strong>${formy}</strong></li>
            <li>Obrazki (cała strona, tagi <code>&lt;img&gt;</code>): <strong>${obrazki}</strong></li>
            <li>Odnośniki (cała strona, tagi <code>&lt;a&gt;</code>): <strong>${odnosniki}</strong></li>
            <li>Akapity (tylko sekcja #projekt1, tagi <code>&lt;p&gt;</code>): <strong>${akapityProjekt1}</strong></li>
        </ul>
    `;
}