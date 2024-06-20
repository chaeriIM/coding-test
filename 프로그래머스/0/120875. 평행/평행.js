function getSlope(x1, x2) {
    return (x2[1] - x1[1]) / (x2[0] - x1[0]);   
}

function solution(dots) {
    const [a, b, c, d] = dots;
    
    if (getSlope(a, b) === getSlope(c, d)) return 1;
    if (getSlope(a, c) === getSlope(b, d)) return 1;
    if (getSlope(a, d) === getSlope(b, c)) return 1;
    
    return 0;
}