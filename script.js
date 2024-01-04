function validate() {
    var result = "";
    result += validateName();
    result += validateEmail();
    result += validatePassword();
    result += validateTerms();
    if (result == ""){
        alert("Created Successfully");
        return true;
    }
    alert("Validation result: \n\n" + result);
    return false;

}

function validateName() {
    var name = document.getElementsByName("name")[0].value;
    if (name.length <= 3)
        return "name should be at least three characters. \n";
    return "";
}
function validatePassword() {
    var password = valueOf("password");
    var retypr = valueOf("passwordRe");
    if (password.length <= 6)
        return "Password should be atleast 6 character";
    if (password != retypr)
        return "Password do not match"

    return "";
}

function validateEmail() {
    var email = valueOf("email");
    var reType = valueOf("emailRe");
    if (email.indexOf("@") == -1)
        return "EMail should be a valid address";
    if (email != reType)
        return "Email is not matching"

    return "";

}

function validateTerms() {
    var terms = document.getElementsByName("terms")[0];
    if (!terms.checked)
        return "Please accept the Terms of service and privacy policy"
    return ""
}
function valueOf(name) {
    return document.getElementsByName(name)[0].value;
}