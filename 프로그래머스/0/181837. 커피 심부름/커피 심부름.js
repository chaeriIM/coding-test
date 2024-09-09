function solution(order) {
    let result = 0;
    
    order.forEach(o => {
       if (o.includes('americano') || o === 'anything') {
           result += 4500;
       } else if (o.includes('cafelatte')) {
           result += 5000;
       }
    });
    
    return result;
}