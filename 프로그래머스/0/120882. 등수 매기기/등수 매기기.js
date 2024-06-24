function solution(score) {
    const avg = score.map(([a, b]) => (a + b) / 2);
    const sort = [...avg].sort((a, b) => b - a);
    return avg.map(v => sort.indexOf(v) + 1);
}