function solution(name, yearning, photo) {
    let obj = {};
    
    for (let i=0; i<name.length; i++) {
        obj[name[i]] = yearning[i];
    }
    
    return photo.map(p => p.reduce((acc, cur) => acc + (obj[cur] || 0), 0));
}