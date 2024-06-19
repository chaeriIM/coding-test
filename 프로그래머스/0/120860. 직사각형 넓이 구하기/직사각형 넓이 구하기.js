function solution(dots) {
    const [A, B, C, D] = dots.sort();
    
    return Math.abs(C[0] - A[0]) * Math.abs(B[1] - A[1]);
}