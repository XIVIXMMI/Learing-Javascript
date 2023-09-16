/**
 *? Symbol Datatype
 * Symbol is one of the 7 primitive data types
 * 
 * Symbol
 * Number
 * BigInt
 * String
 * Boolean
 * Undifined
 * Null
 * 
 * => the 7 primitive data types 
 * ? Declare  
 *  Symbol(key) => 'key' can be a number, a string or any data types as long as it's valid
 * 
 * ? Uniqueness of Symbol
 * For the Symbol datatypes, each value is unique within a program.
 * Two symbol values cannot exist that are equal to each other,
 * except when assigned explicitly
 * 
 * ? Typecasting a symbol value
 * ! Cannot convert Symbol to Number 
 * Can convert Symbol to String, Array, Boolean
 */ 

a = Symbol()
b = Symbol()
c = a
console.log( a == b); // false : cause for the symbol datatype, each value is unique within a program.
console.log( a == c); // true : cause c = a => unique 

sb = Symbol('aa')

obj = {
    Name : "Evan",
    Age: 20,
    [sb]: "Two volka, one milk and three cookie comrade"
}

console.log(obj[sb])