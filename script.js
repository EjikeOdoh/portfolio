"Ejike";

1;
3;

true;
false;

undefined;

// let name = "Obi is a boy";

const nin = 33.99943;

// console.log(typeof name)
// console.log(typeof nin)

// STRING Properties

// console.log(name.length)
// console.log(name.charAt(name.length - 1))
// console.log(name.indexOf('u'))

// console.log(name.includes('bad'))

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())


// console.log(name.slice(2,7))

// console.log(name.split(" "))

// console.log(typeof nin)

//Number
//String
//Date
//Math

// console.log(Math.trunc(nin))
// console.log(Math.round(nin))
// console.log(Math.ceil(nin))
// console.log(Math.floor(nin))

// console.log(Math.max(3,8,8.8, 10.3))
// console.log(Math.min(3,8,8.8, 10.3))

// Range we want is between 0 and 5
// console.log(Math.round(Math.random()*10))


/*
write code that will return a random letter from your name
*/



// let myName = "Ejike"


// Generate a random number between 0 and 10

// console.log(Math.random()*myName.length)

// console.log(
//  `
//  Math.ceil: ${Math.ceil(0.0001)}, 
//  Math.floor: ${Math.floor(9.9999)},
//  Math.round: ${Math.round(9.4)}
//  `
// )



// console.log(
//     `
//     Math.round: ${Math.round(0.012)}
//     `
//    )

// console.log(myName.charAt(5))


// console.log(Math.random()*10)


// let myName = `Ejike`;
// let theLength = myName.length;
// let rando = Math.floor(Math.random() * theLength);
// let randomChar = myName.charAt(rando);
// console.log(randomChar);

// let myFirstName;

// let name = "nebuchadnezzar";
// let highestIndex = name.length - 1;
// let randomIndex = Math.round(Math.random() * highestIndex)
// console.log(name.charAt(randomIndex))
// console.log(name.toUpperCase())

// let myName = `Ejike`;
// let theLength = myName.length;
// let rando = Math.floor(Math.random() * theLength);
// let randomChar = myName.charAt(rando);
// console.log(randomChar);

// console.log('\n')

// let myFriendsName = `Jude`;
// let myFriendsNameLength = myFriendsName.length;
// let randomFriendIndex = Math.floor(Math.random() * myFriendsNameLength);
// let randomCharForFriend = myFriendsName.charAt(randomFriendIndex);
// console.log(randomCharForFriend);

// function printRandomLetterFromName( person ) {
//     let myName = person;
//     let theLength = myName.length;
//     let rando = Math.floor(Math.random() * theLength);
//     let randomChar = myName.charAt(rando);
//     console.log(myName, rando, randomChar);
// }

// printRandomLetterFromName("Ejike")
// printRandomLetterFromName("Solomon")
// printRandomLetterFromName('Kmutay')


// function explain(name) {
//     console.log(name, "is explaining")
// }

// explain("Mercy")
// explain("Lovelyn")


// console.log(1+2)


// let somebodyName = "Blessing"
// console.log(somebodyName + " is good.")

// let explain = function(name) {
//     console.log(name, "is explaining")
// }

// const explain = (name) => {
//     console.log(name, "is explaining")
// }

// explain("Mercy")
// explain("Lovelyn")


// if (5 < 20) {
//     console.log('5 is greater')
// } else {
//     console.log('5 is not greater')
// }


function compare(num) {
    let benchmark = 50;
    if (num > benchmark) {
        console.log(num, "is greater than the benchmark")
    } else {
        console.log(num, "is less than the benchmark")
    }
}

// compare(5)

// 70 - 100 : A
// 60 - 69: B
// 50 - 59: C
// 45-49: D
// 40 - 44 : E
// 0 - 39 : F


//Comparison operators
// Greater than - >
// Less than - <
// Greater than or equal to - >=
// Less than or equal to - <=
// Equal to - ===


function grader(score) {
    if (score >= 70) {
        console.log('A')
    } else if (score >= 60 && score < 70) {
        console.log('B')
    } else if (score >= 50 && score < 60) {
        console.log('C')
    } else if (score >= 45 && score < 49) {
        console.log('D')
    } else if (score >= 40 && score < 45) {
        console.log('E')
    } else {
        console.log('F')
    }
}


// grader(63)

function tellGrade(score) {
    let result;
    result = score >= 70 ? 'A'
        : score >= 60 && score < 70 ? 'B'
            : score >= 50 && score < 60 ? 'C'
                : score >= 45 && score < 49 ? 'D'
                    : score >= 40 && score < 45 ? 'E'
                        : 'F'

    console.log('Result from TellGrade:', result)
}


// tellGrade(63)


// Loops

// While loop
// Print 0 to 10

// let number = 0
// while (number <= 10) {
//     // Log number to our console
//     console.log(number);

//     // increase value of number by 1
//     number = number + 1;
// }


// do {
//     console.log('Hello')
// } while (1 === 2);

// for (let i = 0; i < 10 ; i++) {
//     console.log(i)
// }


function checkNumber() {
    let favoriteNumber = prompt('Enter your favourite number')
    favoriteNumber = Number(favoriteNumber)

    // An even number is one that is divisible by 2 without a remainder
    let remainder = favoriteNumber % 2
    if (remainder === 0) {
        console.log(favoriteNumber + " is even")
        alert(favoriteNumber + " is even");
    } else {
        console.log(favoriteNumber, " is odd")
        alert(favoriteNumber + " is odd");
    }
}


checkNumber()

// let favoriteNumber = prompt('Enter your favourite number')
// favoriteNumber = Number(favoriteNumber)
// console.log(typeof favoriteNumber)

