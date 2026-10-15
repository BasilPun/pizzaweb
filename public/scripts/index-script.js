
let isValid = true;

document.getElementById("pizza-form").onsubmit = () =>{

    clearErrors();

    let fname = document.getElementById("fname").value.trim();
    if (fname === ""){
        document.getElementById("err-fname").style.display = "block";
        isValid = false;
    }

    let lname = document.getElementById("lname").value.trim();
    if (lname === ""){
        document.getElementById("err-lname").style.display = "block";
        isValid = false;
    }

    // let email = document.getElementById("email").value.trim();
    // if (email === ""){
    //     document.getElementById("err-email").style.display = "block";
    //     isFormValid = false;
    // }else{
    //     document.getElementById("err-email").style.display = "none";
    // }

    // Validate method: pickup or delivery
    let methodSelected = false;
    let methodButtons = document.getElementsByName("method");
    for (let i=0; i<methodButtons.length; i++) {
        if(methodButtons[i].checked) {
            methodSelected = true;
        }
    }

    if (!methodSelected) {
        document.getElementById("err-method").style.display = "block";
        isValid = false;
    }

    // Validate pizza size
    let sizeValue = document.getElementById("size").value;
    if (sizeValue == "none") {
        document.getElementById("err-size").style.display = "block";
        isValid = false;

    }

    if (!isValid){
        alert("hello have evrything on please");
    }
    return isValid;
};

function clearErrors(){
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i< errors.length; i++){
        errors[i].style.display = "none";
    }
}