
/*
?AND bitwise operator
Toán tử & thực hiện phép toán AND bitwise giữa các bit của hai số. 
Nếu cả hai bit tương ứng đều là 1, kết quả là 1; ngược lại, kết quả là 0. */
var a = 5;    // 5: 0101
var b = 3;    // 3: 0011
var result = a & b; // 1: 0001

/*
?OR bitwise operator
Toán tử | thực hiện phép toán OR bitwise giữa các bit của hai số. 
Kết quả là 1 nếu ít nhất một trong hai bit tương ứng là 1. */
var a = 5;    // 5: 0101
var b = 3;    // 3: 0011
var result = a | b; // 7: 0111

/*
?XOR bitwise operator
Toán tử ^ thực hiện phép toán XOR bitwise giữa các bit của hai số. 
Kết quả là 1 nếu một trong hai bit tương ứng là 1, nhưng không phải cả hai đều là 1. */
var a = 5;    // 5: 0101
var b = 3;    // 3: 0011
var result = a ^ b; // 6: 0110

/*
?NOT bitwise operator
Toán tử ~ thực hiện phép toán NOT bitwise trên từng bit của một số. 
Nó sẽ đảo ngược các bit 0 thành 1 và ngược lại. Kết quả là một số nguyên âm. */
var a = 5;     // 5: 0101
var result = ~a; // -6: 1010

/*
?Left Shift bitwise operator
Toán tử << thực hiện phép toán dịch trái các bit của một số nguyên. 
Các bit bên trái sẽ bị loại bỏ và các bit bên phải sẽ được thêm vào với giá trị 0. */
var a = 5;      // 5: 0101
var result = a << 2; // 20: 10100

/*
?Right Shift bitwise operator
Toán tử >> thực hiện phép toán dịch phải các bit của một số nguyên. 
Các bit bên phải sẽ bị loại bỏ và các bit bên trái sẽ được thêm vào với giá trị 0 (nếu số dương) hoặc 1 (nếu số âm). */
var a = 16;     // 16: 10000
var result = a >> 2; // 4: 0001

