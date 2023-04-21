const $inputNumber = document.getElementById("input-number");
const $button = document.getElementById("input-button");


function numberOneTriangle() {
        let n = $inputNumber.value;
    if (n < 1 || n > 10) { alert ('không hợp lệ');    
    } else {
        for(let i = 1; i <= n; i++) {

            for(let j = 1; j <= i; j++) {
                document.write("*");
            }
            document.write("<br />");
        }
    }
}

$button.addEventListener("click",numberOneTriangle)
