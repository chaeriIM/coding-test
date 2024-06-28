function solution(arr, divisor) {
    const result = arr.filter(n => Number.isInteger(n / divisor))
                        .sort((a, b) => a - b);
    
    return result.length ? result : [-1];
}