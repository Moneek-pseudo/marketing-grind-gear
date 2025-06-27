document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const name = document.getElementById("contact-name");
  const email = document.getElementById("contact-email");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    [name, email, message].forEach((field) =>
      field.classList.remove("is-invalid")
    );

    if (name.value.trim() === "") {
      name.classList.add("is-invalid");
      isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add("is-invalid");
      isValid = false;
    }

    if (message.value.trim().length < 5) {
      message.classList.add("is-invalid");
      isValid = false;
    }

    if (isValid) {
      alert("✅ Thank you for your message! We’ll get back to you soon.");
      form.reset();
    }
  });
});
