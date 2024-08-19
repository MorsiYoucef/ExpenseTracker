import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import React, { useState, createContext } from 'react'
import Expenses from '../modal/expenses'
import AntDesign from '@expo/vector-icons/AntDesign'

export const ExpensesContext = createContext()

const ModalMangement = ({  add, isModal  }) => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const expensesArray = []

  const handleAdd = () => {
    const newExpense = new Expenses(
      Math.random().toString(36).substr(2, 9),
      title,
      parseFloat(price),
      new Date()
    )
    expensesArray.push(newExpense)
    console.log(expensesArray)
  }
  return (
    <View>
      {isModal && (
        <TouchableOpacity>
          <AntDesign name="delete" size={24} color="black" />
        </TouchableOpacity>
      )}
      {add && (
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
