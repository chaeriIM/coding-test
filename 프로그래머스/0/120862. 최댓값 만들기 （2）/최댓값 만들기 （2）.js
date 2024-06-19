function solution(numbers) {
    const arr = numbers.sort((a, b) => b - a);
    const len = arr.length;
    
    return Math.max(arr[0]*arr[1], arr[len-1]*arr[len-2]);
}