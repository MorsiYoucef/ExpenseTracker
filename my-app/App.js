import Recent from './screens/Recent'
import Expenses from './screens/Expenses'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator()

export default function App() {
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
            <TouchableOpacity onPress={() => alert('Icon Pressed!')}>
              <FontAwesome5
                name="plus"
                size={24}
                color="#BDD8F1"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
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
                  size={30}
                  color={focused ? 'blue' : 'gray'}
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
                  size={30}
                  color={focused ? 'blue' : 'gray'}
                />
              )
            },
            title: 'All Expenses',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


