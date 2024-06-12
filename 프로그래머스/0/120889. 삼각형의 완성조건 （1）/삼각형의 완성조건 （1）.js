function solution(sides) {
    const [x, y, z] = sides.sort((a, b) => a - b);
    
    return z < x + y ? 1 : 2;
}