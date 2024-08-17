import React, { createContext, useState } from 'react'

export const ExpensesContext = createContext()

export const ExpensesProvider = ({ children }) => {
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
