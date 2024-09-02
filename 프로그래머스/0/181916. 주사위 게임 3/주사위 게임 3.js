function solution(a, b, c, d) {
    const dice = [a, b, c, d].sort((a, b) => a - b);
    const [p, q, r, s] = dice;
    
    if (p === s) return 1111 * p;
    
    if (p === r || q === s) {
        return Math.pow(10 * (p === r ? p : s) + (p === r ? s : p), 2);
    }
    
    if (p === q && r === s) return (p + r) * Math.abs(p - r);
    
    if (p === q || q === r || r === s) {
        if (p === q) return r * s;
        if (q === r) return p * s;
        if (r === s) return p * q;
    }
        
    return p;
}