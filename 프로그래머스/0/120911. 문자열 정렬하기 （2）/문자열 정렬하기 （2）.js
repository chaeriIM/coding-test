function solution(my_string) {
    const lower = my_string.toLowerCase();
    return [...lower].sort().join('');
}