export class HighScores {
  constructor(input) {
    this.highScores = input;
  }

  get scores() {
    return this.highScores;
  }

  get latest() {
    return this.highScores[this.highScores.length - 1];
  }

  get personalBest() {
    const max = this.highScores.reduce((acc, cur) => {
      return cur > acc ? cur : acc;
    });
    return max;
  }

  get personalTopThree() {
    const sorted = this.highScores.sort((a, b) => {
      return b - a;
    });
    return sorted.slice(0, 3);
  }
}
