export default class ExpenseItem {
  title;
  amountPln;
  id;

  constructor(title, amountPln) {
    this.id = Date.now() + amountPln;
    this.title = title;
    this.amountPln = amountPln;
  }

  get amountEur() {
    return (this.amountPln * 4.382).toFixed(2);
  }
}
