function solution(sides) {
    let count = 0;
    const [a, b] = sides.sort((a, b) => a - b);
    
    for (let i=b-a+1; i<a+b; i++) {
        count++;
    }
    
    return count;
}