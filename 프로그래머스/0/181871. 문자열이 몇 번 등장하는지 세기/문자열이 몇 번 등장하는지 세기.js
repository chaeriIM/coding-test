function solution(myString, pat) {
    let i = myString.indexOf(pat);
    let count = 0;
    
    while (i !== -1) {
        count++;
        i = myString.indexOf(pat, i+1);
    }
    
    return count;
}