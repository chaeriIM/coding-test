function solution(k, score) {
    let honor = [];
    let result = [];
    
    for (let i=0; i<score.length; i++) {
        if (i < k) {
            honor[i] = score[i];
            result.push(Math.min(...honor));
        } else {
            honor[i] = score[i];
            honor.sort((a, b) => b - a);
            result.push(honor[k - 1]);
        }
    }
    return result;
}