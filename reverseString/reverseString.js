const reverseString = function(str) 
{
    let arr = str.split("");
    let result = [arr.length-1];
    for(let i = 0; i<=arr.length;i++)
    {
        result[i] = arr[arr.length - i];
        
    }
    let answer = result.join("");
    console.log(answer);
    return answer;
}
module.exports = reverseString
