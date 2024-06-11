function solution(my_string) {
    const num = my_string.replace(/[^0-9]/g, '');
    return [...num].sort((a, b) => a - b).map(Number);
}