(function () {

  function enhance(select) {

    if (select.dataset.enhanced) return;
    select.dataset.enhanced = "true";

    // Sort options alphabetically
    const options = Array.from(select.options);
    options.sort((a, b) => a.text.localeCompare(b.text));
    select.innerHTML = "";
    options.forEach(opt => select.appendChild(opt));

    // Apply NodeBB's built-in Select2
    $(select).select2({
      width: '100%',
      placeholder: 'Search groups...',
      allowClear: true
    });
  }

  function init() {

    document.querySelectorAll('select[name="groups"][multiple]').forEach(function (select) {

      // Wait until options exist
      const check = setInterval(function () {
        if (select.options.length > 0) {
          clearInterval(check);
          enhance(select);
        }
      }, 100);

    });
  }

  $(document).ready(init);
  $(window).on('action:ajaxify.end', init);

})();
