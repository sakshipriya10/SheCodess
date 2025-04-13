function fun(){
    let num1 = document.getElementById("height").value;
    let num2 = document.getElementById("weight").value;
    let met = parseFloat(num1) / 100;
    let square = parseFloat(met * met);
    let bmi = parseFloat(num2) / square;

    if(num1 === "" || num2 === ""){
        document.getElementById("bmi-value").innerHTML = "";
            document.getElementById("bmi-count").innerHTML = "";
        document.getElementById("bmi-count").innerHTML = "Please fill all the fields";
        document.getElementById("bmi-count").style.color = "black";
    }
    else{
        if(bmi.toFixed(2) < 18.6){
            document.getElementById("bmi-value").innerHTML = "Under Weight: ";
            document.getElementById("bmi-count").innerHTML = bmi.toFixed(2);
            document.getElementById("bmi-value").style.color = "red";
            document.getElementById("bmi-count").style.color = "red";
        }
        else if(bmi.toFixed(2) >= 18.6 && bmi.toFixed(2) < 24.9){
            document.getElementById("bmi-value").innerHTML = "Normal: ";
            document.getElementById("bmi-count").innerHTML = bmi.toFixed(2);
            document.getElementById("bmi-value").style.color = "green";
            document.getElementById("bmi-count").style.color = "green";
        }
        else{
            document.getElementById("bmi-value").innerHTML = "Over Weight: ";
            document.getElementById("bmi-count").innerHTML = bmi.toFixed(2);
            document.getElementById("bmi-value").style.color = "red";
            document.getElementById("bmi-count").style.color = "red";
        }
    }  
}