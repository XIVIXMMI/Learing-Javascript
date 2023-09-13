let s = ' Hello World, I\'m learning JavaScript '

console.log(s.toLocaleUpperCase()) // HELLO WORLD, I'M LEARNING JAVASCRIPT

console.log(s.toLowerCase()) // hello world, i'm learning javascript

console.log(s.repeat(2)) // Hello World, I'm learning JavaScriptHello World, I'm learning JavaScript

console.log(s.padStart(41,'Great')) // GreatHello World, I'm learning JavaScript
/**
 * chuỗi.padStart(độDài, kýTựThêm)
 * được sử dụng để thêm các ký tự vào đầu của chuỗi 
 * để đạt được một độ dài chuỗi mong muốn.
 * nó sẽ tự lặp phần ký tự thêm để đạt được độ dài là 41
 * và sẽ thêm vào đầu chuỗi
 */

console.log(s.padEnd(41,'Great')) //Hello World, I'm learning JavaScriptGreat
/**Tương tự padStart nhưng ngược lại
 */

console.log(s.trim()) //Hello World, I'm learning JavaScript
/**Dùng để cắt khoảng trắng giữa 2 đầu */

console.log(s.split(' ')) //(7) ['', 'Hello', 'World,', 'I'm', 'learning', 'JavaScript', '']
/**Dùng để cắt theo chuỗi con được truyền vào */

console.log(s.split(' ',2)) // (2) ['', 'Hello']
/**chuỗi.split([separator[, limit]])
 * Khi truyền vào limit sẽ lấy số chuỗi 
 * được cắt ra tương ứng với limit
 */

console.log(s.replace(' ','0')) // 0Hello World, I'm learning JavaScript 
/**chuỗi.replace(searchValue, replaceValue)
 * Thay thế ký tự đầu tiên bằng ký tự thay thế truyền vào 
 */

console.log(s.replace(/ /g,"0")) //0Hello0World,0I'm0learning0JavaScript0
/**Thay thế toàn bộ */

function replaceAll(macth,p1,p2,p3){
    return "Xin chào " + p1;
}
let s1 = "Hello John, Hello Peter, Hello Mary";
console.log(s1.replace(/Hello (John|Perter|Mary)/g,replaceAll)); //Xin chào John, Hello Peter, Xin chào Mary


// 5:37 - Các phương thức phân tách
// 5:58 - Phương thức slice
// 7:43 - Phương thức substring
// 8:22 - Phương thức substr