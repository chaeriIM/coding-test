function solution(my_strings, parts) {
    let result = '';
    
    parts.forEach(([s, e], i) => {
        result += my_strings[i].slice(s, e+1);
    });
    
    return result;
}