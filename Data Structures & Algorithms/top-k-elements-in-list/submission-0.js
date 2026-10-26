class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(let i =0;i<nums.length;i++){
            map.set(nums[i],((map.get(nums[i]) || 0)+1))
        }
        const arr = Array.from(map.entries());
        console.log(arr,'::sdsd')
        const newArr=arr.sort((a,b)=>b[1]-a[1]).map(a=>a[0]).slice(0,k);
        return newArr;
    }
}
