/**Các phương thức tách chuỗi 
 * được dùng để tách chuỗi thành các phần nhỏ hơn 
 * và các phương thức phân tách ko thay đổi chuỗi gốc
 * mà trả về chuỗi mới 
 */

let string = 'Hello, have a nice day';

let string2 = string.slice(1);
let string3 = string.slice(0,5);
let string4 = string.slice(-2);
console.log(string); //Hello, have a nice day
console.log(string2); //ello, have a nice day
console.log(string3); //Hello 
console.log(string4); //ay

let string5 = string.substring(3);
let string6 = string.substring(1,4);
/**=> substring giúp phân tách chuỗi nhưng không chấp nhận số âm */
console.log(string5); //lo, have a nice day
console.log(string6); //ell 

let string7 = string.substr(1,4)
console.log(string7) //ello



