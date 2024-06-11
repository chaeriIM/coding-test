function solution(my_string) {
    let result = '';
    const aeiou = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i=0; i<my_string.length; i++) {
        if (!aeiou.includes(my_string[i])) {
            result += my_string[i];
        }
    }
    return result;
}