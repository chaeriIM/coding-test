function solution(age) {
    const alpha = 'abcdefghij';
    const strAge = String(age).split('');
    
    return strAge.map(a => alpha[a]).join('');
}