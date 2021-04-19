lesson_title = 'Lesson: DOM API';
console.log(lesson_title);
    
    //1. Select
    let sign = document.getElementById('sign');
    
    //2. Modify
    console.log(sign.textContent);
    //modify text
    sign.textContent = 'Welcome, travelers!';
    
    //modify
    //sign.innerHTML = sign.innerHTML + '<p>hello</p>';
    sign.innerHTML += '<p>hello</p>';
    
    sign.style.color = 'blue';