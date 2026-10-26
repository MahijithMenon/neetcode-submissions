class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = [];
        let right = [];
        let maxHeightLeft = 0
        let maxHeightRight = 0
        let count=0;
        for(let i=0;i<height.length;i++){
            maxHeightLeft=Math.max(maxHeightLeft,height[i]);
            left[i]=maxHeightLeft
        }
        for(let i=height.length-1;i>=0;i--){
            maxHeightRight=Math.max(maxHeightRight,height[i]);
            right[i]=maxHeightRight
        }
        for(let i=0;i<height.length;i++){
            let min = Math.min(left[i],right[i])
            count=count + min-height[i];
        }
        console.log(left)
        console.log(right)
        return count;
    }
}
