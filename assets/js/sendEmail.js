function sendMail(contactForm) {
    emailjs.send("service_y8ns00y", "template_r2v4r54", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false;
}