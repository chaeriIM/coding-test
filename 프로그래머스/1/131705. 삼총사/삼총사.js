function solution(number) {
    let result = 0;
    const l = number.length;
    
    for (let i=0; i<l; i++) {
        for (let j=i+1; j<l; j++) {
            for (let k=j+1; k<l; k++) {
                if (number[i] + number[j] + number[k] === 0) result++;
            }
        }
    }
    
    return result;
}