lesson_title = 'Lesson: objects';
console.log(lesson_title);
    let player = {age: 99, 
        name: 'ABC',
        isActive: true};
    
    console.log(player);
    
    console.log(player.name);
    console.log(player['name']);
    
    player.isActive = false;
    console.log(player);
    
    player.health = 100;
    console.log(player);
    
    delete player.health; //DANGERZONE - removing a property can easily cause errors.
    console.log(player);