import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const ExpenseItem = ({title,price}) => {
  return (
    <TouchableOpacity>
      <View className="flex flex-row justify-between bg-myBlue p-5 w-[90%] rounded-xl">
        <Text className=" text-myBlue_300 font-bold text-xl">{title}</Text>
        <Text className=" text-red-500 font-bold text-xl">{price}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ExpenseItem

const styles = StyleSheet.create({})