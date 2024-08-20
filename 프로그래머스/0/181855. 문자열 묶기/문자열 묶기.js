function solution(strArr) {
    let obj = {};
    
    for (const str of strArr) {
        if (!obj[str.length]) obj[str.length] = 0;
        
        obj[str.length]++;
    }

    return Math.max(...Object.values(obj));
}