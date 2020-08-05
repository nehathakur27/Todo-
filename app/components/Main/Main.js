import React,{Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles.js'
import Note from '../Note/Note'

class Main extends Component{
   constructor(props){
      super(props)
    }
    state = {noteArray:[],noteText:''}

    addNote(){
      if(this.state.noteText != ""){
              var d = new Date()
              var dates = d.getFullYear()+"/"+(d.getMonth()+1)+ "/"+d.getDate();
              this.state.noteArray.push({
                 'date':dates,
                 'note':this.state.noteText
              });
              this.setState({noteArray:this.state.noteArray})
              this.setState({noteText:''})
         }
    }

    deleteNote(key){
      this.state.noteArray.splice(key,1)
      this.setState({noteArray:this.state.noteArray})
    }

  render(){

        let notes = this.state.noteArray.map((val,key) => {
               return <Note key={key} keyVal ={key} val ={val} deleteMethod={() =>this.deleteNote(key)} />
           });

       const {container,header,headerText,scrollContainer,footer,input,addButton,addButtonText} = styles
      return (
         <View style={container}>

           <View style={header}>
              <Text style={headerText}>Note</Text>
           </View>

           <ScrollView style={scrollContainer}>
             {notes}
           </ScrollView>

           <View style={footer}>
             <TextInput
                onChangeText={(noteText)=>this.setState({noteText })}
                value ={this.state.noteText}
                style={input}
                placeholder="Add Note"
                placeholderTextColor = 'white'
                />
           </View>

           <TouchableOpacity style={addButton} onPress={() => this.addNote()}>
             <Text style={addButtonText}>+</Text>
           </TouchableOpacity>

         </View>
       );
  }

};



export default Main;