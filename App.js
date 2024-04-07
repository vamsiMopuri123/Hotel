import CategoriesScreen from './screens/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';
import MealDetailScreen from './screens/MealDetailScreen'

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{
          title:'All Categories',
          headerStyle:{backgroundColor:'#DB7E3E'},
          headerTintColor:'white',
          contentStyle:{backgroundColor:'#72D248'}
        }}/>
        <Stack.Screen name="MealsOverview" component={MealsOverview} options={{
          title:'Meals Details',
          headerStyle:{backgroundColor:'#23E5D7'},
          headerTintColor:'white',
          contentStyle:{backgroundColor:'#B7B875'}
        }}/>
        <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
          title:'Meals Details',
          headerStyle:{backgroundColor:'#F7DC6F'},
          headerTintColor:'black',
          contentStyle:{backgroundColor:'#B7B875'},
          //headerShown: false
        }}/>
      </Stack.Navigator>
      
    </NavigationContainer>
   
  )
}

