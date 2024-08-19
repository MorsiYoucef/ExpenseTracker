import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import ExpenseItem from '../components/ExpenseItem'
import { useContext } from 'react'
import { ExpensesContext } from '../store/context/ExpensesContext'

const Expenses = ({ updateModal, isModal }) => {
  const expensesCtx = useContext(ExpensesContext)
  const total = expensesCtx.expenses.reduce((acc, curr) => acc + curr.price, 0)

  const openModal = () => {}
  function renderExpenseItem(itemData) {
    return (
      <View className=" flex items-center mt-5">
        <ExpenseItem
          openModal={openModal}
          title={itemData.item.title}
          price={itemData.item.price}
          updateModal={updateModal}
          
        />
      </View>
    )
  }

  return (
    <FlatList
      data={expensesCtx.expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.headerText}>Total</Text>
          <Text style={styles.totalAmount}>{total}</Text>
        </View>
      }
      contentContainerStyle={styles.flatListContent}
    />
  )
}

export default Expenses

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
