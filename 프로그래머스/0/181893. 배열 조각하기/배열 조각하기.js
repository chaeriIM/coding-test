function solution(arr, query) {
    query.forEach((q, i) => i % 2 ? arr.splice(0, q) : arr.splice(q + 1));
    return arr;
}