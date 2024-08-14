import Recent from './screens/Recent'
import Expenses from './screens/Expenses'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { TouchableOpacity, StyleSheet, Text,Button } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Modal from 'react-native-modalbox'
import React, { useState, useRef, forwardRef } from 'react'
import { Dimensions } from 'react-native'
import Octicons from '@expo/vector-icons/Octicons'
import ModalMangement from './components/ModalMangement'

const Tab = createBottomTabNavigator()
const { width, height } = Dimensions.get('window')



export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [varupdate, setUpdate] = useState(false)
  const modalRef = useRef()

  const openModal = () => {
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const update = () => {
    setUpdate(false)

  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: 70 },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#214177',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <TouchableOpacity onPress={openModal}>
              <FontAwesome5
                name="plus"
                size={24}
                color="#BDD8F1"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
          tabBarLabelStyle: { marginBottom: 10 },
          tabBarActiveTintColor: '#214177',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Recent"
          component={Recent}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialCommunityIcons
                  name="timer-sand"
                  size={40}
                  color={focused ? '#214177' : 'gray'}
                />
              )
            },
            title: 'Recent Expenses',
          }}
        />
        <Tab.Screen
          name="Expenses"
          component={Expenses}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialCommunityIcons
                  name="calendar-month-outline"
                  size={40}
                  color={focused ? '#214177' : 'gray'}
                />
              )
            },
            title: 'All Expenses',
          }}
        />
      </Tab.Navigator>
      <Modal
        style={[styles.modal]}
        ref={modalRef}
        swipeToClose={true}
        onClosed={closeModal}
        onOpened={openModal}
        isOpen={isModalVisible}
        isDisabled={false}
        position="bottom"
      >
        <Octicons name="triangle-down" size={50} color="black" />
        <ModalMangement update={varupdate} add={isModalVisible} />
      </Modal>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 50,
    flex: 1,
  },
  modal: {
    justifyContent: 'start',
    alignItems: 'center',
    height: height * 0.935,
    
  },
  text: {
    color: 'black',
    fontSize: 22,
  },
})
