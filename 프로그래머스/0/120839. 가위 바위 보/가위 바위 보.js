function solution(rsp) {
    const result = {
        '0': '5',
        '2': '0',
        '5': '2'
    }
    
    return rsp.split('').map(v => result[v]).join('');
}