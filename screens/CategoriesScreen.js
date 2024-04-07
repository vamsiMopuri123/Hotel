import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';



function CategoryScreen({navigation}){
     //const navigation=useNavigation();
    function renderCategoryItem(itemData){
        function pressHandler(){
            navigation.navigate('MealsOverview',{
                CategoryId:itemData.item.id
            })
        }
        return(
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
        );
    }

    return(

        <FlatList data={CATEGORIES} 
        keyExtractor={(item)=>item.id} 
        renderItem={renderCategoryItem}
        numColumns={2}
        />
    );
}

export default CategoryScreen;