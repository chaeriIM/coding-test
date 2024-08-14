function solution(sizes) {
    const arr = sizes.map(size => size[0] < size[1] ? [size[1], size[0]] : [size[0], size[1]]);
    
    const width = [];
    const height = [];
    
    for (let i=0; i<arr.length; i++) {
        width.push(arr[i][0]);
        height.push(arr[i][1]);
    }
    
    return Math.max(...width) * Math.max(...height);
}