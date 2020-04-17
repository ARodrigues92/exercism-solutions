export class Matrix {
  constructor(input) {
    this.matrix = input;
  }

  get rows() {
    const rows = this.matrix
      .split('\n')
      .map(element => element.split(' ').map(Number));
    return rows;
  }

  get columns() {
    const columns = this.rows[0].map((_, i) => this.rows.map(elt => elt[i]));
    return columns;
  }
}