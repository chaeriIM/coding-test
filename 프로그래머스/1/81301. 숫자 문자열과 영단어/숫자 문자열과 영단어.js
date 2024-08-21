function solution(s) {
    const numbers = ['zero', 'one', 'two', 'three', 'four',
                  'five', 'six', 'seven', 'eight', 'nine'];
    
    numbers.forEach((word, i) => {
        s = s.split(word).join(i);
    });
    
    return Number(s);
}