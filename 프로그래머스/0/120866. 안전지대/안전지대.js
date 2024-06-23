function solution(board) {
    const row = board.length;
    const col = board[0].length;
    
    const direction = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],         , [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    
    const danger = board.map(b => b.slice());
    
    for (let r=0; r<row; r++) {
        for (let c=0; c<col; c++) {
            if (board[r][c] === 1) {
                danger[r][c] = 1;
                
                direction.forEach(([a, b]) => {
                    const nr = r + a;
                    const nc = c + b;
                    
                    if (nr>=0 && nr<row && nc>=0 && nc<col) {
                        danger[nr][nc] = 1;
                    }
                })
            }
        }
    }
    
    let count = 0;
    for (let i=0; i<row; i++) {
        for (let j=0; j<col; j++) {
            if (danger[i][j] === 0) {
                count++;
            }
        }
    }
    return count;
}