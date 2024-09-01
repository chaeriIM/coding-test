function solution(k, m, score) {
    const sort = score.sort((a, b) => b - a);
    let result = 0;
    
    for (let i=1; i<=Math.floor(sort.length/m); i++) {
        result += sort[i*m-1] * m;
    }
    
    return result;
}