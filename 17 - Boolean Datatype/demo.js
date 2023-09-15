/**
* ?Boolean Data Type
* A Boolean has two possible values: true or false.
* It evaluates to true if it has a value and false if it doesn't.
* For example:
* 1 is true because it has a value.
* 0 is false because it doesn't have a value.
* Boolean returns true in the following cases:
* When it's not equal to 0.
* When it's not equal to -0.
* When an array is not null (contains at least one element).
* When it's explicitly set to true.
* When it represents an object (truthy).
* Null and undefined, when converted to Boolean data type, become false (falsy).
* When converting a Number data type to Boolean:
* 1 becomes true.
* 0 becomes false.
* When comparing two numbers, the result is a Boolean data type (true or false).
* Relational Operators (Toán tử quan hệ)
* These operators are used in multi-case conditions. For example:
* a > b && b > c.
* ? AND && :    (4 > 3 && 7 > 5) => true
*   Returns true if all conditions are true.
*   Returns false if one of conditions is false.
* ? OR || :     (4 < 3 || 5 > 2) => true
*   Returns true if one of conditions is true.
*   Returns false if all conditions are false.
* ? NOT != :    !(30 < 10) => !false => true
*   Returns true if condition is false
*   Returns false if condition is true 

 */

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(' ')) // true 

