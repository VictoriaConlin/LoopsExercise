// Loops Exercise

// 1
for (i=1; i<=7; i++){
    console.log(i);
} 

// 2
for (i=5; i<=25; i += 4){
    console.log(i);
} 

// 3a
const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];
// 3b
for (item of wizards){
    console.log(item);
}

// 4a
let harryPotterMovie = 0;
// 4b, 4c
while (harryPotterMovie <= 8){
    console.log(harryPotterMovie);
    harryPotterMovie++;
}

// BONUS
// 5a
const hogwartsHouses = [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
];
// 5b
    for ( house of hogwartsHouses){
        for (char of house){
            console.log(char);
        }
    }

// 6a
const quote = [
    'Yer',
    'A', 
    'Wizard', 
    'Harry'
]
// 6b
for (word of quote){
    // console.log(word);
    
    for (i of quote){
        console.log(quote);
    } 
}
