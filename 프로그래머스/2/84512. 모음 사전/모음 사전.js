function solution(word) {
    const alpha = ['A', 'E', 'I', 'O', 'U'];
    const count = [781, 156, 31, 6, 1];
    
    let result = 0;
    
    for (let i=0; i<word.length; i++) {
        const index = alpha.indexOf(word[i]);
        result += index * count[i] + 1;
    }
    
    return result;
}