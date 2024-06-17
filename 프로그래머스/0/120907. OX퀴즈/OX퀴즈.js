function solution(quiz) {
    let result = [];
    
    quiz.forEach(v => {
        const [x, sign, y, , z] = v.split(' ');
        let a = 0;
        
        if (sign === '+') {
            a = Number(x) + Number(y);   
        } else {
            a = Number(x) - Number(y);
        }
        
        if (a === Number(z)) {
            result.push('O');
        } else {
            result.push('X');
        }
    })
        
   return result;
}