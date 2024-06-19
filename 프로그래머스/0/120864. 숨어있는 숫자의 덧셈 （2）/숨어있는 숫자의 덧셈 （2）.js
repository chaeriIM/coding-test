function solution(my_string) {
    const num = my_string.match(/\d+/g);
    
    if (!num) return 0;
    
    return num.reduce((a, b) => a + Number(b), 0);
}