function solution(code) {
    let mode = 0;
    let ret = '';
    const split = [...code];
    
    for (let i=0; i<split.length; i++) {
        // mode 0
        if (mode === 0) {
            if (split[i] === "1") {
                mode = 1;
            } else {
                if (i % 2 === 0) ret += split[i];   
            }
                
        // mode 1
        } else {
            if (split[i] === "1") {
                mode = 0;
            } else {
                if (i % 2 !== 0) ret += split[i];
            }
        }
    }
    
    if (ret === '') return "EMPTY";
    
    return ret;
}