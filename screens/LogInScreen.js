import React from 'react';
import {View,Text,StyleSheet,Image,TextInput, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native'
import firebase from 'firebase'

export default class LogInScreen extends React.Component{
  constructor() {
    super()
    this.state = {emailId:'', password: ''}
  }
  LogIn = async(email,password)=>{
    if(email && password) {
      try{
        const response = await firebase.auth().signInWithEmailAndPassword(email,password)
        if(response){this.props.navigation.navigate('Transaction')}

      }
      catch(error) {
        switch(error.code){
          case 'auth/user-not-found': 
          alert("user does not exist")
          console.log("user does not exist")
          break;
          case 'auth/invalid-email':
          alert("incorrect email Id or password")
          console.log("invalid email Id or password")
        }
      }
    }
    else{
      alert("enter email and password")
    }
  }
  render(){
    return(
      <KeyboardAvoidingView style = {{alignItems: 'center', marginTop: 20 
      }}> 
      <View> 
      <Image source = {require("../assets/booklogo.jpg")}
      style = {{width: 200, height:200}} />
      <Text style = {{textAlign: 'center', fontSize: 30}}> Willy </Text>
       </View>
      <View> 
      <TextInput style = {styles.logInBox}
      placeholder = "abc@example.com"
      keyboardType = 'email-adress'
      onChangeText = {(text)=>{
        this.setState({
          emailId:text
        })
      }} />
      <TextInput 
      style = {styles.logInBox}
      placeholder = "password"
      secureTextEntry = {true}
      onChangeText = {(text)=>{
      this.setState({
        password:text
      })}}/>
       </View>
       <View> 
       <TouchableOpacity style = {{height: 30, width: 90, borderWidth: 1, marginTop: 20, paddingTop: 5, borderRadius:7}} onPress = {()=>{this.LogIn(this.state.emailId, this.state.password)}}> 
       <Text style = {{textAlign: 'center'}}> Log In </Text> </TouchableOpacity>
        </View>
       </KeyboardAvoidingView>

    )
  }
}

const styles = StyleSheet.create({
  logInBox: {
    width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin: 10,
    paddingLeft: 10
  },
  
})
