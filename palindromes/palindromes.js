const palindromes = function(input) 
{
    let letters = input.replace(/[.,\ /#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();

    console.log(letters);
    console.log(letters.split("").reverse().join(""));
    if(letters == letters.split("").reverse().join(""))
        return true;
    else
        return false;
}

module.exports = palindromes
