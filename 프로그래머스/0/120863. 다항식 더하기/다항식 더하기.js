function solution(polynomial) {
    let x = 0;
    let n = 0;
    let result = [];
    
    const arr = polynomial.split(' + ');
    
    arr.forEach(v => {
        if (v.includes('x')) { // 일차항
            if (v === 'x') { // 계수가 1일 때
                x++;
            } else {
                x += Number(v.replace('x', ''));
            }
        } else { // 상수항
            n += Number(v);
        }
    })
    
    if (x > 0) {
        if (x === 1) {
            result.push('x');
        } else {
            result.push(`${x}x`);
        }
    }
    if (n > 0) {
        result.push(`${n}`);
    }
    
    return result.join(' + ');
}