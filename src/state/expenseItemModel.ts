export default class ExpenseItem {
  title: string;
  amountPln: number;
  id: string;

  constructor(title: string, amountPln: number) {
    this.id = Date.now() + amountPln + "";
    this.title = title;
    this.amountPln = amountPln;
  }

  get amountEur() {
    return (this.amountPln * 4.382).toFixed(2);
  }
}
