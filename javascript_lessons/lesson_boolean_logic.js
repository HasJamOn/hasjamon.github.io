lesson_title = 'Lesson: boolean logic';
console.log(lesson_title);
    let distance = 250;
    let fuel = 100;
    let distanceCondition = distance <= 200 && distance >= 100;
    let isEngineFunctioning = false;
    
    if(!isEngineFunctioning || distance > 200){ // the || is an OR operator, fulfilling one condition is enough.
        console.log('wont make it'); // to write || on my laptop hold Alt Gr and press the button between ?+\ and backspace.
    }
    
    else if(distanceCondition && fuel >= 100){
        console.log('you will make it');
    }