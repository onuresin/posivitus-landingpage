document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      var emailInput = document.getElementById('eposta');
      var email = emailInput.value;
      if (!email.includes('@')) {
        e.preventDefault();
        alert("Lütfen geçerli bir e-posta adresi giriniz!");
        emailInput.focus();
      }
    });
  });
  