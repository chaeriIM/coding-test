function solution(n, words) {
    let arr = [];
    
    for (let i=0; i<words.length; i++) {
        let person = ((i + 1) % n === 0 ? n : (i + 1) % n);
        let play = Math.ceil((i + 1)/n);
            
        if (i > 0 && words[i - 1].slice(-1) !== words[i][0]) {
            return [person, play];
        }
        
        if (arr.includes(words[i])) {
            return [person, play];
        }
        
        arr.push(words[i]);
    }
    
    return [0, 0];
}