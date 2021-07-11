/*
function <name>(<params>) {
    Body
}

const <name> = function(<params>) {
    Body
}

const <name> = (<params>) {
    Body
}
*/
//***********ES5*********************** */
function squarefunc(x) {
    return x * x;
};

// Shows up in chrome (F12) 
console.log(squarefunc(9));

const square = function (x) {
    return x * x;
};

console.log(square(8));

//**********************ES6***********************/
/*
    Arrow functions are anonymous
    const <name> = (<params>) => {
        Body
    }
*/

const squareArrow = (x) => {return x * x;};

// Arrow functions are anonymous - Concise Version *****No need for "return" for simple scenarios****************//
const squareArrowFancy = (x) => x * x;

console.log(squareArrow(10));
console.log(squareArrowFancy(12));

const firstName = (fullName) => fullName.split(' ')[0]

console.log(firstName("first last"));
