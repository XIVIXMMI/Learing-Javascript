/*
Chuỗi là tất cả những gì được đặt trong " " hoặc ' '

Để thuận tiện cho việc thao tác với chuỗi
thì các ký tự trong chuỗi sẽ được đánh số ký tự
từ trái sang phải và ký tự đầu tiên có stt là 0

!Không thể thay đổi chuỗi bằng cách thực hiện phép gán
Gán không gây lỗi nhưng không thay đổi giá trị 

?Độ dài của chuỗi
Ta dùng thuộc tính lenght để thể hiện độ dài của chuỗi 

Khi sử dụng escape character thì phải sử dụng lệnh console.log 

?So sánh chuỗi
khi so sánh chuỗi sẽ dựa vào vị trí của từng ký tự của chuỗi 
trong bảng mã ASCII
so sánh từ ký tự đầu tiên bên trái đếm qua
so sánh theo từ cặp ký tự có cùng vị trí cho đến khi có sự khác biệt 
thì mới so xem ký tự nào lớn hơn hoặc nhỏ hơn

?Cộng chuỗi 
có thể cộng số và chuỗi với nhau => 123 + '45' = 12345
khi này kiểu dữ liệu số sẽ chuyển thành chuỗi và cộng lại với nhau


*/

var s1 = 'abc'
var s2 = '123'

String('abc'); //dùng contructor String để tạo chuỗi 

"abc".toString();

var s3 = 'HelloWorld';
console.log(s3[1]);

var s4 = "I'm a developer"

var s5 = 'I\'m a developer' //escape character
var s6 = "I\"m a developer"
var s7 = "I\\m a developer"
var s8 = "I\tm a developer"
var s9 = "I\bm a developer"
var s10 = "I\nm a developer"

