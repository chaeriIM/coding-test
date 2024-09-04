function solution(str_list) {
    const i = str_list.findIndex(str => str === 'l' || str === 'r');
    
    if (i === -1) return [];
    if (str_list[i] === 'l') return str_list.slice(0, i);
    if (str_list[i] === 'r') return str_list.slice(i + 1);
}