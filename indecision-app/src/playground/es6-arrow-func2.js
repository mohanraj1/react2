// argument object - no longer bound with arrow functions
// this keyword - no longer bound

const add = function(a, b) {
    // Using arguments is allowed in normal function
    console.log(arguments)
    console.log(arguments[0])
    return a + b;
};

console.log(add(1,2))

// More than 2 parameters are allowed. Not possible in arrow
console.log(add(1,2,3))

const addArrow = (a, b) => a + b;

console.log(addArrow(3,4))

// User class has properties and methods
const user = {
    name : 'mohand',
    cities : ['one', 'two', 'three'],

    printPlacesLived : function() {
        console.log(this.name);
        console.log(this.cities);
    },

    printPlacesLivedForEach : function() {
        console.log(this.name);
        console.log(this.cities);
        // Workaround
        const that = this;
        /***************************************************** */
        //function is called 3 times for each city

        this.cities.forEach(function(city) {
//*********************************************************/ 
            //this.name is not accessible because anonymous does not have access to "this"
            //use workaround  const that = this
            //console.log(this.name + city) 
           console.log(that.name + ' ' + city) 
        });
    },
    
    printPlacesLivedArrowForEach : function() {
        console.log(this.name);
        console.log(this.cities);
        /******************************************************************* */
        // With arrow function uses "this" from the class it created it
        this.cities.forEach( (city) => {            
           console.log(this.name + ' ' + city) 
        });
    },

    //********************Two arrow nested issue - 2md arrwo function can't access "this"*******************/
    printPlacesLivedArrowForEach2 : () => {
        console.log(this.name);
        console.log(this.cities);
        // This won't work because this arrow function does not bind with previous method.
        this.cities.forEach( (city) => {            
           console.log(this.name + ' ' + city) 
        });
    },
    /*************Use this pattern******************************* (*/
    printPlacesLivedArrowPatternToUseForEach(seperator) {
        console.log(this.name);
        console.log(this.cities);
        console.log(seperator);
        /******************************************************************* */
        // With arrow function uses "this" from the class it created it
        this.cities.forEach( (city) => {            
           console.log(this.name + seperator + city) 
        });
    },


    // map is similar to foreach
    /*

    forEach() method doesn’t actually return anything (undefined). 
    It simply calls a provided function on each element in your array. 
    This callback is allowed to mutate the calling array.
    Meanwhile, the map() method will also call a provided function on every element in the array. 
    The difference is that map() utilizes return values and actually returns a new Array of the same size.

*/
    printPlacesLivedMap() {
        return this.cities.map( (city) => this.name + ' has lived in' + city + '!');
         
        // return this.cities.map( (city) => {            
        //    return this.name + ' has lived in' + city + '!';
        // });        
    }
};

console.log(user.printPlacesLived());
console.log(user.printPlacesLivedForEach());
console.log(user.printPlacesLivedArrowForEach());
//console.log(user.printPlacesLivedArrowForEach2());
console.log("printPlacesLivedArrowPatternToUseForEach");
console.log(user.printPlacesLivedArrowPatternToUseForEach("--->"));

console.log(user.printPlacesLivedMap());

const multipler = {
    nums : [1,2,3],
    
    // Returns a new array
    multiply(muliplier) {
        return this.nums.map((num) => num * muliplier);
    }
};

console.log(multipler.multiply(5));

