/*Kiểu dữ liệu Number cho phép tính toán chính xác nhất với các số
trong khoảng từ -(2^53)-1 đến 2^53-1 */
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)

console.log(Number.NEGATIVE_INFINITY)
console.log(Number.POSITIVE_INFINITY)

console.log(Number.isNaN(4)) // => If data is not a Number return true, else return false

console.log(Number.isFinite(5)) // => if the data is finite return true, else return false
//except NaN this method return false

console.log(Number.isInteger(6))//trả lại giá trị là true nếu giá trị là số nguyên

let a = 56.77777888877
console.log(a.toExponential())

console.log(Number.parseInt(a))

