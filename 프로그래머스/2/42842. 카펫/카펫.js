function solution(brown, yellow) {
    let sum = brown + yellow;
    
    for (let h=3; h<=sum; h++) {
        if (sum % h === 0) {
            let w = sum / h;
            
            if ((w - 2) * (h - 2) === yellow) {
                return [w, h];
            }
        }
    }
}