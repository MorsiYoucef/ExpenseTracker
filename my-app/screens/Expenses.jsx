import { StyleSheet, Text, View, FlatList } from 'react-native'
import { EXPENSES } from './../data/ExpensesData'
import ExpenseItem from '../components/ExpenseItem'

const Expenses = () => {
  const total = EXPENSES.reduce((sum, expense) => sum + expense.price, 0)
  function renderExpenseItem(itemData) {
    return (
      <View className=' flex items-center mt-5'>
        <ExpenseItem title={itemData.item.title} price={itemData.item.price} />
      </View>
    )
  }

  return (
    <View className=" flex items-center mt-5">
      <View className="flex flex-row items-center justify-between bg-myBlue p-2 w-[90%] rounded-xl">
        <Text className=" text-myBlue_300 font-bold text-sm">Total</Text>
        <Text className=" text-red-500 font-bold text-xl">{total}</Text>
      </View>
      <FlatList
        data={EXPENSES}
        keyExtractor={(item) => item.id}
        renderItem={renderExpenseItem}
      />
    </View>
  )
}

export default Expenses

const styles = StyleSheet.create({})
