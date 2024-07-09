function solution(s) {
    const words = s.split(' ');
    
    const newWords = words.map(w => {
        let temp = '';
        for (let i=0; i<w.length; i++) {
            temp += i % 2 === 0 ? w[i].toUpperCase() : w[i].toLowerCase();
        }
        return temp;
    })
    
    return newWords.join(' ');
}