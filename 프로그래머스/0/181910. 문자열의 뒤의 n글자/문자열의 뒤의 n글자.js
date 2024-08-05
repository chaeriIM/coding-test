function solution(my_string, n) {
    const l = my_string.length;
    
    return my_string.slice(l-n, l);
}