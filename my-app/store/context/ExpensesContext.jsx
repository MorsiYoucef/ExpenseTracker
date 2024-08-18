import React, { createContext, useState } from 'react'

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({title,price,date}) => {},
  deleteExpense: (id) => {},
  updateExpense: (id,{title,price,date}) => {},
})

export const ExpensesContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([])

  const addExpense = (expense) => {
    setExpenses((currentExpenses) => [...currentExpenses, expense])
  }

  return (
    <ExpensesContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpensesContext.Provider>
  )
}
