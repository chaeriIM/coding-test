function solution(n) {
    const arr = [...String(n)].map(Number);
    return arr.reduce((a, b) => a + b, 0)
}