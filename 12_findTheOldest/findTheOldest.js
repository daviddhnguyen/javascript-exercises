const findTheOldest = function(people) {
    // calculates age and saves first person
    // updates entry if new person is older than current oldest person
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(
            oldest.yearOfBirth,
            oldest.yearOfDeath);
        const currentAge = getAge(
            currentPerson.yearOfBirth,
            currentPerson.yearOfDeath
        );
        return oldestAge < currentAge ? currentPerson:oldest;
    });
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
