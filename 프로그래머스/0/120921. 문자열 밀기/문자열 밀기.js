function solution(A, B) {
    let count = 0;
    const newA = [...A];
    
    if (A === B) return 0;
    
    for (let i=0; i<newA.length; i++) {
        if (newA.join('') !== B) {
            newA.unshift(newA.pop());
            count++;
        }
    }
    
    return newA.join('') !== B ? -1 : count;
}