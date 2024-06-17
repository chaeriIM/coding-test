function solution(num, k) {
    const i = String(num).indexOf(String(k));
    
    if (i === -1) {
        return i
    } else {
        return i + 1;
    }
}