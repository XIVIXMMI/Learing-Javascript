console.log(typeof(3));


let t = 1 

t++ //thực hiện xong dòng code này mới cộng
++t //cộng rồi thực hiện dòng code này

console.log(t)

//đối với js ta có thể đặt 1 dấu + trước 1 giá trị nào đó để nó chuyển thành giá trị số

let a ='a'

console.log(typeof(+a))
console.log(+a) // => kết quả in ra sẽ là NaN

//đối với dấu - cũng tương tự 
console.log(-['-2']) // => kết quả trả về là 2 
console.log(typeof(-a)) // kiểu dữ liệu số 

console.log(0.1 + 0.2) // =>> 0.30000000000000004
/*
Nguyên nhân của việc này có thể được hiểu là 
Để lưu trữ các số máy tính sẽ chuyển các số này về dạng nhị phân 
nhân không phải số này cũng có thể biểu diễn chính xác dưới dạng số nhị phân 
Và điều này tạo ra sai số 
 */