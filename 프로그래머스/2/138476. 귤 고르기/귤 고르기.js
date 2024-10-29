function solution(k, tangerine) {
    const count = {};
    
    tangerine.forEach(t => count[t] = (count[t] || 0) + 1);
    
    const sort = Object.values(count).sort((a, b) => b - a);

    let result = 0;
    for (const t of sort) {
        k -= t;
        result++;
        if (k <= 0) break;
    }
    
    return result;
}