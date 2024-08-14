import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalMangement = ({ update, add }) => {
  return (
    <View>
      {update && <Text>Update Mode</Text>}
      {add && (
        <View>
          <Text>Add Mode</Text>
        </View>
      )}
    </View>
  )
}

export default ModalMangement

const styles = StyleSheet.create({})
