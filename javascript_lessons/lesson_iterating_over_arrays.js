lesson_title = 'Lesson: iterating over arrays';
console.log(lesson_title);
    let scores = [10, 20, 10]; //my array
    
    let p = 0; //keep track of how long the while loop has been running
    //long while loop version start
    while(p < scores.length) {
        scores[p]++;
        p++;
    }
    
    console.log('Scores Array BEFORE:', scores);
    
    for(p = 0; p < scores.length; p++){
        scores[p]++;
    }
    console.log(scores);
    //long while loop version end
    //
    //
    //short iterating version start

    scores.forEach(function(entry, index){
        console.log(entry, index);
        scores[index]++;
    });
    console.log('Scores Array AFTER:', scores);
    //short iterating version end