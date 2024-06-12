function solution(num_list) {
    const sum = num_list.reduce((a, b) => a + b, 0);
    const mul = num_list.reduce((a, b) => a * b, 1);
    
    if (mul < sum * sum) {
        return 1;
    } else {
        return 0;
    }
}