function solution(myString) {
    const regex = /^[a-k]$/;
    let result = '';
    
    for (let i=0; i<myString.length; i++) {
        if (regex.test(myString[i])) {
            result += 'l';
        } else {
            result += myString[i];
        }
    }
    
    return result;
}