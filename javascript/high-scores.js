/*
Manage a game player's High Score list.

Your task is to build a high-score component of the classic Frogger game, one of
the highest selling and addictive games of all time, and a classic of the arcade
era. Your task is to write methods that return the highest score from the list,
the last added score and the three highest scores.
*/

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
