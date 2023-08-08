import React from 'react'
import {View,Text,StyleSheet,Alert,Button,TextInput} from "react-native";

export default function TextInputDemo(){
        
     
       let [inputName, setInputName] = React.useState('')
       let [inputEmail, setInputEmail] = React.useState('')
       let [inputPassword, setInputPassword] = React.useState('')
       let [inputMemo, setInputMemo] = React.useState('')
       const onPressButton1 = () =>{
        
       }
      
    
return(

    <View style={styles.container}>
        <View style={styles.item}>
            <Text>Name</Text>
            <TextInput style={styles.textnput} defaultValue={inputName}
             onChange={event => setInputName(event.nativeEvent.text)}
            />

              <View style={styles.item}>
            <Text>Email</Text>
            <TextInput style={styles.textnput} defaultValue={inputEmail}
             onChangeText={text => setInputEmail(text)}
             keyboardType='email-address' //number-pad
            />
           <View style={styles.item}>
            <Text>Password</Text>
            <TextInput style={styles.textnput} defaultValue={inputPassword}
             onChangeText={text => setInputPassword(text)}
             secureTextEntry={true}
            />
            </View>
            <View style={styles.item}>
            <Text>Password</Text>
            <TextInput style={[styles.textnput,{height:64}]} defaultValue={inputMemo}
             onChangeText={text => setInputMemo(text)}
             multiline={true}
             numberOfLines={3}
             textAlignVertical='top'
            />
            </View>
            </View>
    <View style={styles.item}>
       <Button title="ตรวจสอบข้อมูล" color = "#FF1493" onPress={ onPressButton1 }/>
      
    </View>
    </View>
    </View>

)
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'colum',
        marginTop:60,
        alignItems: 'center'
    },
    item:{
        marginBottom:15
    },
    TextInput:{
       height:32,
       width:320,
       borderWidth:1,
       borderColor: '#aaa',
       color:'black',
       backgroundColor:'#fff',
       marginTop:5,
       paddingTop:3,
       paddingButtom:3



    }
    
})