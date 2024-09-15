function solution(picture, k) {
    let result = [];
    
    picture.forEach(p => {
        const arr = [...p].map(p => p.repeat(k)).join('');
        for (let i=0; i<k; i++) {
            result.push(arr);
        }
    });
    
    return result;
}