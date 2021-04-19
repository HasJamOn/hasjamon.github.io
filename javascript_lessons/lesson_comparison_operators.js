lesson_title = 'Lesson: comparison operators';
console.log(lesson_title);
    let item = 'banana';
    
    if (item != 'engine') { // != is not equal
        console.log('not engine!')
    }
    
    let score = 50;
    
    if(score >= 60) { // > alone will not include the number itself.
        console.log('pass');
    }
    else {
        console.log('not pass');
    }
    let isEngine = item == 'engine'; //true or false variable checking other variable
    console.log(isEngine);
    
    if(isEngine){ //can be used in a statement
        console.log('engine on!')
    }
    else
        console.log('engine missing')