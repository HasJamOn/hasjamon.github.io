lesson_title = 'Lesson: methods';
console.log(lesson_title);
    let player_a = {
        health: 100, //health and fun are properties given to the variable
        fun: 0,
        eatApple: function() {
            console.log('eat');
            
            //this.health = this.health + 10;
            this.health += 10;
            console.log(this.health); //this.(property) gives access to the context, which is player_a in this case.
        }
    };
    
    player_a.eatApple();
    console.log(player_a);