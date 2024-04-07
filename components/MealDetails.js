import {View,Text,StyleSheet} from 'react-native'

function MealDetails({duration,complexity, affordability}){
    return(
        <View style={styles.details} >
                    <Text style={styles.title1}>{duration}min</Text>
                    <Text style={styles.title1}>{complexity}</Text>
                    <Text style={styles.title1}>{ affordability}</Text>
        </View>
    );
}

export default MealDetails;

const styles=StyleSheet.create({
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