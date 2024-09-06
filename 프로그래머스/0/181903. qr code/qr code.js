function solution(q, r, code) {
    return [...code].map((c, i) => i % q === r ? code[i] : '').join('');
}