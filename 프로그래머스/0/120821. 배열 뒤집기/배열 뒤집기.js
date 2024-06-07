function solution(num_list) {
    let newList = [];
    for (let i = num_list.length - 1; i >= 0; i--) {
        newList.push(num_list[i]);
    }
    return newList;
    
    // return num_list.reverse();
}