function solution(phone_number) {
    const change = phone_number.substr(0, phone_number.length - 4);
    
    return phone_number.replace(change, '*'.repeat(change.length));
}