function numbermatrix(rows, cols) {
  document.write('<table>');
  for (i = 0; i < rows; i++) {
    document.write('<tr>');
    for (j = 0; j < cols; j++) {
      document.write('<td>' + fill(i, j) + '</td>');
    }
    document.write('</tr>');
  }
  document.write('</table>');

  function fill(i, j) {
      function fill(i, j) {
    if(i === j) {
      return 1;
    } else if (i > j) {
      return 2;
    } else {
      return 3;
    }
  }
}
numbermatrix(5, 5);