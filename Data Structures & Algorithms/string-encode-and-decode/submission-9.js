class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";
        for (let i=0;i<strs.length;i++){
            str += strs[i].length+'#' + strs[i];
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // decode(str) {
    //     console.log(str,';dssdffsd')
    //     let arr = [];
    //     let i = 0;
    //     while (i < str.length){
    //         let length = 0;
    //         while(str[i]!=="#"){
    //             length = length * 10 + Number(str[i]);
    //             i++;
    //         }
    //         i++;
    //         let word = ""
    //         for (let j=0;j<length;j++){
    //             word+=str[i]
    //             i++;
    //         }
    //         arr.push(word);
    //     }
    //     return arr;
    // }

    decode(str) {
    let arr = [];
    let i = 0;

    while (i < str.length) {
        let length = 0;

        while (str[i] !== '#') {
            length = length * 10 + Number(str[i]);
            i++;
        }

        i++; // skip '#'

        let word = str.substring(i, i + length);
        arr.push(word);

        i += length;
    }

    return arr;
}
}
