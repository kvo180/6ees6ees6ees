class Bee extends Grub {
  constructor() {
    super();
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
};
