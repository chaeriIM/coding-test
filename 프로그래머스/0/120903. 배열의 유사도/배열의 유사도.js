function solution(s1, s2) {
    let count = 0;
    
    s1.forEach(v => {
        for (let i=0; i<s2.length; i++) {
            if (s2[i] === v) count++;
        }
    })
    
    return count;
}