function GCD(a, b) {
    return a % b === 0 ? b : GCD(b, a % b);
}

function LCM(a, b) {
    return (a * b) / GCD(a, b); 
}

function solution(n, m) {
    return [GCD(n, m), LCM(n, m)];
}