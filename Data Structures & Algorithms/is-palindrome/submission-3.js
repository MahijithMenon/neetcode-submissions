class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sLower = s.toLowerCase();
        let left = 0;
        let right = sLower.length-1;

        while(left<right){
           while(left<right && !isAlphaNum(sLower[right])){
            right--;
           }
           while(left<right && !isAlphaNum(sLower[left])){
            left++;
           }
           if(sLower[left]!==sLower[right]){
            return false;
           }
           console.log(sLower[left],sLower[right])
           right--;
           left++;
            
        }
        return true;
    }
}

   function isAlphaNum(c){
        if((c>='a' && c<='z') || (c>='0' && c<='9') ){
            return true;
        }
        return false;
    }
