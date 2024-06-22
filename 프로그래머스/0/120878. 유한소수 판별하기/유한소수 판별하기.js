function GCD(a, b) {
    return a % b === 0 ? b : GCD(b, a % b);
}

function solution(a, b) {
    const gcd = GCD(a, b); // 최대공약수
    let den = b / gcd; // 분모
    
    while (den % 2 === 0) {
        den /= 2;
    }
    while (den % 5 === 0) {
        den /= 5;
    }
    
    return den === 1 ? 1 : 2;
}