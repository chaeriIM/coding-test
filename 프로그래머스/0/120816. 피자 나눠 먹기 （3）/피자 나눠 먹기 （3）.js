function solution(slice, n) {
    let pizza = 1;
    
    while(true) {
        if (n <= slice * pizza) {
            break;
        }
        pizza++;
    }
    
    return pizza;
    
    // return Math.ceil(n / slice)
}