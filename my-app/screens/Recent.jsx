import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import ExpenseItem from '../components/ExpenseItem'
import { useContext } from 'react'
import { ExpensesContext } from '../store/context/ExpensesContext'

const Recent = () => {
  const expensesCtx = useContext(ExpensesContext)
  const today = new Date()
  const sevenDaysAgo = new Date(today)
  sevenDaysAgo.setDate(today.getDate() - 7)
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const expenseDate = new Date(expense.date)
    return expenseDate >= sevenDaysAgo && expenseDate <= today
  })
  const total = recentExpenses.reduce((acc, curr) => acc + curr.price, 0)
  function renderExpenseItem(itemData) {
    return (
      <View className=" flex items-center mt-5">
        <ExpenseItem title={itemData.item.title} price={itemData.item.price} />
      </View>
    )
  }
  return (
    <FlatList
      data={recentExpenses}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderExpenseItem}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.headerText}>Last 7 days</Text>
          <Text style={styles.totalAmount}>{total}</Text>
        </View>
      }
      contentContainerStyle={styles.flatListContent}
    />
  )
}

export default Recent

const styles = StyleSheet.create({
  flatListContent: {
    alignItems: 'center',
    marginTop: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3667A6', // Replace with your color
    padding: 10,

    width: '90%',
    borderRadius: 10,
  },
  headerText: {
    color: '#BDD8F1', // Replace with your color
    fontWeight: 'bold',
    fontSize: 18,
  },
  totalAmount: {
    color: '#ff0000', // Replace with your color
    fontWeight: 'bold',
    fontSize: 18,
  },
})
