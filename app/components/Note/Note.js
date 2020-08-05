import React,{Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import styles from './styles'



class Note extends Component{

  render(){

      const {note,noteText,noteDel,delText} = styles

      return (
         <View key={this.props.keyVal} style={note}>
            <Text style={noteText}>{this.props.val.date}</Text>
            <Text style={noteText}>{this.props.val.note}</Text>
            <TouchableOpacity onPress ={this.props.deleteMethod} style ={noteDel}>
               <Text style={delText}> Del </Text>
            </TouchableOpacity>
         </View>
       );
  }

};



export default Note;