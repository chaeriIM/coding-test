function solution(id_pw, db) {
    const [id, pw] = id_pw;
    
    for (const [dbId, dbPw] of db) {
        if (id === dbId) {
            if (pw === dbPw) {
                return "login";
            } else {
                return "wrong pw";
            }
        }
    }
    
    return "fail";
}