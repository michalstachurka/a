/* ============================================================
   demo-form — walidacja lokalna, bez wysyłania i zapisywania danych
   ============================================================ */
(function () {
  'use strict';

  var MESSAGE =
    'To demonstracyjna wersja formularza. <strong>Wiadomość nie została wysłana.</strong> ' +
    'Skontaktuj się telefonicznie pod numerem <a href="tel:+48505083043">505 083 043</a> ' +
    'lub napisz na <a href="mailto:ulmar.remont@gmail.com">ulmar.remont@gmail.com</a>.';

  document.querySelectorAll('[data-demo-form]').forEach(function (form) {
    var status = form.querySelector('.form-status');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var valid = true;
      var firstInvalid = null;

      form.querySelectorAll('[required]').forEach(function (field) {
        var wrap = field.closest('.form-field');
        var ok = field.value.trim() !== '';
        if (wrap) wrap.classList.toggle('has-error', !ok);
        field.setAttribute('aria-invalid', ok ? 'false' : 'true');
        if (!ok) {
          valid = false;
          if (!firstInvalid) firstInvalid = field;
        }
      });

      if (!valid) {
        if (status) {
          status.classList.remove('is-shown');
          status.textContent = '';
        }
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Celowo brak wysyłki i zapisu — wersja demonstracyjna.
      if (status) {
        status.innerHTML = MESSAGE;
        status.classList.add('is-shown');
        status.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    });

    // czyszczenie błędu przy poprawianiu pola
    form.addEventListener('input', function (e) {
      var wrap = e.target.closest('.form-field');
      if (wrap && wrap.classList.contains('has-error') && e.target.value.trim() !== '') {
        wrap.classList.remove('has-error');
        e.target.setAttribute('aria-invalid', 'false');
      }
    });
  });
})();
