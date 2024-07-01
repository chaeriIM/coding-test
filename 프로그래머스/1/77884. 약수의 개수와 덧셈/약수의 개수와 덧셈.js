function yaksu(n) {
    const arr = [];
    
    for (let i=0; i<=n; i++) {
        if (n % i === 0) arr.push(i);
    }
    
    return arr.length;
}

function solution(left, right) {
    let result = 0;
    
    for (let n=left; n<=right; n++) {
        yaksu(n) % 2 === 0 ? result += n : result -= n;
    }
    
    return result;
}