function solution(spell, dic) {
    return dic.filter(str => spell.every(s => str.includes(s))).length ? 1 : 2;
}