function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    for (let i=0; i<babbling.length; i++) {
        let b = babbling[i];
        
        for (let j=0; j<words.length; j++) {
            if (b.includes(words[j].repeat(2))) break;
            b = b.split(words[j]).join(' ');
        }
        
        if (b.split(' ').join('').length === 0) count++;
    }
    
    return count;
}