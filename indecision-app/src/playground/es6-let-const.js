var nameVar = "mohand";
//redefined. this is bad. not only reassign - we can redefine
var nameVar = "mohan";

console.log('nameVar', nameVar);

let nameLet = "sriya"
console.log('nameLet', nameLet)
nameLet = "deepthi" // With let, you can redefine it
console.log('nameLet', nameLet)

const nameConst = "constant"
console.log('nameConst', nameConst)

function getPetName()
{
    var petName = "hhhh"
    return petName;
}

getPetName();
console.log(getPetName());

// let is Block Level Scope ( if/for) while var is not
// var is function scoped
var fullName = "first last"

if (fullName) {
    var firstName = fullName.split(" ")[0]
    console.log(firstName)
}

console.log(firstName);

// const is Block Level Scope ( if/for) while var is not
// var is function scoped
var fullName = "first last"

if (fullName) {
    let firstName2 = fullName.split(" ")[0]
    console.log(firstName2)
}

console.log(firstName2);

