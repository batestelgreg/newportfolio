document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("my-form") || document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", async function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        // Show notification on main page
        var notif = document.createElement('div');
        notif.textContent = 'Message sent successfully!';
        notif.style.cssText = 'position:fixed;top:20px;right:20px;background:#00f5ff;color:#0b1b2c;padding:16px 32px;border-radius:8px;box-shadow:0 2px 8px #00f5ff;font-weight:bold;z-index:9999;';
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 3000);
        form.reset();
      } else {
        var status = document.getElementById("my-form-status") || document.getElementById("contact-form-status");
        if (status) {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form";
            }
          });
        }
      }
    }).catch(error => {
      var status = document.getElementById("my-form-status") || document.getElementById("contact-form-status");
      if (status) {
        status.innerHTML = "Oops! There was a problem submitting your form";
      }
    });
  });
});
