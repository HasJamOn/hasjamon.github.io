lesson_title = 'Lesson: functions';
console.log(lesson_title);
    // 1 hour = 60 minutes
    function hourToMinutes(hours) {
        let result = hours * 60;
        return result;
    }
    
    let example_a = hourToMinutes(10);
    let example_b = hourToMinutes(24);
    console.log(example_a);
    console.log(example_b);
    
    let dayToHours = function(days) {
        return days * 24;
    }

    let example_c = dayToHours(3);
    console.log(example_c);