function solution(l, r) {
    let result = [];
    
    for (let i=l; i<=r; i++) {
        if ([...String(i)].every(char => char === '5' || char === '0')) {
            result.push(i);
        }
    }
    
    return result.length > 0 ? result : [-1];
}