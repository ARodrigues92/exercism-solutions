export class Matrix {
  constructor(input) {
    const rows = input.split('\n');
    this.rows = [];
    this.columns = [];

    rows.forEach(row => {
      const newRow = row.split(' ');
      this.rows.push(newRow.map(Number));
    });

    for (let i = 0; i < this.rows[0].length; i++) {
      this.columns[i] = [];
      for (let j = 0; j < this.rows.length; j++) {
        this.columns[i].push(this.rows[j][i]);
      }
    }
  }
}
