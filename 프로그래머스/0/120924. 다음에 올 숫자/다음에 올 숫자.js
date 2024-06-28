function solution(common) {
    const d = common[1] - common[0];
    const r = common[1] / common[0];
    const l = common.length;
    
    if (common[2] - common[1] === d) {
        return common[l - 1] + d;
    } else {
        return common[l - 1] * r;
    }
}