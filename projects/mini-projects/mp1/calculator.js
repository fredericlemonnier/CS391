function calculator(func){
    let out = 0;
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let output = document.getElementById("result")
    let tongue= document.querySelector('.tongue')
    n2 = Number(n2);
    n1 = Number(n1);
    if (func === '+'){
        out = n1 + n2;
    } else if(func === '-'){
        out = n1 - n2;
    } else if( func === '*') {
        out = n1 * n2;
    } else if( func === '/'){
        if(n2 === 0){
            output.innerHTML = 'Error: Division by zero';
            return;
        }

        out = n1 / n2;

    } else if(func === '**') {
        out = n1
        for(let i = 1; i < n2; i++){
            out = out * n1;
        }

    }
    let strOut = out.toString();
    tongue.style.display = 'flex'
    output.innerHTML= strOut;
}