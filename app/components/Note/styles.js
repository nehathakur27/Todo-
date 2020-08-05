import {StyleSheet} from 'react-native'

export default StyleSheet.create({
   note:{
     position:'relative',
     padding:20,
     paddingRight:100,
   },
   noteText:{
     paddingLeft:20,
   },
   noteDel:{
     position:'absolute',
     justifyContent:'center',
     alignItems:'center',
     padding:10,
     top:10,
     right:10,
     bottom:10,
     backgroundColor:'#2980b9'
   },
   delText:{
     color:'white',
   },
});