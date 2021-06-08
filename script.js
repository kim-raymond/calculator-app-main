function getOutput(){
    return document.getElementById("output").innerText;
}
function displayOutput(num){
    document.getElementById("output").innerText=num;
}
/*function displayOutput(num){
    if(num==""){
        document.getElementById("output").innerText=num;
    }
    else{
    document.getElementById("output").innerText=getFormatedNumber(num);
    }
}
function getFormatedNumber(num){
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}


function reverseNumberFormat(num){
    return Number(num.replace(/,/g,""));
}*/

var num = document.getElementsByClassName("num");
    for(let i = 0;i<num.length;i++){
        num[i].addEventListener('click',function(){
            var output = getOutput()
            if(output!=NaN){
                output=output+this.id;
                displayOutput(output);
            }
        })
    }
var res = document.getElementById("reset");
    res.addEventListener('click',function(){
        displayOutput("");
    })

 var del = document.getElementById("del");
        del.addEventListener('click',function(){
            var output = getOutput().toString();

            if(output){
                output=output.substr(0,output.length-1);
                displayOutput(output);
            }
        })

var operator = document.getElementsByClassName("operator");
    for(let i = 0;i<operator.length;i++){
        operator[i].addEventListener('click',function(){
            
        var output = getOutput();
        if(output!=""){
            output=output+this.id;
            displayOutput(output);
                
        }
    })
}

    
var equals = document.getElementById("=");
    equals.addEventListener('click',function(){

        let result = getOutput()
        if(result!=""){
        result= eval(result);
        displayOutput(result);
        }
    })