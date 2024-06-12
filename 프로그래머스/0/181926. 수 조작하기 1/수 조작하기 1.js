function solution(n, control) {
    const wasd = {
        'w': 1,
        'a': -10,
        's': -1,
        'd': 10
    }
    
    return [...control].map(v => wasd[v]).reduce((a, b) => a + b, n);
}