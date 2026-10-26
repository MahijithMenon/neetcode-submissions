class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let min_buy_price=prices[0]
        for(let i=1;i<prices.length;i++){
            if(min_buy_price>prices[i]){
                min_buy_price=prices[i];
            }else{
              let currentProfit = prices[i] - min_buy_price;
              console.log(currentProfit,':hkjhfgjk')
              console.log(prices,':hkjhfgjk')
              console.log(min_buy_price,':hkjhfgjk')
              maxProfit = Math.max(maxProfit,currentProfit)
            }
        }
        return maxProfit 
    }
}
