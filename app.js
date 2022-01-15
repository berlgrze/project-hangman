const answer = document.getElementById('answer');

let generatedWord = 'someword';

document.addEventListener('keydown', check);
function check(event){
    let key = event.key;
    const regex = /[A-Za-z]/g;
    const keyMatch = key.match(regex);
    for(const element of generatedWord){
        if(element.includes(keyMatch)){
            console.log('correct letter');
        }
    }
}

function showWord(){
    for(const element of generatedWord){
        answer.textContent += '*';
    }
}