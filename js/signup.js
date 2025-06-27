document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const interest = document.getElementById("interest");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Reset error states
    [name, email, interest].forEach((field) => {
      field.classList.remove("is-invalid");
    });

    // Name validation
    if (name.value.trim() === "") {
      name.classList.add("is-invalid");
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add("is-invalid");
      isValid = false;
    }

    // Interest dropdown validation
    if (interest.value === "") {
      interest.classList.add("is-invalid");
      isValid = false;
    }

    if (isValid) {
      alert("✅ Thanks for signing up! We’ll be in touch.");
      form.reset();
    }
  });
});
