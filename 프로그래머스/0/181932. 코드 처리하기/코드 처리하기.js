function solution(code) {
    let mode = 0;
    let ret = '';
    
    for (let i=0; i<code.length; i++) {
        // mode 0
        if (mode === 0) {
            if (code[i] === "1") {
                mode = 1;
            } else {
                if (i % 2 === 0) ret += code[i];   
            }
                
        // mode 1
        } else {
            if (code[i] === "1") {
                mode = 0;
            } else {
                if (i % 2 !== 0) ret += code[i];
            }
        }
    }
    
    if (ret === '') return "EMPTY";
    
    return ret;
}