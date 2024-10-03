function solution(n) {
    let num = n + 1;
    
    while (n.toString(2).split('1').length !== num.toString(2).split('1').length) {
        num++;
    }
    
    return num;
}