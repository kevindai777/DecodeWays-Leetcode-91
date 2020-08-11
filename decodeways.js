//Objective is to find the number of ways to decode a string of integers,
//given you can treat each number as it's alphabet counterpart starting from
//1 -> 'a' to 26 -> 'z'

let s = '226'


//O(n) solution that uses Dynamic Programming
//We check two things - the element prior as well as the two elements prior

let dp = new Array(s.length + 1).fill(0)
dp[0] = 1

//'0' has no alphabet interpretation
dp[1] = s.charAt(0) == '0' ? 0 : 1

for (let i = 2; i < dp.length; i++) {
    //Check two characters at a time ->
    //First check the single digit decode
    //Then check the double digit decode
    if (s[i - 1] != '0') {
        dp[i] += dp[i - 1]
    }
    
    let twoDigit = parseInt(s.substring(i - 2, i))
    if (twoDigit >= 10 && twoDigit <= 26) {
        dp[i] += dp[i - 2]
    }
}

return dp[s.length]