import Recent from './screens/Recent'
import Expenses from './screens/Expenses'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Modal from 'react-native-modalbox'
import { Text, Button, StyleSheet, View, Dimensions } from 'react-native'

const Tab = createBottomTabNavigator()
var screen = Dimensions.get('window')

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
    }
  }

  onClose() {
    console.log('Modal just closed')
  }

  onOpen() {
    console.log('Modal just opened')
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed')
  }

  renderList() {
    var list = []

    for (var i = 0; i < 50; i++) {
      list.push(
        <Text style={styles.text} key={i}>
          Elem {i}
        </Text>
      )
    }

    return list
  }

  render() {
    var BContent = (
      <View style={[styles.btn, styles.btnModal]}>
        <Button
          title="X"
          color="white"
          onPress={() => this.setState({ isOpen: false })}
        />
      </View>
    )
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { height: 70 }, // Adjust the height as needed
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#214177', // Change this to your desired background color
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <TouchableOpacity onPress={() => this.refs.modal1.open()}>
                <FontAwesome5
                  name="plus"
                  size={24}
                  color="#BDD8F1"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
            tabBarLabelStyle: { marginBottom: 10 }, // Adjust the margin to reduce space between icon and label
            tabBarActiveTintColor: '#214177', // Color of the label when focused
            tabBarInactiveTintColor: 'gray', // Color of the label when not focused
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
          <Modal
            style={[styles.modal, styles.modal1]}
            ref={'modal1'}
            swipeToClose={this.state.swipeToClose}
            onClosed={this.onClose}
            onOpened={this.onOpen}
            onClosingState={this.onClosingState}
          >
            <Text style={styles.text}>Basic modal</Text>
            <Button
              title={`Disable swipeToClose(${
                this.state.swipeToClose ? 'true' : 'false'
              })`}
              onPress={() =>
                this.setState({ swipeToClose: !this.state.swipeToClose })
              }
              style={styles.btn}
            />
          </Modal>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
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
