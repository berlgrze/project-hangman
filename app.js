const answer = document.getElementById('answer');

let autoArray = Array.from('ship');

document.addEventListener('keydown', check);
function check(event){
    let key = event.key;
    const regex = /[A-Za-z]/g;
    const keyMatch = key.match(regex);
    for(const element of autoArray){
        if(element.includes(keyMatch)){
            console.log('work');
        }
    }
}
