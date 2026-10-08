(() => {
  const printButton = document.getElementById('print-guide');
  let closedForPrint = [];
  window.addEventListener('beforeprint', () => {
    closedForPrint = [...document.querySelectorAll('main details:not([open])')];
    closedForPrint.forEach(item => { item.open = true; });
  });
  window.addEventListener('afterprint', () => {
    closedForPrint.forEach(item => { item.open = false; });
    closedForPrint = [];
  });
  printButton.addEventListener('click', () => window.print());
})();
