import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect } from "react";

function MealsOverview({route,navigation}){
    const cId=route.params.CategoryId
    const displayMeals=MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(cId)>=0;
    })

    useEffect(()=>{
       const categoryTitle=CATEGORIES.find(
        (category)=> category.id===cId
        ).title;
        
        navigation.setOptions({
            title:categoryTitle
        });

    },[cId,navigation])

    function renderMealItem(itemData){
        const item=itemData.item;
        const meals={
            id:item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            duration:item.duration,
            complexity:item.complexity,
            affordability:item.affordability
        }
        return <MealItem {...meals}/>
    }
    return(
        <View>
            <FlatList data={displayMeals} keyExtractor={(item)=>item.id} renderItem={renderMealItem}/>
        </View>
    );
}

export default MealsOverview;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    }
})