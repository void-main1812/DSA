/**
 * @param {number[][]} accounts
 * @return {number}
 */

accounts = [[5, 4, 3, 7], [9, 6, 5]]        //sample Input

var maximumWealth = function (accounts) {
    let richest = 0
    for (let i = 0; i < accounts.length; i++) {
        let person = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            person = person + accounts[i][j]
        }

        person > richest ? richest = person : richest = richest;
    }
    console.log(richest)
};

maximumWealth(accounts);        // output: 20