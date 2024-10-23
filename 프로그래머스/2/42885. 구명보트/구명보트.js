function solution(people, limit) {
    let n = 0;
    let left = 0;
    let right = people.length - 1;
    
    people.sort((a, b) => a - b);
    
    while (left <= right) {
        if (people[left] + people[right] <= limit) left++;
        right--;
        n++;
    }
    
    return n;
}