const friendSamane = {
    name: 'Samane',
    height: 160,
    age: 21
};

const friendSara = {
    name: 'Sara',
    height: 160,
    age: 21
};

const calculateScore = (friend) => {
    return friend.height + friend.age * 5;
}

const samaneScore = calculateScore(friendSamane);
const saraScore = calculateScore(friendSara);

if (samaneScore > samaneScore) {
    console.log(friendSamane.name + ' won');
} else if (samaneScore === samaneScore) {
    console.log('draw');
} else {
    console.log(friendSara.name + ' won');
}

const friendJohn = {
    name: 'John',
    height: 180,
    age: 21
}

const johnScore = calculateScore(friendJohn);

if (samaneScore > johnScore && samaneScore > saraScore) {
    console.log(friendSamane.name + ' won');
} else if (johnScore > samaneScore && johnScore > saraScore) {
    console.log(friendJohn.name + ' won');
} else if (saraScore > samaneScore && saraScore > johnScore) {
    console.log(friendSara.name + ' won');
} else {
    console.log('draw');
}