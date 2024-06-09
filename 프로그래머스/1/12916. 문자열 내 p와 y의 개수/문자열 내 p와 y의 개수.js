function solution(s){
    const p = s.toLowerCase().split('p').length - 1;
    const y = s.toLowerCase().split('y').length - 1;
    
    return p === y;
}