class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let arr = new Array(26).fill(0);
        let maxFreq = 0;
        let maxWindow = 0;
        let left = 0;

        for(let right =0; right<s.length; right++){
            arr[s.charCodeAt(right)-'65']++;
            maxFreq= Math.max(maxFreq,arr[s.charCodeAt(right)-'65']);
            let windowLength = right -left +1 ;

              while (windowLength - maxFreq > k) {
                arr[s.charCodeAt(left) - 65]--;
                left++;

                windowLength = right - left + 1;
            }
             windowLength = right -left +1 ;
             maxWindow=Math.max(maxWindow,windowLength)
        }
    return maxWindow;
    }
}
