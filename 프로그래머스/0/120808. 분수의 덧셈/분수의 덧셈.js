function GCD(num1, num2) {
    return num1 % num2 === 0 ? num2 : GCD(num2, num1 % num2);
}

function solution(numer1, denom1, numer2, denom2) {
    
    let denom = denom1 * denom2;
    let numer = numer1 * denom2 + numer2 * denom1;
    let gcd = GCD(numer, denom);
    
    return [numer/gcd, denom/gcd];
}