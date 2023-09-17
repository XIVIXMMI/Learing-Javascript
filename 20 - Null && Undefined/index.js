var a = Boolean(null)

var b = String(null)

var c = Number(null)

var d = Object(null)

console.log(a) // false
console.log(b) // null 
console.log(c) // 0
console.log(d) // {}

console.log(typeof(null)) //  Object

function printf(a,b){
    console.log(a);
    console.log(b);
}

printf(); // => undefined 

/**Different between Null and Undefined
 * Undefined : the variable isn't exist => undefined is a value
 * Null : the variable is null => null is an object 
 */


