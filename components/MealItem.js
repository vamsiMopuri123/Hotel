import {Text,View,Pressable,Image,StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';


function MealItem({id,title,imageUrl,}){
    const navigation=useNavigation();
    function mealHandler(){
        navigation.navigate('MealDetail',{
            mealId:id
    });
    }


    return(
        <View style={styles.container}>
            <Pressable android_ripple={{color:'#ccc'}}
             onPress={mealHandler}>
                <Image source={{uri:imageUrl}} style={styles.image}/>
                <View>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:10,
        borderRadius:20
    },
    image:{
        width:'100%',
        height:300
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center',
        color:'black',
        margin:10
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    title1:{
        fontWeight:'bold',
        fontSize:14,
        color:'black',
        marginHorizontal:8,
        padding:10
    }
})