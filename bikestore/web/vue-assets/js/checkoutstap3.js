document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('input[name="paymentMethod"]');
    const sections = document.querySelectorAll('section');
  
    // Initially hide all sections except the one associated with Visa
    sections.forEach(function (section) {
      section.classList.add('hidden');
    });
    document.getElementById('section1').classList.remove('hidden');
  
    radioButtons.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        sections.forEach(function (section) {
          section.classList.add('hidden');
        });
  
        const sectionId = 'section' + this.value;
        document.getElementById(sectionId).classList.remove('hidden');
      });
    });
  });
  