const errormsg1 = "First Name cannot be empty";
const errormsg2 = "Last Name cannot be empty";
const errormsg3 = "Email Address cannot be empty";
const errormsg4 = "Looks like this is not an email cannot be empty";
const errormsg5 = "Password cannot be empty";
const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

const submitbtn = document.querySelector('[name="submitbtn"]');
submitbtn.addEventListener('click', FormSubmitCheck);



function EmailAddressCheck() {
    var email = document.querySelector('[name="EmailAddress"]').value
    if (email.match(emailformat)) {
        return 1;
    } else {
        return 0;
    }
}



function FormSubmitCheck() {
    var firstname = document.querySelector('[name="FirstName"]').value;
    var lastname = document.querySelector('[name="LastName"]').value;
    var emailaddress = document.querySelector('[name="EmailAddress"]').value;
    var password = document.querySelector('[name="Password"]').value;
    var errorcheck = 0;


    if (firstname == "") {
        InputFilledErrorCheck("false", '[name="FirstName"]', errormsg1, 1);
        errorcheck = errorcheck + 1;
    } else {
        InputFilledErrorCheck("true", '[name="FirstName"]', null, 1);
    }


    if (lastname == "") {
        InputFilledErrorCheck("false", '[name="LastName"]', errormsg2, 2);
        errorcheck = errorcheck + 1;
    } else {
        InputFilledErrorCheck("true", '[name="LastName"]', null, 2);
    }
    

    if (emailaddress == "") {
        InputFilledErrorCheck("false", '[name="EmailAddress"]', errormsg3, 3);
        errorcheck = errorcheck + 1;
    } else if (emailaddress != "" & EmailAddressCheck() == 0 ) {
        InputFilledErrorCheck("false", '[name="EmailAddress"]', errormsg4, 3);
        errorcheck = errorcheck + 1;
    } else {
        InputFilledErrorCheck("true", '[name="EmailAddress"]', null, 3);
    }


    if (password == "") {
        InputFilledErrorCheck("false", '[name="Password"]', errormsg5, 4);
        errorcheck = errorcheck + 1;
    } else {
        InputFilledErrorCheck("true", '[name="Password"]', null, 4);
    }

    if (errorcheck != 0) {
        return
    } else if (errorcheck == 0) {
        alert("Thank You for Join Us!");
    }

}



function InputFilledErrorCheck(boolean, nameblock, msg, int) {
    var block = document.querySelector(nameblock);
    var erroricon = document.querySelector('.form__erroricon' + int);
    var errorbox = document.querySelector('.form__errorbox' + int);
    errorbox.textContent = msg;

    if (boolean == "false") {
        block.style.border = "2px solid hsl(0, 100%, 74%)";

        erroricon.style.visibility = "visible";
        errorbox.style.visibility = "visible";
    } else if (boolean == "true") {
        block.style.border = "2px solid hsl(246, 25%, 77%)";

        erroricon.style.visibility = "hidden";
        errorbox.style.visibility = "hidden";
    }

}
