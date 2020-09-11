const fibonacci = function(x) {
    let input = parseInt(x);
    if(input < 0)
        return "OOPS";
    
    else if(input <= 1)
        return input;
    else
    {
        return fibonacci(input-1) + fibonacci(input-2);
    }
}

module.exports = fibonacci
