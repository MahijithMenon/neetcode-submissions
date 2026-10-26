class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = new Set();
       for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                if(nums[i]+nums[j]+nums[k]===0){
                    const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    result.add(triplet.join(','))
                }
            }
        }
       }
       console.log(result)
    return [...result].map(item =>
    item.split(',').map(Number)
);;
    }
}
