let a = 'hello world'

console.log(a.charAt(0))
/* => trả về giá trị ứng với số thứ tự trong method,
nếu không có giá trị không gây lỗi và không trả về giá trị
*/

console.log(a.includes('l',0))
/*
Tìm kiếm ký tự l trong chuỗi a và bắt đầu tìm từ vị trí 0
và nếu như không truyền vào position vị trí 0
thì nó sẽ luôn bắt đầu tìm ở vị trí số 0
 */

console.log(a.startsWith('h',0))
/*
Phương thức này có cách truyền vào giống include
nhưng tác dụng là xác định xem từ vị trí position 
có được bắt đầu bằng ký tự truyền vào hay không
Nếu không truyền position thì sẽ bắt đầu từ 0 */

console.log(a.endsWith('d',11)) // true (so sánh 11 ký tự cuối cùng)
/**
 *  chuỗi.endsWith(chuỗiCon[, chiềuDài])
 *  Kiểm tra xem chuỗi a có kết thúc bằng ký tự 
 *  được truyền vào hay không 
 * ! Lưu ý: nếu có 2 ký tự trùng nhau thì chỉ true với ký tự đầu tiên
 */

console.log(a.indexOf('h')) //index = 0
console.log(a.indexOf('w',2)) //bắt đầu tìm kiếm từ vị trí index = 2
/**
 * chuỗi.indexOf(chuỗiCon[, vịTríBắtDầu])
 * được sử dụng để tìm vị trí index đầu tiên của chuỗi con bên trong chuỗi gốc
 */

console.log(a.lastIndexOf('hello')) // 0
console.log(a.lastIndexOf('world')) // 6
console.log(a.lastIndexOf('pizza')) // -1 khi không có chuỗi con trong chuỗi gốc trả về -1
console.log(a.lastIndexOf('world',4)) // truyền index vào sẽ cắt chuỗi từ vị trí cuối cùng
/**
 * chuỗi.lastIndexOf(chuỗiCon[, vịTríBắtDầu])
 * được sử dụng để tìm vị trí index cuối cùng của chuỗi con bên trong chuỗi gốc 
 */