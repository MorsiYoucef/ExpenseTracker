import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import React,{useState} from 'react'

const ModalMangement = ({ update, add }) => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

  const handleAdd = () => {
    // Logic to add the item to the list
    console.log('Title:', title, 'Price:', price)
  }
  return (
    <View>
      {update && <Text>Update Mode</Text>}
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
