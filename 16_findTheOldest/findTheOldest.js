const findTheOldest = function(people) {
    for (let person of people){
        let age;
        if(person.yearOfDeath){
            age = person.yearOfDeath - person.yearOfBirth
        }
        else{
            age = new Date().getFullYear() - person.yearOfBirth
        }
        person.age = age;
    }
    people.sort((a,b) => b.age - a.age);
    console.table(people);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
