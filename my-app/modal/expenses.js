class Expenses {
  constructor(id, title, price,date) {
    this.id = id
    this.title = title
    this.price = price
    this.date = date || new Date();
  }
}

export default Expenses
