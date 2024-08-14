function solution(my_string, s, e) {
    let arr = [...my_string];
    const reverse = arr.slice(s, e + 1).reverse().join('');
    
    arr.splice(s, e-s+1, reverse);
    
    return arr.join('');
}