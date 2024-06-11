function countYaksu(n) {
    let count = 0;
    for (let i=1; i<=n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
}

function solution(n) {
    let count = 0;
    for (let i=4; i<=n; i++) {
        if (countYaksu(i) >= 3) {
            count++;
        }
    }
    return count;
}