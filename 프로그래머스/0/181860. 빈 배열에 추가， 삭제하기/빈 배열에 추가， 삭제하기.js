function solution(arr, flag) {
    let X = [];
    
    for (let i=0; i<flag.length; i++) {
        flag[i] ? X.push(...Array(arr[i] * 2).fill(arr[i])) : X.splice(-arr[i]);
    }
    
    return X;
}