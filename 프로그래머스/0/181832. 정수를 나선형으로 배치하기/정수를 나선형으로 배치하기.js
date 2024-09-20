function solution(n) {
    const arr = Array.from({ length: n }, () => Array(n).fill(0));
    
    let num = 1;
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    
    while (top <= bottom && left <= right) {
        for (let i=left; i<=right; i++) {
            arr[top][i] = num++;
        }
        top++;
        
        for (let i=top; i<=bottom; i++) {
            arr[i][right] = num++;
        }
        right--;
        
        for (let i=right; i>=left; i--) {
            arr[bottom][i] = num++;
        }
        bottom--;
        
        for (let i=bottom; i>=top; i--) {
            arr[i][left] = num++;
        }
        left++;
    }
    
    return arr;
}