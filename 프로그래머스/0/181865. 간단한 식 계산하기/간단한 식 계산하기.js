function solution(binomial) {
    const arr = binomial.split(' ');
    const [x, op, y] = arr;
    
    if (op === "+") return Number(x) + Number(y);
    if (op === "-") return x - y;
    if (op === "*") return x * y;
}