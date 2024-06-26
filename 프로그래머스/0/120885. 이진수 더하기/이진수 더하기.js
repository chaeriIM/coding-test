function solution(bin1, bin2) {
    const decimal = parseInt(bin1, 2) + parseInt(bin2, 2);
    
    return decimal.toString(2);
}