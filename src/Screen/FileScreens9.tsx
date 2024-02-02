import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FileScreens9 = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.box1}></Text>
    <Text style={styles.box2}></Text>
    <Text style={styles.box3}></Text>
    
</View>
)
}
const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#212F3C',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
    
    
    

},
box1:{
    // flex:1,
    width:100,
    height:100,
    backgroundColor:'#8468AB',
    borderWidth:10,
    borderColor:'white',
    fontSize:30,
    color:'white',
    // alignSelf:'center'
    
            

},
box2:{
    //  flex:2,
    width:100,
    height:100,
    backgroundColor:'orange',
    borderWidth:10,
    borderColor:'white',
    fontSize:30,
    color:'white',
    // alignSelf:'flex-start'
    top:50
    
    
    
            
    

},
box3:{
    // flex:1,
    width:100,
    height:100,
    backgroundColor:'#08D0F8',
    borderWidth:10,
    borderColor:'white',
    fontSize:30,
    color:'white',
    // alignSelf:'flex-end'
    

}

})
  

