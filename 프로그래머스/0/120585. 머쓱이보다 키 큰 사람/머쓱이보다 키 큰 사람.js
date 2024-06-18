function solution(array, height) {
    return array.filter(h => h - height > 0).length;
}