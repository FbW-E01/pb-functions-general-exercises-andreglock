const logThree = (parameter) => console.log(`1: ${parameter} ${parameter} ${parameter}`);

logThree('Hello');

const returnFive = (parameter) => parameter + parameter + parameter + parameter + parameter;

console.log('2:', returnFive('cat'));

const multiReturn = (number, string) => {
    let value = '';
    for (let i = 0; i < number; i++) {
        value = value + string;
    }
    return value;
}

console.log('3:', multiReturn( 5, 'Dog'));

const maxNumber = (array) => Math.max(...array);

const numbers = [1,6,83,91,0,-4,1337,5];

console.log('4:', maxNumber(numbers));

const printIfDivisibleByTen = (number) => {
    if(typeof(number) !== 'number') {
        return 'no output';
    }
    if(number % 10 === 0) {
        return 'Even 10!';
    } else {
        return 'no output';
    }
}

for(let i = 0; i < 125; i++){
    console.log(`${i} ${printIfDivisibleByTen(i)}`);
}

const maxFive = (a, b, c, d, e) => Math.max(a, b, c, d, e);

console.log('6:', maxFive(2, 3, 3, 4, 13));

const isString = (input) => typeof(input) === 'string';

console.log('7:', isString('string'));

const areStrings = (a, b) => typeof(a) === 'string' && typeof(b) === 'string' ;

console.log('8:', areStrings('string', 8));

const getFirstWord = (string) => {
    let check = string.split(' ');
    check = check[0].split(',');
    check = check[0].split('.');

    return check[0];
}

console.log('9:', getFirstWord("Hello, hello world"));

const wordRepeater = (string) => {
    if(typeof(string) !== 'string') {
        return "Input isn't a string"
    }
    let check = string.split(' ');
    let newString = '';

    for (let i = 0; i < check.length; i++) {
        for (let j = 0; j < check.length; j++)
        newString = newString + check[i] + ' ';
    }

    return newString;
}

console.log('10:', wordRepeater('O M G ?'));

const firstLetter = (string) => string.slice(0, 1);

console.log('11:', firstLetter('Dog'));

const firstLetters = (string) => {
    if(typeof(string) !== 'string') {
        return "Input isn't a string"
    }
    let check = string.split(' ');
    let newString = '';

    for (let i = 0; i < check.length; i++) {
        newString = newString + check[i].slice(0, 1);
    }

    return newString;
}

console.log('12:', firstLetters('What You See Is What You Get'));

const checkLength = (input) => {
    let output = input.length;
    
    if (output === undefined) {
        return null;
    } else {
        return output;
    }
}

console.log('13:', checkLength(true));

const explode = (string) => {
    if (typeof(string) !== 'string') {
        return null;
    } else {
    return string.split('');
    }
}

console.log('14:', explode('R & D'));

const foo = (input) => input.includes('o');

console.log('15:', foo(""));
console.log('15:', foo("a"));
console.log('15:', foo("o"));
console.log('15:', foo("Cat"));
console.log('15:', foo("Tomato"));
console.log('15:', foo("Potato"));
console.log('15:', foo("Blanket"));
console.log('15:', foo("1"));

const bar = (input) => 'Dog' + input.slice(2);

console.log('16:', bar(""));
console.log('16:', bar("x"));
console.log('16:', bar("Cat"));
console.log('16:', bar("Foobar"));
console.log('16:', bar("Potato"));
console.log('16:', bar("Tomato"));
console.log('16:', bar("International Space Station"));