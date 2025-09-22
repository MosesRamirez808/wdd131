<script>
  function sortTable(columnIndex) {
    const table = document.querySelector('table tbody');
    const rows = Array.from(table.rows);

    const sortedRows = rows.sort(function (a, b) {
      let aText = a.cells[columnIndex].textContent.trim();
      let bText = b.cells[columnIndex].textContent.trim();

      // For Amount column (index 1), convert to numbers
      if (columnIndex === 1) {
        aText = Number(aText.replace(/,/g, ''));
        bText = Number(bText.replace(/,/g, ''));
      }

      if (aText > bText) return 1;
      if (aText < bText) return -1;
      return 0;
    });

    // Clear existing rows
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }

    // Re-add sorted rows
    sortedRows.forEach(function (row) {
      table.appendChild(row);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    headers = document.querySelectorAll('thead th[scope="col"]');
    headers.forEach(function (header, index) {
      header.style.cursor = 'pointer';
      header.addEventListener('click', function () {
        sortTable(index);
      });
    });
  });
</script>
