function solution(myString, pat) {
    let newStr = "";
    
    [...myString].forEach(str => {
        newStr += str === "A" ? "B" : "A";
    })
    
    return newStr.includes(pat) ? 1 : 0;
}