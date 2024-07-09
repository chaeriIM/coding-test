function solution(d, budget) {
    const sort = d.sort((a, b) => a - b);
    let sum = 0;
    let i = 0;
    
    while (sum <= budget) {
        sum += sort[i];
        i++;
    }
    
    return i - 1;
}