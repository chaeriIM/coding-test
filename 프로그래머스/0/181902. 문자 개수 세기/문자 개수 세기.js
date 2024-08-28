function solution(my_string) {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = Array(52).fill(0);
    
    [...my_string].forEach(str => result[alpha.indexOf(str)]++);
    
    return result;
}