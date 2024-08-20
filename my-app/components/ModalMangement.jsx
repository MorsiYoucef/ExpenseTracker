import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import React, { useState, createContext, useContext } from 'react'
import Expenses from '../modal/expenses'
import AntDesign from '@expo/vector-icons/AntDesign'
import { ExpensesContext } from '../store/context/ExpensesContext'


const ModalMangement = ({   isModal,expenseId  }) => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [date, setDate] = useState(new Date())
  const expensesCtx = useContext(ExpensesContext);

  
  const handleAdd = () => {
    expensesCtx.addExpense(title, price, date)
    console.log(title, price,date)
  }
  const handleDelete = () => {
    expensesCtx.deleteExpense(expenseId)
  }
  return (
    <View>
      {isModal ? (
        <TouchableOpacity onPress={handleDelete}>
          <AntDesign name="delete" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <View className="flex flex-row gap-5">
          <View className="flex flex-col gap-5">
            <TextInput
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
              className="border p-2"
            />
            <TextInput
              placeholder="Price"
              value={price}
              onChangeText={setPrice}
              keyboardType="numeric"
              className="border p-2"
            />
            <TextInput
              placeholder="YYYY-MM-DD"
              value={date}
              onChangeText={setDate}
              className="border p-2" 
            />
            <View className="flex flex-row gap-5">
              <TouchableOpacity className=" bg-myBlue_200 p-2">
                <Text className="text-white text-center text-xl font-bold ">
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className=" bg-myBlue_200 p-2 text-center"
                onPress={handleAdd}
              >
                <Text className="text-white text-center text-xl font-bold">
                  Add
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  )
}

export default ModalMangement

const styles = StyleSheet.create({})
