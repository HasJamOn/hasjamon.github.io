lesson_title = 'Lesson: arrays';
console.log(lesson_title);
    let database = ['turtle','cat','dog','bird']; 
    console.log(database);
    console.log(database.length);
    
    let animal = database [0] //variable is entry 0
    console.log(animal);
    
    database[0] = 'dinosaur'; //changes entry 0
    console.log(database);
    
    let last = database[database.length - 1]; //selects last entry
    console.log(last);
    
    database.push('lizard'); //adds an entry
    console.log(database);
    
    database.pop(); //removes last entry
    console.log(database);