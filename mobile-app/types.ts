/* ********* models ********* */

export interface Account {
  id: number;
  name: string;
  description?: string,
  icon?: string,
  color?: string,
  starting_balance: number,
}

export interface Category {
  id: number;
  name: string;
  description?: string,
  icon?: string,
  color?: string,
}

export interface Transaction {
  id: number,
  account: Account,
  category: Category,
  date: Date,
  label?: string,
  description?: string,
  amount: number;
  internal_transaction_account?: Account,
}
