function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Vui lòng nhập số hợp lệ';
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    result = 'Không thể chia cho 0';
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = 'Phép tính không hợp lệ';
        }
    }

    document.getElementById('result').innerText = result;
}