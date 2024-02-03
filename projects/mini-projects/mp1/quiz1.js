function checkAge(){

    let input=document.getElementById("check").value;
    let output= document.getElementById("error-text");




    if(!Number.isInteger(Number(input))){
        if(Number(input) % 1 != 0){
            output.innerHTML="Please no decimals thanks";
            document.getElementById("img").style.visibility="hidden";
            document.getElementById("alt").style.visibility="visible";

        }else{
            output.innerHTML="Please input a number";
            document.getElementById("img").style.visibility="hidden";
            document.getElementById("alt").style.visibility="visible";

        }


    }

    else if(Number(input) < 0){
        output.innerHTML="Negative numbers are not allowed"
        document.getElementById("img").style.visibility="hidden";
        document.getElementById("alt").style.visibility="visible";

    }
    else if(Number(input) < 18){
        output.innerHTML="You are too young"
        document.getElementById("img").style.visibility="hidden";
        document.getElementById("alt").style.visibility="visible";

    }
    else if (Number(input) >= 18 && Number(input <= 120)){
        output.innerHTML="WELCOME"
        document.getElementById("img").style.visibility="visible";
        document.getElementById("alt").style.visibility="hidden";

    }
    else{
        output.innerHTML="YOU MAY NOT SEE THE CONTENT"
        document.getElementById("alt").style.visibility="visible";
        document.getElementById("img").style.visibility="hidden";


    }



}