function solution(t, p) {
    const l = p.length;
    let count = 0;
    
    for (let i=0; i<t.length; i++) {
        const n = t.slice(i, i+l);
        if (n.length === l && Number(n) <= Number(p)) {
            count++;  
        }
    }
    
    return count;
}