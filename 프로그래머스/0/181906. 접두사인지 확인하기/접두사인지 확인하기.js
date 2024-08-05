function solution(my_string, is_prefix) {
    let prefix = [];
    
    for (let i=0; i<my_string.length; i++) {
        prefix.push(my_string.slice(0, i+1));
    }
    
    return prefix.includes(is_prefix) ? 1 : 0;
}