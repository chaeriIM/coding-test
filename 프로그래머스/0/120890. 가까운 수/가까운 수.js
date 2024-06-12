function solution(array, n) {
    const sort = array.sort((a, b) => a - b);
    const diff = sort.map(num => Math.abs(num - n));
    const index = diff.indexOf(Math.min(...diff));
    return array[index];
}