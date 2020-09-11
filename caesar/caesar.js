const caesar = function(word, shift) 
{
    return word
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
}

function shiftChar(char, shift)
{
    const mod = (n, m) => (n % m + m) % m;
    const code = char.charCodeAt();
    const codeSet = code => (code < 97 ? 65 : 97);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) 
    {
        return String.fromCharCode(mod(code + shift - codeSet(code), 26) + codeSet(code));
    }
    return char;
}

module.exports = caesar