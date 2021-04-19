lesson_title = 'Lesson: for loops';
console.log(lesson_title);
    let population_a = 100;
    let population_b = 100;
    let population_c = 100;

    
    //challenge completion code:
        let yearNumber = 0;

        function yearCount (){
            yearNumber += 1;
            console.log(yearNumber + ' tick done!');
        }

        let year_a = 0;

        while(year_a < 10){ // run tick until 10
            yearCount();
            population_a *= 1.05;
            year_a++;
            console.log('population a: ' + population_a);
        }
    //challenge end
    
    //challenge with no logging
        let year_b = 0;

        while(year_b < 10){ // run tick until 10
            population_b *= 1.05;
            year_b++;
        }
        console.log('population b: ' + population_b);
    //challenege with no logging end
    
    //for loop
        for(let year_c = 0; year_c < 10; year_c++){
            population_c *= 1.05;
        }

        console.log('population c: ' + population_c);