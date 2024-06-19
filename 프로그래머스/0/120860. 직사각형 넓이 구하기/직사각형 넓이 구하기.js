function solution(dots) {
    const [A, B, C, D] = dots.sort();
    
    return Math.abs(D[0] - A[0]) * Math.abs(D[1] - A[1]);
}