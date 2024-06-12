function solution(array, n) {
    // const a = array.map(num => Math.abs(num - n));
    // const index = a.indexOf(Math.min(...a));
    // return array[index];
    const sort = array.sort((a, b) => a - b);
    const diff = sort.map(num => Math.abs(num - n));
    const index = diff.indexOf(Math.min(...diff));
    return array[index];
}