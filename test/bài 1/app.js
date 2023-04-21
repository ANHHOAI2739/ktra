    const $a = document.getElementById('input-a');
    const $b = document.getElementById('input-b');
    const $result = document.getElementById('result');


$result.onclick = () => {
    let a = $a.value;
    let b = $b.value;
    let sum = 0;
    if (a > b ) { alert ('không hợp lệ');    
    } else {
        for (let i = a; i <= b; i++) {
            let flag = 0;
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            if (i > 1 && flag == 0) {
                sum += i;
            }
        }     
        document.write("tổng các số nguyên tố từ " + a + " đến " + b + " là: " + sum);
    }   
}


