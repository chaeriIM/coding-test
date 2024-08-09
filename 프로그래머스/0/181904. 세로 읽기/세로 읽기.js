function solution(my_string, m, c) {
    let result = '';
    
    for (let i=0; i<my_string.length; i+=m) {
        const newStr = my_string.slice(i, i+m);
        result += newStr[c-1];
    }
    
    return result;
}