export class Matrix {
  constructor(input) {
    this.matrix = input;
  }

  get rows() {
    if (!this._rows) {
      this._rows = this.matrix
        .split('\n')
        .map(element => element.split(' ').map(Number));
    }
    return this._rows;
  }

  get columns() {
    if (!this._columns) {
      this._columns = this.rows[0].map((_, i) => this.rows.map(elt => elt[i]));
    }
    return this._columns;
  }
}
