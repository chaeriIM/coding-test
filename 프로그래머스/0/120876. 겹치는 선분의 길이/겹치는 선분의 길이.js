function solution(lines) {
    // -100 ~ 100
    let arr = new Array(201).fill(0);
    
    for (const [a, b] of lines) {
        for (let i=a+100; i<b+100; i++) {
            arr[i]++;
        }
    }
    
    return arr.filter(x => x > 1).length;
}