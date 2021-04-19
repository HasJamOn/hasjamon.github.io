lesson_title = 'Lesson: continue, break';
console.log(lesson_title);
    let fuel_a = 1000;
    let distance_a = 0;
    
    while (fuel_a > 0) { //while there is fuel continue moving and drain fuel
        distance_a++;
        
        if (distance >= 100 && distance < 200){
            continue;
        }
        
        fuel_a--;
        
        if(distance_a == 500){
            break;
        }
    }
    
    
    
    console.log(distance_a);