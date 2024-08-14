import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ModalMangement = ({ update, add }) => {
  return (
    <View>
      {update && <Text>Update Mode</Text>}
      {add && (
        <View className="flex flex-row gap-5">
          <TouchableOpacity className=" bg-myBlue_200 p-2">
            <Text className="text-white text-center text-xl font-bold ">
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className=" bg-myBlue_200 p-2 text-center">
            <Text className="text-white text-center text-xl font-bold">
              Add
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default ModalMangement

const styles = StyleSheet.create({})
