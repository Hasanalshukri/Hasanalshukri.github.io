function submitForm() {
    var form = document.getElementById("contactForm");
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert("Form submitted successfully!");
                form.reset();
            } else {
                alert("Error submitting the form.");
            }
        }
    };


    xhr.open("POST", "your_backend_script.php", true);
    xhr.send(formData);
}