class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) { 
      const set = new Set(nums);
      let length = 0;

      for (let ch of set ) {
        if(!set.has(ch-1)){
            let current = ch;
            let count = 1;
            while(set.has(current+1)){
                count++;
                current++;
            }
            length=Math.max(length,count)   
        }
      }
      return length 
    }
}
