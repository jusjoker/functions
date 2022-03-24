function firstLetterName(name) {
    alert(`The name ${name} starts with the letter ${name[0]}`)
}

function divisibleByTwo(num) {
    if (num % 2 == 0) {
        return (`The number ${num} is divisible by 2: true`)
    } else {
        return (`The number ${num} is divisible by 2: false`)
    }
}

function largestNum(arr) {
    temp = 0;

    arr.forEach((element) => {
        if (temp < element) {
            temp = element;
        }
    });
    return temp
}

firstLetterName("Justin");
divisibleByTwo(3);
divisibleByTwo(17);
largestNum(arr = [2, 5, 8, 11, 14, 17, 20]);

console.log(divisibleByTwo(3))
console.log(divisibleByTwo(252))