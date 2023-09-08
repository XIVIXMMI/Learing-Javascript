/*
?Số khi đặt vào trong JavaScript sẽ có kiểu dữ liệu gì ?
    => Kiểu dữ liệu Number

?Infinity và -Infinity trong JavaScript lần lượt bằng với các giá trị nào 
    => 2^53-1 && -(2^53)-1

?Viết chương trình làm tròn số n, sau đó tính bình phương của số n, rồi in ra màn hình
var n=3.14;
console.log(Math.pow(parseInt(n),2))

?Đặc điểm cơ bản nhất của bigint 
    => Cho phép làm việc với các số nguyên

?Chỉ ra một số bitwise operator và tác dụng của nó 
    =>
  */

n = 3.54;
console.log(Math.pow(Math.round(n),2))

m = 5 // 0101
console.log(m<<2) //10100