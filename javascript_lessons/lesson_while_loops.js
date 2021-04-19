lesson_title = 'Lesson: while loops';
console.log(lesson_title);
    function sendSignal (){
        console.log('HELP!');
    }
    
    let i = 0;
    
    while(i < 1000){ // run i until 1000
        sendSignal();
        //i = i + 1;
        //i += 1;
        i++
    }
    
    let result_j = 0;
    
    let j = 1;
    
    while (j <= 10){
        result_j = result_j + j;
        console.log(result_j);
        j++;
    }
    
    console.log(result_j);