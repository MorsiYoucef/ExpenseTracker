import Recent from './screens/Recent'
import Expenses from './screens/Expenses'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: 70 }, // Adjust the height as needed
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
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


