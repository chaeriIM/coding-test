function solution(myStr) {
    let result = myStr.split(/[abc]/).filter(Boolean);
    
    return result.length === 0 ? ["EMPTY"] : result;
}