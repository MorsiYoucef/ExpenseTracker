import React, { createContext, useReducer } from 'react'

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ title, price, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { title, price, date }) => {},
})

const DUMMY_EXPENSES = [
  { id: '1', title: 'Groceries', price: 120, date: new Date('2021-07-21') },
  { id: '2', title: 'Rent', price: 1500, date: new Date('2021-07-15') },
  { id: '3', title: 'Car Payment', price: 400, date: new Date('2021-07-10') },
  { id: '4', title: 'Eating Out', price: 200, date: new Date('2021-07-05') },
  {
    id: '5',
    title: 'Gym Membership',
    price: 100,
    date: new Date('2021-07-01'),
  },
  { id: '6', title: 'Pet Food', price: 50, date: new Date('2021-06-30') },
  { id: '7', title: 'Phone Bill', price: 50, date: new Date('2021-06-25') },
  { id: '8', title: 'Travel', price: 1200, date: new Date('2022-08-15') },
  { id: '9', title: 'Pet Toys', price: 100, date: new Date('2023-08-10') },
  { id: '10', title: 'Groceries', price: 150, date: new Date('2024-08-12') },
  { id: '11', title: 'Car Payment', price: 600, date: new Date('2024-08-18') },
]

const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString()
      return [{ ...action.payload }, ...state]
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload)
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      )
      const updatableExpenses = state[updatableExpenseIndex]
      const updatedItem = { ...updatableExpenses, ...action.payload.data }
      const updatedExpenses = [...state]
      updatedExpenses[updatableExpenseIndex] = updatedItem
      return updatedExpenses
    default:
      return state
  }
}
export const ExpensesContextProvider = ({ children }) => {
  const [expenseState, dispach] = useReducer(expenseReducer, DUMMY_EXPENSES)

  const addExpense = (expense) => {
    dispach({ type: 'ADD', payload: expense })
  }

  const deleteExpense = (id) => {
    dispach({ type: 'DELETE', payload: id })
  }

  const updateExpense = (id, expense) => {
    dispach({ type: 'UPDATE', payload: { id: id, data: expense } })
  }

  const value ={
    expenses: expenseState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense:updateExpense,
  }
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  )
}
