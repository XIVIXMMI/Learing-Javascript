var u = 'Hello World';
var i = 'Have a good day';

{
    let u = 14;
    let i = 9;
    console.log(u,i);
}

console.log(u,i);

/*kết quả trả về 
14 9
Hello World Have a good day
=> do biến let là biến cục bộ có phạm vi sử dụng trong 1 khối code mà nó được khai báo
nên sẽ không bị ảnh hưởng bởi biến var bên ngoài
lưu ý khi biến được khai báo bằng var sẽ không được khai báo lại bằng let
nhưng trong trường hợp này, let nằm trong 1 khối code riêng 
nên nó sẽ được ưu tiên sử dụng giá trị của riêng nó trong khối code
=> biến cục bộ sẽ được ưu tiên sử dụng hơn biến toàn cục 
*/