import Recent from './screens/Recent'
import Expenses from './screens/Expenses'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { TouchableOpacity, StyleSheet, Text,Button } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Modal from 'react-native-modalbox'
import React, { useState, useRef, forwardRef } from 'react'

const Tab = createBottomTabNavigator()



export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const modalRef = useRef()

  const openModal = () => {
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
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
        onClosed={openModal}
        onOpened={closeModal}
        onClosingState={false}
        isOpen={isModalVisible}
        isDisabled={false}
      >
        <Text style={styles.text}>Basic modal</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal2: {
    height: 230,
    backgroundColor: '#3B5998',
  },

  modal3: {
    height: 300,
    width: 300,
  },

  modal4: {
    height: 300,
  },

  btn: {
    margin: 10,
    backgroundColor: '#3B5998',
    color: 'white',
    padding: 10,
  },

  btnModal: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
  },

  text: {
    color: 'black',
    fontSize: 22,
  },
})
