function solution(myString, pat) {
    const index = myString.lastIndexOf(pat);
    if (pat.length > 1) {
        return myString.slice(0, index+pat.length);
    }
    return myString.slice(0, index+1);
}