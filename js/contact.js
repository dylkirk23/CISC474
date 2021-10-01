(function() {
    emailjs.init("user_DnyFu9N1NBYXhq3XEExBZ");
    })();

//sends an email based on the given info in the contact form
function sendEmail(){
    //pulling info from the form
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    var form = document.getElementById("contactForm");

    if(lname != "" && fname != "" && message != ""){
        var info = {
            from_name: fname + " " + lname,
            from_email: email,
            from_phone: phone,
            from_message: message
        };

        emailjs.send('service_0ayobwc', 'template_7czprs8', info).then(function (res){});
        form.reset();
    }

    else{
        alert("Please fill out the required fields");
        window.location.reload(false);
    }
}