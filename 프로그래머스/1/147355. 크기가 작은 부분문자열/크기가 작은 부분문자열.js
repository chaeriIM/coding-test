function solution(t, p) {
    const l = p.length;
    let num = [];
    
    for (let i=0; i<t.length; i++) {
        if (t.slice(i, i+l).length === l) {
            num.push(Number(t.slice(i, i+l)));   
        }
    }
    
    return num.filter(n => n <= Number(p)).length;
}