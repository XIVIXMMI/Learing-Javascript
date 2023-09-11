/*
?Template literal 
là 1 tính năng trong ES6 (JS2015)
còn được gọi là template string 
là những chuỗi được đặt trong cặp backtick ` `
=> Cho phép sử dụng dấu '' và "" trong cùng 1 chuỗi  
*/
var a = `I'm a "back-end" developer`
console.log(typeof(a)) 

/*
Ngoài những điều cơ bản như thế này 
backtick còn cho phép nhúng 1 biểu thức
1 hàm hay 1 giá trị nào đó trong chuỗi  */

var b = `i was born in ${2000+1}`
console.log(b)

var c = `my birthday is ${[14,9]+" "+2000+1}`
console.log(c)

/*
Bên cạnh đó việc sử dụng 1 cặp backtick
còn cho phép bạn tạo chuỗi trên nhiều dòng */

var d = `my favorite game is 
LoL
Valorant
Wildrift
Genshin`

console.log(d)

/*Có thể gọi biến bằng backtick */
var sum = 1 + 2 + 3
var e = `my sum is ${sum}`
console.log(e)