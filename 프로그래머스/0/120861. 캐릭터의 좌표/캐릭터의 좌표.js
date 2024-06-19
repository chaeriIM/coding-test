function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    const maxX = Math.floor(board[0]/2);
    const maxY = Math.floor(board[1]/2);
    
    keyinput.forEach(key => {
        if (key === 'up' && y < maxY) y++;
        if (key === 'down' && y > -maxY) y--;
        if (key === 'right' && x < maxX) x++;
        if (key === 'left' && x > -maxX) x--;
    })
    
    return [x, y];
}