// Shri Online Center – small enhancements (site works fully without JS)

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// "Open now / Closed" badge based on Indian time (IST)
(function () {
  var OPEN_HOUR = 9;   // 9:00 AM
  var CLOSE_HOUR = 18; // 6:00 PM
  var el = document.getElementById('open-status');
  if (!el) return;

  var now = new Date();
  var istMinutes = (now.getUTCHours() * 60 + now.getUTCMinutes() + 330) % 1440;
  var isOpen = istMinutes >= OPEN_HOUR * 60 && istMinutes < CLOSE_HOUR * 60;

  el.textContent = isOpen ? 'अभी खुला है' : 'अभी बंद है';
  el.classList.add(isOpen ? 'is-open' : 'is-closed');
  el.hidden = false;
})();
