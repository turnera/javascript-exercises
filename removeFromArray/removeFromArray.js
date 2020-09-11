const removeFromArray = function(arr) 
{   
    let args = Array.from(arguments);

    for(let j = 1; j<args.length;j++)
    {
        for(let i = 0; i<arr.length; i++)
        {
            if(arr[i] === args[j])
                arr.splice(i, 1);
        }
    }
    return arr;
}

module.exports = removeFromArray
