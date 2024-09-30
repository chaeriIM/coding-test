function solution(s) {
    let count = 0;
    let zero = 0;
    
    while (s !== '1') {
        zero += s.split('0').length - 1;
        s = s.replaceAll('0', '').length.toString(2);
        count++;
    }
    
    return [count, zero];
}