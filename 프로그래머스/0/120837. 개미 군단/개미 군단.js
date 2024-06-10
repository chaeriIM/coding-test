function solution(hp) {
    // 장군개미
    const a = Math.floor(hp / 5);
    hp = hp % 5;
    
    // 병정개미
    const b = Math.floor(hp / 3);
    hp = hp % 3;
    
    // 일개미
    const c = hp;
    
    return a + b + c;
}