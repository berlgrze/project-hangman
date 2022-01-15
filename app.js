const answer = document.getElementById('answer');

let generatedWord = 'someword'; //array is bad idea

function showWord(){
    for(const element of generatedWord){
        answer.textContent += ' *';
    }
}

document.addEventListener('keydown', check);
function check(event){
    let key = event.key;
    const regex = /[A-Za-z]/g;
    const keyMatch = key.match(regex);
    for(const element of generatedWord){
        if(element.includes(keyMatch)){
            let index = generatedWord.indexOf(element);
            generatedWord[index] = 'z';
            answer.textContent = generatedWord;
        }
    }
}

window.onload = showWord();

function getLetters(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

//todo index of letters in string