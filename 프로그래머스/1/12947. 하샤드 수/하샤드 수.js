function solution(x) {
    const sum = [...String(x)].map(Number).reduce((a, b) => a+ b, 0);
    return x % sum === 0;
}