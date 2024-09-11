function solution(arr) {
    let result = 0;
    
    while (true) {
        let newArr = arr.map(v => {
            if (v >= 50 && v % 2 === 0) return v = v / 2;
            if (v < 50 && v % 2 === 1) return v = v * 2 + 1;
            return v;
        });
        
        if (arr.join('') === newArr.join('')) break;
        arr = newArr;
        result++;
    }
    return result;
}