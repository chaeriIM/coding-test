function solution(order) {
    
    return [...String(order)].filter(n => '369'.includes(n)).length;
}