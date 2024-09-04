function solution(num_list) {
    let result = 0;
    
    num_list.forEach(num => {
        while (num !== 1) {
            if (num % 2 === 0) {
                num /= 2;
                result++;
            } else {
                num = (num - 1) / 2;
                result++;
            }
        }
    });
    
    return result;
}