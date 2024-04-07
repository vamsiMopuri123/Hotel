import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealDeatilScreen({route}){
    const mid=route.params.mealId
    const selectedId=MEALS.find((meal)=>meal.id===mid);
    return(
       <ScrollView>
         <Image style={styles.image} source={{uri:selectedId.imageUrl}}/>
         <Text style={styles.title1}>{selectedId.title}</Text>
         
         <MealDetails duration={selectedId.duration} complexity={selectedId.complexity}
             affordability={selectedId. affordability} />

           <View style={styles.line}> 
          <Text style={styles.title2}>Ingredients</Text>
          </View> 
          {selectedId.ingredients.map((ingredient)=>
          <Text style={{marginLeft: 20,paddingVertical:5}} key={ingredient}>{ingredient}</Text>)}

          <View style={styles.line}>
          <Text style={styles.title2}>Steps</Text>
          </View>
          {selectedId.steps.map((ingredient)=>
          <Text style={{marginLeft: 20,paddingVertical:5}} key={ingredient}>{ingredient}</Text>)}

       </ScrollView>
    );
}

export default MealDeatilScreen;

const styles=StyleSheet.create({
  image:{
    width:'100%',
    height:200
  },
  title1:{
    fontWeight:'bold',
    color:'black',
    textAlign:'center',
    fontSize:25,
    margin:8
   },
   title2:{
    fontWeight:'bold',
    color:'black',
    textAlign:'center',
    fontSize:15,
    margin:1,
    padding:5
   },
   line:{
    marginHorizontal:25,
    marginTop: 10,
    marginVertical:2,
    borderBottomColor:'black',
    borderBottomWidth:2
   }

 })