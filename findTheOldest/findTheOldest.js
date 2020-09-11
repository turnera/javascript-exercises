let findTheOldest = function(obj) {
    for(let i = 0; i < obj.length; i++)
    {
        if(!obj[i].hasOwnProperty("yearOfDeath"))
            obj[i].yearOfDeath = new Date().getFullYear();

    }

    let ages = obj.map(x => x.yearOfDeath - x.yearOfBirth);
    ages.sort((a, b) => b-a);
    return obj.find(x => x.yearOfDeath - x.yearOfBirth == ages[0]);
}

module.exports = findTheOldest
