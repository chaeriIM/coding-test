function solution(arr, queries) {
    // for (let i=0; i<queries.length; i++) {
    //     const [a, b] = queries[i];
    //     [arr[a], arr[b]] = [arr[b], arr[a]];
    // }
    // return arr;
    
    queries.forEach(([a, b]) => [arr[a], arr[b]] = [arr[b], arr[a]]);
    return arr;
}