class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(let ch of nums){
            map.set(ch,(map.get(ch) || 0)+1)
        }
        const arr = new Array(nums.length + 1).fill().map(()=>[]);
        for(let [num,freq] of map.entries()){
            arr[freq].push(num);
        }
        const result = [];

for (let i = arr.length - 1; i >= 0; i--) {
    for (let num of arr[i]) {
        result.push(num);
        if (result.length === k) {
            return result;
        }
    }
}
        return result;
    }
}
