// function countSelected(selectObject) {
//     let numberSelected = 0;
//     for (let i = 0; i < selectObject.options.length; i++) {
//       if (selectObject.options[i].selected) {
//         numberSelected++;
//       }
//     }
//     return numberSelected;
//   }
for (let index= 1; index <11; index++){
    console.log(`Durchlauf ${index}: Hallo World`);   
}
let numbersToTen: number [] = [];
for (let numero= 0; numero <11; numero ++){
    numbersToTen.push(numero);
    console.log(`durchlauf ${numero}`);
    console.log(numbersToTen);}

let ungeradeZahlen= [];
for (let i= 1; i<= 100; i++){
    if (i % 2 !== 0){
        ungeradeZahlen.push(i);
    }
    console.log("Ungerade Zahlen", ungeradeZahlen);
}
const friendNames: string [] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"]
console.log(friendNames);
for (let i= 0; i < friendNames.length; i++){
    console.log(friendNames[i]);
    console.log(friendNames);
}
let words: string[] = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];
console.log(words);
console.log(words[1]);

function filterWords(){
    const lengthInput = document.querySelector('#wortLaenge') as HTMLInputElement;
    const resultDiv = document.querySelector('#ergebnisse')
    if(lengthInput && resultDiv){
        const zielLaenge = parseInt(lengthInput.value);
        const filteredWords= words.filter(word => word.length === zielLaenge);
        resultDiv.innerHTML = ''
        for (let i= 0; i < filteredWords.length; i++){
            const p = document.createElement('p'); 
            p.textContent = filteredWords[i];
            resultDiv.appendChild(p)
        }
    }
}
filterWords();
document.addEventListener('DOMContentLoaded', () => {
    const lengthInput = document.querySelector('#wortLaenge') as HTMLInputElement;
    if (lengthInput) {
        lengthInput.addEventListener('input', filterWords);
    }
    const addBtn = document.querySelector ('#addBtn') as HTMLInputElement;
    if (addBtn){
        addBtn.addEventListener('click', addWords)
    }
});
function addWords(){
    console.log("addWords Funktion wurde ausgerufen");
    const newWordInput = document.querySelector('#neuesWortHinzufügen') as HTMLInputElement;
    console.log("newWordInput:", newWordInput);
    
    if (newWordInput){
        let newWord = neuesWortHinzufügen.value.trim();
        if (newWord !== ''){
            words.push(newWord);
            console.log("Neues Wort hinzugefügt", newWord);
            newWordInput.value = '';
            filterWords();
            
        } 
    }
}

