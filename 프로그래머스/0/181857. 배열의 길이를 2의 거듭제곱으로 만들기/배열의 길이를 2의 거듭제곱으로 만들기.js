function solution(arr) {
    let i = 1;
    
    while (i < arr.length) {
        i *= 2;
    }
    
    while (arr.length < i) {
        arr.push(0);
    }
    
    return arr;
}