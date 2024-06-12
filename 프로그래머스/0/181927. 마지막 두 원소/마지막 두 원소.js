function solution(num_list) {
    const l = num_list.length;
    const a = num_list[l - 1]; // 마지막 원소
    const b = num_list[l - 2]; // 그전 원소
    
    a > b ? num_list.push(a - b) : num_list.push(a * 2);
    
    return num_list;
}