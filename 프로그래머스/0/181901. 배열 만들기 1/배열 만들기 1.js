function solution(n, k) {
    let i = 1;
    let result = [];
    
    while (i * k <= n) {
        result.push(i * k);
        i++;
    }
    
    return result;
}