document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop page reload

    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
    };

    emailjs.send("service_22twdoj", "template_b7xrbbe", templateParams)
    .then(() => {
        document.getElementById("formStatus").innerText = "✅ Email sent successfully!";
        document.getElementById("contactForm").reset(); // clear form
    })
    .catch(() => {
        document.getElementById("formStatus").innerText = "❌ Failed to send. Try again!";
    });
});
