const contactForm = document.querySelector(".php-email-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailData = {
    emailSubject: "New message from your portfolio site",
    receiver: "itzparves@gmail.com",
  };

  const emailFields = ["name", "email", "subject", "message"];

  emailFields.forEach((field) => (emailData[field] = e.target[field].value));

  fetch("http://localhost:5000/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        alert("Email sent successfully");
        contactForm.reset();
      } else {
        alert("Email not sent");
      }
    });
});
