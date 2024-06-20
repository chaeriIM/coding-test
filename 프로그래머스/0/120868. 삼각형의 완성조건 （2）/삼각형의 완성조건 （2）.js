function solution(sides) {
    const [a, b] = sides.sort((a, b) => a - b);
    const min = b - a;
    const max = b + a;
    
    return max - min - 1;
}