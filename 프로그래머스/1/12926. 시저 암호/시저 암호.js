function solution(s, n) {
    let result = '';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    
    for (let i=0; i<s.length; i++) {
        if (s[i] === ' ') result += ' ';
        if (upper.includes(s[i])) result += upper[(upper.indexOf(s[i]) + n) % 26];
        if (lower.includes(s[i])) result += lower[(lower.indexOf(s[i]) + n) % 26];
    }
    
    return result;
}