function solution(s) {
    const center = Math.floor(s.length / 2);
    
    return s.length % 2 === 0 ? s.substring(center-1, center+1) : s[center];
}