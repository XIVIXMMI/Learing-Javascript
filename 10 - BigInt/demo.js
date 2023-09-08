/*
BigInt = Big Interger

- Đặc điểm cơ bản nhất của BigInt là 
cho phép làm việc với các số nguyên 
mà không bị giới hạn về độ lớn.
- Thực hiện được hầu hết các toán tử 
khác của number 

! Không thể cộng số number và bigint 

? Ép kiểu giữa các number và bigint 
có thể dẫn đến mất độ chính xác vì vậy
chỉ sử dụng kiểu dữ liệu bigint khi
các giá trị lớn hơn 2^53 và không 
ép kiểu giữa bigint và number 
*/

a = 123n

console.log(typeof(a)) // => bigint

b = BigInt(123)

console.log(typeof(b)) // => bigint

//Hexa hệ 8 ,chuyển thành số nguyên =15
c = BigInt("0xF") 

console.log(typeof(c))

console.log(a+c)