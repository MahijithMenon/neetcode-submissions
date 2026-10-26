class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0;
        let end = heights.length-1;
        let maxNum = 0;
        while(start<end){
          const length = Math.min(heights[start],heights[end]);
          const width = end-start;
          let area = length * width;
            maxNum = Math.max(area,maxNum);
           if(heights[start]>heights[end]){
            end--;
           }else{
            start++;
           }
        }
        return maxNum
    }
}
