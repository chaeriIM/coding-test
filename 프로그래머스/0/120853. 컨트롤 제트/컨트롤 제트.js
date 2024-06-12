function solution(s) {
    const str = s.split(' ');
    let sum = 0;
    
    for (let i=0; i<str.length; i++) {
        if (str[i] === 'Z') {
            sum -= Number(str[i - 1]);
        } else {
            sum += Number(str[i]);
        }
    }
    
    return sum;
}