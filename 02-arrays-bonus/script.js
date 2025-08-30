const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();  //inverti l'array
console.log("ordine inverso:", reversedTeachers); //output

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri


/* 3. Rimuovi 'Ed' dall'array teachers
OPZIONE UNO
trova la posizione di "Ed" nell'array teachers
const removedElement = teachers.indexOf('Ed');
faccio la prova e se "Ed" esiste, allora lo rimuovo
if (removedElement > -1) {    
teachers.splice(removedElement, 1);
output
console.log(teachers);*/

 const removedElement = teachers.indexOf("Ed");
 for(let i= 0; i<1; i++) {
    if (removedElement > -1) {
        teachers.splice (removedElement,1);
        console.log(teachers)
    }
 }

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

const isFabioPresent = teachers.indexOf('Fabio');
console.log(isFabioPresent > -1);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString();
console.log(teachersString);