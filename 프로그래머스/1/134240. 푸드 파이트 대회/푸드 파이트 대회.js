function solution(food) {
    let arr = '';
    
    for (let i=1; i<food.length; i++) {
        arr += String(i).repeat(food[i]/2);
    }
    
    return arr + '0' + [...arr].reverse().join('');
}