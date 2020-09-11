const sumAll = function(x, y) 
{   let sum = 0;
    let min, max;

    if(x>y)
    {
        max = x;
        min = y;
    }
    else
    {
        max = y;
        min = x;
    }

    if(x < 0 || y < 0 || typeof(x)!= "number" || typeof(y) != "number")
     return "ERROR"

    for(min; min<=max; min++)
    {
        sum += min;
    }

    return sum;
}

module.exports = sumAll
