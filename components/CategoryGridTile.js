import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({title,color,onPress}){
    return(
        <View style={styles.gridItem}>
            <Pressable android_ripple={{color:'#ccc'}} style={styles.button} onPress={onPress}>
                <View style={[styles.innerContainer,{ backgroundColor:color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        borderRadius:8,
        margin:16,
        height:150,
        elevation:4,
        backgroundColor:'#0A0A09'
    },
    button:{
        flex:1
    },
    innerContainer:{
        flex:1,
        padding:16,
        alignItems:'center',
        justifyContent:'center',
        
    },
    title:{
        fontWeight:'bold',
        color:'black'
    }

})