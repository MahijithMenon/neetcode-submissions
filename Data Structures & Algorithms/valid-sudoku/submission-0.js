class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
     let rows = new Array(9).fill(0).map(()=>new Set())   
     let cols = new Array(9).fill(0).map(()=>new Set())   
     let box = new Array(9).fill(0).map(()=>new Set())   

     for (let i =0;i<9;i++){
        for( let j=0;j<9;j++){
            const value = board[i][j];
            if (value === '.') continue;
            const boxIndex = Math.floor(i/3) *3 + Math.floor(j/3)

            if(rows[i].has(value) || cols[j].has(value) || box[boxIndex].has(value) ){
                return false;
            }

            rows[i].add(value)
            cols[j].add(value)
            box[boxIndex].add(value);
        }
     }
        return true;
    }
}
