function solution(babbling) {
    const regex = /^(aya|ye|woo|ma)+$/;
    let count = 0;
    
    babbling.forEach(b => {
        if (regex.test(b)) count++;
    })
    
    return count;
}