function solution(num_str) {
    return [...num_str].reduce((a, b) => a + Number(b), 0);
}