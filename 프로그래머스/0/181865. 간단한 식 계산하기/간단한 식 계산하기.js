function solution(binomial) {
    const [x, op, y] = binomial.split(' ');
    
    if (op === "+") return Number(x) + Number(y);
    if (op === "-") return x - y;
    if (op === "*") return x * y;
}