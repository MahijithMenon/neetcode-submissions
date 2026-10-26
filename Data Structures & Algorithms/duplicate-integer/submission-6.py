class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        num = {}
        for a in nums:
            if a in num:
                return True;
            else:
                num[a] = 1;    
        
        return False;