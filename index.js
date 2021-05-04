// Code your solutions in this file
for(let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}


function wrapGifts(gifts){
for(let i = 0; i < gifts.length; i++){
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
    return gifts;
}

function writeCards(names, event){
    let cards = []
    for(let i = 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
       return cards
}

function countDown(x) {
    while(x >= 0) {
        console.log(x--);
    }

}