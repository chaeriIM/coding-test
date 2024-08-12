function solution(s) {
    let x = s[0];
    let countX = 0;
    let countY = 0;
    let result = 0;
    
    for (let i=0; i<s.length; i++) {
        if (s[i] === x) {
            countX++;
        } else {
            countY++;
        }
        
        if (countX === countY) {
            result++;
            if (i + 1 < s.length) {
                x = s[i + 1];
            }
            countX = 0;
            countY = 0;
        }
    }
    
    if (countX !== 0 || countY !== 0) {
        result++;
    }
    
    return result;
}