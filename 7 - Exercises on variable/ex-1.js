var t = 3;
var u = 4;

{
    var t = 5;
    var u = 6;
    console.log(t,u);
}

console.log(t,u);

/*=> Kết quả sẽ trả về là 
5 6 
5 6 
do var là biến toàn cục và có thể ghi đè nên việc biến t và u bị khai báo thêm lần nữa
sẽ bị ghi đè giá trị mới lên giá trị cũ
*/  

