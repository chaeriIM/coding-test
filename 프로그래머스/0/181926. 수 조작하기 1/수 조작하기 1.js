function solution(n, control) {
    let answer = n;
    const wasd = {
        'w': 1,
        'a': -10,
        's': -1,
        'd': 10
    }
    
    control.split('').forEach(v => answer += wasd[v]);
    
    return answer;
}