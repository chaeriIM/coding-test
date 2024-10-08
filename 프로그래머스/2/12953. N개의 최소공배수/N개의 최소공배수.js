function GCD(a, b) {
    return a % b === 0 ? b : GCD(b, a % b);
}

function LCM(a, b) {
    return a * b / GCD(a, b);
}

function solution(arr) {
    let result = 1;
    
    for (let i=0; i<arr.length; i++) {
        result = LCM(result, arr[i]);
    }
    
    return result;
}